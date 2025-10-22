import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Settings, MapPin, Clock, CreditCard, Printer, Info } from "lucide-react";

export default function Configuracoes() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Settings className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Configurações</h1>
        </div>
        <p className="text-muted-foreground">Configure seu estabelecimento e formas de operação</p>
      </div>

      <Tabs defaultValue="informacoes" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="informacoes" className="gap-2">
            <Info className="h-4 w-4" />
            Informações
          </TabsTrigger>
          <TabsTrigger value="endereco" className="gap-2">
            <MapPin className="h-4 w-4" />
            Endereço
          </TabsTrigger>
          <TabsTrigger value="entrega" className="gap-2">
            <Clock className="h-4 w-4" />
            Entrega
          </TabsTrigger>
          <TabsTrigger value="horarios" className="gap-2">
            <Clock className="h-4 w-4" />
            Horários
          </TabsTrigger>
          <TabsTrigger value="pagamento" className="gap-2">
            <CreditCard className="h-4 w-4" />
            Pagamento
          </TabsTrigger>
          <TabsTrigger value="impressora" className="gap-2">
            <Printer className="h-4 w-4" />
            Impressora
          </TabsTrigger>
        </TabsList>

        <TabsContent value="informacoes">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Dados do Estabelecimento</h3>
                <p className="text-sm text-muted-foreground">Informações básicas do seu negócio</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome do Estabelecimento *</Label>
                <Input id="nome" placeholder="Ex: Pizzaria Bella Napoli" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" placeholder="(11) 98765-4321" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input id="instagram" placeholder="@seurestaurante" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="segmento">Segmento</Label>
                <Input id="segmento" placeholder="Ex: Pizzaria, Hamburgueria, Japonês" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cnpj">CNPJ ou CPF</Label>
                <Input id="cnpj" placeholder="00.000.000/0000-00" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="responsavel">Nome do Responsável</Label>
                <Input id="responsavel" placeholder="Nome completo" />
              </div>
            </div>

            <Button className="mt-6 gap-2">
              <Info className="h-4 w-4" />
              Salvar Informações
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="endereco">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold">Endereço</h3>
                <p className="text-sm text-muted-foreground">Localização do seu estabelecimento</p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP *</Label>
                  <Input id="cep" placeholder="00000-000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="logradouro">Logradouro (rua, avenida, etc.) *</Label>
                  <Input id="logradouro" placeholder="Avenida Consolação Elisabeto Foleiro" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="numero">Número *</Label>
                  <Input id="numero" placeholder="2000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input id="complemento" placeholder="Ex: apartamento" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bairro">Bairro *</Label>
                  <Input id="bairro" placeholder="Centro" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input id="cidade" placeholder="São Paulo" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estado">Estado *</Label>
                  <Input id="estado" placeholder="SP" maxLength={2} />
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">
                  Deseja ocultar o endereço para seus clientes?
                </p>
                <p className="text-xs text-muted-foreground">
                  Se o endereço aparecer nas informações do seu estabelecimento no Cardápio Digital
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm mb-3">
                  Deseja informar latitude e longitude do seu estabelecimento manualmente?
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Clique no mapa para ajustar a localização exata
                </p>
                <div className="bg-slate-200 h-64 rounded-lg flex items-center justify-center text-muted-foreground">
                  Mapa interativo
                </div>
              </div>
            </div>

            <Button className="mt-6 gap-2">
              <MapPin className="h-4 w-4" />
              Salvar Endereço
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="entrega">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold">Entrega</h3>
                <p className="text-sm text-muted-foreground">Configure opções de entrega</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg text-center">
                <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Configure suas opções de entrega</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="horarios">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-orange-500" />
              <div>
                <h3 className="text-lg font-semibold">Horários</h3>
                <p className="text-sm text-muted-foreground">Defina os horários de funcionamento</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg text-center">
                <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Configure seus horários de funcionamento</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="pagamento">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="h-6 w-6 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold">Pagamento</h3>
                <p className="text-sm text-muted-foreground">Configure formas de pagamento</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg text-center">
                <CreditCard className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Configure suas formas de pagamento</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="impressora">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Printer className="h-6 w-6 text-purple-500" />
              <div>
                <h3 className="text-lg font-semibold">Impressora</h3>
                <p className="text-sm text-muted-foreground">Configure sua impressora</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg text-center">
                <Printer className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Configure sua impressora</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
