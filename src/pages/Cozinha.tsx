import { Card } from "@/components/ui/card";
import { ChefHat } from "lucide-react";

export default function Cozinha() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="bg-status-new px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ChefHat className="h-8 w-8 text-status-new-foreground" />
          <div>
            <h1 className="text-2xl font-bold text-status-new-foreground">Cozinha (KDS)</h1>
            <p className="text-status-new-foreground/80 text-sm">Pedidos em Produção</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-status-new-foreground/80">Pedidos na fila</p>
          <p className="text-4xl font-bold text-status-new-foreground">0</p>
        </div>
      </div>

      <div className="p-8">
        <Card className="bg-slate-800 border-slate-700 p-16 text-center">
          <div className="flex flex-col items-center justify-center">
            <ChefHat className="h-24 w-24 text-slate-600 mb-6" />
            <p className="text-2xl font-medium text-slate-300 mb-2">Nenhum pedido na fila</p>
            <p className="text-slate-400">Os pedidos confirmados aparecerão aqui</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
