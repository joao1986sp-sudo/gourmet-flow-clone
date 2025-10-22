import { LayoutDashboard, ShoppingCart, UtensilsCrossed, Utensils, Receipt, ChefHat, BarChart3, Settings, Tag, DollarSign, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

const mainNavItems: NavItem[] = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Pedidos Online", href: "/pedidos", icon: ShoppingCart },
  { title: "Cardápio", href: "/cardapio", icon: UtensilsCrossed },
  { title: "Salão", href: "/salao", icon: Utensils },
  { title: "Comandas", href: "/comandas", icon: Receipt },
  { title: "Cozinha (KDS)", href: "/cozinha", icon: ChefHat },
  { title: "Relatórios", href: "/relatorios", icon: BarChart3 },
  { title: "Configurações", href: "/configuracoes", icon: Settings },
];

const marketingNavItems: NavItem[] = [
  { title: "Cupons", href: "/cupons", icon: Tag },
  { title: "Cashback", href: "/cashback", icon: DollarSign },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-sidebar">
      <div className="flex h-16 items-center gap-3 border-b px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <Utensils className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold">GourmetFlow</h1>
          <p className="text-xs text-muted-foreground">Admin Panel</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <div className="space-y-1 px-3">
          <p className="px-3 text-xs font-semibold text-muted-foreground">MENU PRINCIPAL</p>
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.title}
              </Link>
            );
          })}
        </div>

        <div className="mt-6 space-y-1 px-3">
          <p className="px-3 text-xs font-semibold text-muted-foreground">MARKETING</p>
          {marketingNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="border-t p-4">
        <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            R
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Restaurante</p>
            <p className="text-xs text-muted-foreground truncate">Gerenciar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
