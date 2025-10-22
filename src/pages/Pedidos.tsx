import { Card } from "@/components/ui/card";
import { DollarSign, ShoppingBag, TrendingUp, Clock, Package, ChefHat, Truck, CheckCircle2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Pedidos() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Painel de Pedidos</h1>
        <p className="text-muted-foreground">Gerencie seus pedidos em tempo real</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Faturamento Hoje</p>
              <p className="text-2xl font-bold">R$ 0.00</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pedidos Hoje</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
              <ShoppingBag className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Ticket Médio</p>
              <p className="text-2xl font-bold">R$ 0.00</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Aguardando</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center">
              <Clock className="h-6 w-6 text-orange-500" />
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="novos" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="novos" className="data-[state=active]:bg-status-new data-[state=active]:text-status-new-foreground">
            <Package className="h-4 w-4 mr-2" />
            Novos
            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">0</span>
          </TabsTrigger>
          <TabsTrigger value="preparo" className="data-[state=active]:bg-status-preparing data-[state=active]:text-status-preparing-foreground">
            <ChefHat className="h-4 w-4 mr-2" />
            Em Preparo
            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">0</span>
          </TabsTrigger>
          <TabsTrigger value="pronto" className="data-[state=active]:bg-status-ready data-[state=active]:text-status-ready-foreground">
            <Truck className="h-4 w-4 mr-2" />
            Saiu / Pronto
            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">0</span>
          </TabsTrigger>
          <TabsTrigger value="concluidos" className="data-[state=active]:bg-status-completed data-[state=active]:text-status-completed-foreground">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Concluídos
            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">0</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="novos" className="mt-6">
          <Card className="p-12 text-center">
            <div className="flex flex-col items-center justify-center">
              <Package className="h-16 w-16 text-muted-foreground/20 mb-4" />
              <p className="text-xl font-medium text-muted-foreground mb-2">Nenhum pedido novo</p>
              <p className="text-sm text-muted-foreground">Os pedidos confirmados aparecerão aqui</p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="preparo" className="mt-6">
          <Card className="p-12 text-center">
            <div className="flex flex-col items-center justify-center">
              <ChefHat className="h-16 w-16 text-muted-foreground/20 mb-4" />
              <p className="text-xl font-medium text-muted-foreground mb-2">Nenhum pedido em preparo</p>
              <p className="text-sm text-muted-foreground">Os pedidos em produção aparecerão aqui</p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="pronto" className="mt-6">
          <Card className="p-12 text-center">
            <div className="flex flex-col items-center justify-center">
              <Truck className="h-16 w-16 text-muted-foreground/20 mb-4" />
              <p className="text-xl font-medium text-muted-foreground mb-2">Nenhum pedido a caminho</p>
              <p className="text-sm text-muted-foreground">Os pedidos prontos ou a caminho aparecerão aqui</p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="concluidos" className="mt-6">
          <Card className="p-12 text-center">
            <div className="flex flex-col items-center justify-center">
              <CheckCircle2 className="h-16 w-16 text-muted-foreground/20 mb-4" />
              <p className="text-xl font-medium text-muted-foreground mb-2">Nenhum pedido concluído hoje</p>
              <p className="text-sm text-muted-foreground">Os pedidos finalizados aparecerão aqui</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
