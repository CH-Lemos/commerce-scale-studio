import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, TrendingUp, BarChart3, Users, MessageSquare, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-foreground bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <TrendingUp className="text-primary-foreground h-6 w-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">CHL<span className="text-primary">DIGITAL</span></span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#problema" className="hover:text-primary transition-colors">Problemas</a>
            <a href="#solucao" className="hover:text-primary transition-colors">Solução</a>
            <a href="#metodologia" className="hover:text-primary transition-colors">Metodologia</a>
            <a href="#casos" className="hover:text-primary transition-colors">Cases</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>
          <Button size="lg" className="hidden sm:inline-flex">
            Análise Gratuita
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden border-b">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Especialistas em Marketplaces Premium
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Pare de vender sem margem. <br />
                <span className="text-primary">Escale com lucro real.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Transformamos operações de marketplace em negócios previsíveis e lucrativos através de gestão baseada em dados, estratégia de canais e eficiência operacional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 h-14">
                  Quero uma análise da minha conta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 h-14">
                  Conhecer Metodologia
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problema Section */}
        <section id="problema" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">O desafio não é mais "estar online"</h2>
              <p className="text-muted-foreground italic">O desafio é crescer sem ser engolido pelas taxas e custos.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Vendas sem Margem", desc: "Você fatura alto, mas no final do mês o lucro líquido é quase inexistente devido a custos ocultos." },
                { title: "Escala Travada", desc: "Sua operação não suporta o aumento de volume sem gerar caos logístico ou erros de estoque." },
                { title: "Refém do Algoritmo", desc: "Suas vendas dependem 100% de Ads sem estratégia, corroendo seu ROI diariamente." }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-destructive"><BarChart3 className="w-10 h-10" /></div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solução Section */}
        <section id="solucao" className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Gestão Profissional de Performance</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nossa consultoria não entrega apenas relatórios. Entregamos execução e clareza para que você foque no que importa: a expansão do seu negócio.
                </p>
                <ul className="space-y-4">
                  {[
                    "Otimização de Anúncios (SEO & Conversão)",
                    "Gestão Estratégica de Ads (Meli & Shopee Ads)",
                    "Precificação Inteligente por Canal",
                    "Integração de ERP e Hubs de Operação"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary w-5 h-5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
                  [Gráfico de Crescimento CHL Digital]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Canais Section */}
        <section className="py-16 border-y bg-muted/10">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">Especialistas Certificados em</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
              {["Mercado Livre", "Shopee", "Amazon", "Magalu", "Americanas"].map(name => (
                <span key={name} className="text-2xl font-black">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Metodologia Section */}
        <section id="metodologia" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Nossa Metodologia Proprientária</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", name: "Diagnóstico", desc: "Análise profunda de saúde da conta e identificação de gargalos." },
                { step: "02", name: "Planejamento", desc: "Definição de metas de ROI e plano de ação tático." },
                { step: "03", name: "Execução", desc: "Implementação das otimizações e gestão de campanhas." },
                { step: "04", name: "Escala", desc: "Monitoramento contínuo e reinvestimento estratégico para crescer." }
              ].map((item, i) => (
                <div key={i} className="relative p-6 border rounded-2xl hover:border-primary transition-colors">
                  <span className="text-4xl font-black text-primary/20 absolute top-4 right-6">{item.step}</span>
                  <h3 className="text-xl font-bold mb-3 mt-4">{item.name}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section id="casos" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">+R$ 50 Mi</div>
                <p className="text-primary-foreground/80">Gerados para nossos clientes</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">300%</div>
                <p className="text-primary-foreground/80">Crescimento médio em 12 meses</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">+200</div>
                <p className="text-primary-foreground/80">Contas otimizadas com sucesso</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/3 aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">[Foto do Consultor]</div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">Expertise que gera resultado</h2>
                <p className="text-lg mb-6">
                  Na CHL Digital, acreditamos que o e-commerce brasileiro não perdoa amadores. Nossa missão é profissionalizar vendedores que têm ótimos produtos, mas que ainda não dominam a estratégia das plataformas.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-primary" />
                    <span className="font-semibold">Certificação Platinum</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-primary" />
                    <span className="font-semibold">Foco no Cliente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-background rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="p-12 md:w-1/2 bg-primary text-primary-foreground flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Vamos escalar seu negócio?</h2>
                  <p className="mb-8 opacity-90">Preencha o formulário e receba um diagnóstico inicial da sua conta em até 24 horas.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5" />
                    <span>contato@chldigital.com.br</span>
                  </div>
                  <Button variant="secondary" className="w-full mt-4">Falar no WhatsApp</Button>
                </div>
              </div>
              <div className="p-12 md:w-1/2">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome Completo</label>
                    <Input placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">E-mail Corporativo</label>
                    <Input placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Faturamento Mensal</label>
                    <Input placeholder="Ex: R$ 50.000,00" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Principais Desafios</label>
                    <Textarea placeholder="Conte brevemente sobre sua operação..." />
                  </div>
                  <Button className="w-full" size="lg">Solicitar Diagnóstico</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 CHL Digital - Consultoria em Marketplaces. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
