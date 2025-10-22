import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const tables = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  number: i + 1,
  status: "free" as const,
}));

export default function Salao() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Utensils className="h-8 w-8 text-green-500" />
            <h1 className="text-3xl font-bold">Pedidos Salão</h1>
          </div>
          <p className="text-muted-foreground">Gestão de mesas e comandas</p>
        </div>
        <Button size="lg" className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Pedido
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {tables.map((table) => (
          <Card
            key={table.id}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{table.number}</div>
              <div className="text-sm font-medium mb-3">Mesa {table.number}</div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Livre
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Utensils({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}
