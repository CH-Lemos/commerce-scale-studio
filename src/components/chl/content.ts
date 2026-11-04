import { BarChart3, CircleDollarSign, Megaphone, PackageCheck, Settings2, ShoppingBag, Target, TrendingUp, Layers3, ChartNoAxesCombined } from 'lucide-react';

export const navigation = [['Início', 'inicio'], ['Soluções', 'solucoes'], ['Metodologia', 'metodologia'], ['Marketplaces', 'marketplaces'], ['Cases', 'cases'], ['Sobre', 'sobre'], ['Contato', 'contato']] as const;
export const authority = [{ value: '+X', label: 'marketplaces gerenciados' }, { value: '+X', label: 'projetos' }, { value: 'X', label: 'anos de experiência' }, { value: 'Foco', label: 'Especialização em Marketplace' }];
export const problems = [
  { icon: ShoppingBag, title: 'Anúncios que não convertem', text: 'Seu catálogo precisa conectar relevância, posicionamento e uma experiência de compra clara.' },
  { icon: Megaphone, title: 'Ads sem controle de rentabilidade', text: 'Investir em mídia sem acompanhar a margem pode transformar vendas em prejuízo.' },
  { icon: CircleDollarSign, title: 'Precificação sem estratégia', text: 'Competitividade não significa abrir mão de margem. Cada preço precisa de um propósito.' },
  { icon: Target, title: 'Promoções que corroem margem', text: 'Ações comerciais devem gerar resultado para o negócio, não apenas volume de pedidos.' },
  { icon: PackageCheck, title: 'Estoque e logística desalinhados', text: 'Disponibilidade, prazos e operação precisam acompanhar o ritmo das suas vendas.' },
  { icon: BarChart3, title: 'Falta de acompanhamento dos indicadores', text: 'Sem uma leitura consistente dos dados, oportunidades e riscos passam despercebidos.' },
];
export const solutions = [
  { icon: ShoppingBag, title: 'Gestão de Marketplaces', text: 'Gestão operacional e comercial das contas, com acompanhamento próximo e decisões orientadas ao negócio.', tags: 'Operação · Comercial · Indicadores' },
  { icon: Target, title: 'Consultoria Estratégica', text: 'Diagnóstico, planejamento e direcionamento para identificar prioridades e construir um caminho de crescimento.', tags: 'Diagnóstico · Planejamento · Direção' },
  { icon: ChartNoAxesCombined, title: 'Performance & Ads', text: 'Estratégia de mídia, campanhas e otimização do investimento, conectando performance à rentabilidade.', tags: 'Mídia · Conversão · Rentabilidade' },
  { icon: Layers3, title: 'Estruturação & Escala', text: 'Processos, catálogo, indicadores, logística e fulfillment preparados para a expansão dos seus canais.', tags: 'Processos · Logística · Expansão' },
];
export const methodology = [
  { title: 'Diagnóstico', text: 'Entendemos a operação, os canais e os indicadores. Identificamos gargalos e oportunidades reais.' },
  { title: 'Estratégia', text: 'Definimos prioridades, objetivos e um plano de ação conectado à realidade do negócio.' },
  { title: 'Execução', text: 'Colocamos o plano em prática, alinhando catálogo, campanhas e operação comercial.' },
  { title: 'Gestão', text: 'Acompanhamos os indicadores e ajustamos a rota com uma rotina consistente de análise.' },
  { title: 'Escala', text: 'Consolidamos processos e expandimos os canais com foco em crescimento sustentável.' },
];
export const channels = ['Mercado Livre', 'Shopee', 'Amazon', 'Magalu', 'Leroy Merlin', 'TikTok Shop'];
export const cases = [{ title: 'Marketplace', category: 'Crescimento', icon: TrendingUp }, { title: 'Performance', category: 'Rentabilidade', icon: BarChart3 }, { title: 'Estruturação', category: 'Escala', icon: Settings2 }];
export const contactInfo = {
  whatsappNumber: '5511963807622',
  whatsappDisplay: '+55 11 96380-7622',
  whatsappMessage: 'Olá! Vim pelo site e quero falar com a CHL Digital.',
  email: 'contato@chldigital.com.br',
};

export const whatsappUrl = () => `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;
