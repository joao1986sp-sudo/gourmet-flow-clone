import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useApp } from "@/contexts/AppContext";
import { ChefHat, Clock, AlertTriangle, CheckCircle, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MonitorCozinha() {
  const { orders } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const newOrders = orders.filter((o) => o.status === "new");
  const preparingOrders = orders.filter((o) => o.status === "preparing");
  const readyOrders = orders.filter((o) => o.status === "ready");
  
  // Pedidos atrasados (mais de 30 minutos)
  const delayedOrders = orders.filter((o) => {
    const minutes = (new Date().getTime() - new Date(o.createdAt).getTime()) / 60000;
    return o.status !== "completed" && minutes > 30;
  });

  const slides = [
    { title: "Pedidos em Análise", icon: Package, data: newOrders, color: "status-new" },
    { title: "Pedidos em Produção", icon: ChefHat, data: preparingOrders, color: "status-preparing" },
    { title: "Prontos para Entrega", icon: CheckCircle, data: readyOrders, color: "status-ready" },
    { title: "Pedidos Atrasados", icon: AlertTriangle, data: delayedOrders, color: "destructive" },
    { title: "Status Geral", icon: Clock, data: [], color: "primary" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - new Date(date).getTime()) / 60000);
    return `${diff} min`;
  };

  return (
    <div className="min-h-screen bg-gradient-dark p-8">
      <div className={`bg-${currentSlideData.color} px-8 py-6 mb-8 rounded-lg`}>
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <Icon className="h-12 w-12" />
            <div>
              <h1 className="text-4xl font-bold">{currentSlideData.title}</h1>
              <p className="text-lg opacity-90">Monitor de Cozinha - Slide {currentSlide + 1}/5</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg opacity-90">Total</p>
            <p className="text-6xl font-bold">{currentSlideData.data.length}</p>
          </div>
        </div>
      </div>

      {currentSlide === 4 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-8 text-center bg-card">
            <Package className="h-16 w-16 mx-auto mb-4 text-status-new" />
            <p className="text-4xl font-bold mb-2">{newOrders.length}</p>
            <p className="text-lg text-muted-foreground">Em Análise</p>
          </Card>
          <Card className="p-8 text-center bg-card">
            <ChefHat className="h-16 w-16 mx-auto mb-4 text-status-preparing" />
            <p className="text-4xl font-bold mb-2">{preparingOrders.length}</p>
            <p className="text-lg text-muted-foreground">Em Produção</p>
          </Card>
          <Card className="p-8 text-center bg-card">
            <CheckCircle className="h-16 w-16 mx-auto mb-4 text-status-ready" />
            <p className="text-4xl font-bold mb-2">{readyOrders.length}</p>
            <p className="text-lg text-muted-foreground">Prontos</p>
          </Card>
          <Card className="p-8 text-center bg-card">
            <Clock className="h-16 w-16 mx-auto mb-4 text-primary" />
            <p className="text-4xl font-bold mb-2">
              {orders.length > 0
                ? Math.round(
                    orders.reduce((sum, o) => {
                      const diff = (new Date().getTime() - new Date(o.createdAt).getTime()) / 60000;
                      return sum + diff;
                    }, 0) / orders.length
                  )
                : 0}
            </p>
            <p className="text-lg text-muted-foreground">Tempo Médio (min)</p>
          </Card>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentSlideData.data.length === 0 ? (
            <Card className="col-span-full p-16 text-center bg-card">
              <Icon className="h-24 w-24 mx-auto mb-6 text-muted-foreground/20" />
              <p className="text-2xl font-medium text-muted-foreground">
                Nenhum pedido nesta categoria
              </p>
            </Card>
          ) : (
            currentSlideData.data.map((order) => (
              <Card key={order.id} className="p-6 bg-card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold">#{order.number}</h3>
                    {order.table && (
                      <Badge variant="outline" className="mt-2">
                        Mesa {order.table}
                      </Badge>
                    )}
                  </div>
                  <div className="text-right">
                    <Badge className={`bg-${currentSlideData.color}`}>
                      {formatTime(order.createdAt)}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.quantity}x {item.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{order.deliveryType}</span>
                  <span className="text-xl font-bold">R$ {order.total.toFixed(2)}</span>
                </div>
              </Card>
            ))
          )}
        </div>
      )}

      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-12 bg-primary" : "w-2 bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
