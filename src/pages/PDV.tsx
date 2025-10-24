import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useApp } from "@/contexts/AppContext";
import { ShoppingCart, Plus, Minus, Trash2, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function PDV() {
  const { categories, menuItems, addOrder } = useApp();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup" | "dine-in">("dine-in");
  const [tableNumber, setTableNumber] = useState("");
  const { toast } = useToast();

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const addToCart = (item: typeof menuItems[0]) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: item.id,
          name: item.name,
          price: item.promotionalPrice || item.price,
          quantity: 1,
        },
      ]);
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleFinishOrder = () => {
    if (cart.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione itens ao pedido antes de finalizar",
        variant: "destructive",
      });
      return;
    }

    addOrder({
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total,
      status: "new",
      deliveryType,
      table: deliveryType === "dine-in" && tableNumber ? parseInt(tableNumber) : undefined,
    });

    toast({
      title: "Pedido criado!",
      description: `Pedido no valor de R$ ${total.toFixed(2)} foi registrado`,
    });

    setCart([]);
    setTableNumber("");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">PDV - Ponto de Venda</h1>
        <p className="text-muted-foreground">Crie pedidos rapidamente</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Todos</TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.name}>
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory}>
              <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
                {filteredItems.map((item) => (
                  <Card
                    key={item.id}
                    className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => addToCart(item)}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-24 object-cover rounded-md mb-2"
                      />
                    )}
                    <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                    {item.description && (
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <div className="text-right">
                        {item.promotionalPrice ? (
                          <>
                            <p className="text-sm font-bold text-status-new">
                              R$ {item.promotionalPrice.toFixed(2)}
                            </p>
                            <p className="text-xs text-muted-foreground line-through">
                              R$ {item.price.toFixed(2)}
                            </p>
                          </>
                        ) : (
                          <p className="text-sm font-bold">R$ {item.price.toFixed(2)}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-8">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="h-5 w-5" />
              <h2 className="text-xl font-bold">Pedido Atual</h2>
            </div>

            <div className="space-y-2 mb-4">
              <label className="text-sm font-medium">Tipo de Entrega</label>
              <Select value={deliveryType} onValueChange={(v: any) => setDeliveryType(v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dine-in">Consumo no Local</SelectItem>
                  <SelectItem value="pickup">Retirada</SelectItem>
                  <SelectItem value="delivery">Entrega</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {deliveryType === "dine-in" && (
              <div className="space-y-2 mb-4">
                <label className="text-sm font-medium">Número da Mesa</label>
                <Input
                  type="number"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="Ex: 5"
                />
              </div>
            )}

            <div className="border-t pt-4 mb-4 max-h-[300px] overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Carrinho vazio
                </p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-2 mb-3 pb-3 border-b">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        R$ {item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Total:</span>
                <span className="text-2xl font-bold">R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full gap-2" size="lg" onClick={handleFinishOrder}>
              <DollarSign className="h-4 w-4" />
              Finalizar Pedido
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
