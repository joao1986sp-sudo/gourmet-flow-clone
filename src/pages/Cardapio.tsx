import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories = [
  {
    id: 1,
    name: "Pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    promotion: true,
  },
  {
    id: 2,
    name: "Bebidas",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696",
    promotion: true,
    description: "Refrigerantes, sucos e águas",
  },
  {
    id: 3,
    name: "Sobremesas",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    promotion: true,
    description: "Deliciosas sobremesas para finalizar sua refeição",
  },
  {
    id: 4,
    name: "Lanches",
    description: "Com os melhores lanches da cidade!",
  },
];

const menuItems = [
  {
    id: 1,
    name: "Marguerita",
    description: "Dbdbdb",
    price: 10,
    promotionalPrice: 9,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    category: "Pizzas",
  },
];

export default function Cardapio() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestão de Cardápio</h1>
          <p className="text-muted-foreground">Configure categorias e itens do seu menu</p>
        </div>
        <Button size="lg" className="gap-2">
          <Sparkles className="h-4 w-4" />
          Extrair com IA
        </Button>
      </div>

      <Tabs defaultValue="categorias" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="categorias">Categorias</TabsTrigger>
          <TabsTrigger value="itens">Itens do Menu</TabsTrigger>
        </TabsList>

        <TabsContent value="categorias">
          <div className="mb-4">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nova Categoria
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {category.image ? (
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover"
                    />
                    {category.promotion && (
                      <Badge className="absolute top-3 left-3 bg-status-new text-status-new-foreground">
                        PROMOÇÃO
                      </Badge>
                    )}
                  </div>
                ) : (
                  <div className="h-48 w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-4xl">🍴</span>
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                      {category.description && (
                        <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <Edit className="h-3 w-3" />
                      Editar
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 text-destructive hover:bg-destructive hover:text-destructive-foreground">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="itens">
          <div className="mb-4">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Novo Item
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <Badge variant="outline" className="mb-2">{item.category}</Badge>
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    {item.promotionalPrice ? (
                      <>
                        <span className="text-lg font-bold text-status-new">
                          R$ {item.promotionalPrice.toFixed(2)}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          R$ {item.price.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold">R$ {item.price.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <Edit className="h-3 w-3" />
                      Editar
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 text-destructive hover:bg-destructive hover:text-destructive-foreground">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
