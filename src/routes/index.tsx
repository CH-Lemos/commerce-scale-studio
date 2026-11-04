import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader, SiteFooter, openWhatsApp } from '@/components/chl/site-shell';
import { Hero, Problems, Solutions, Methodology, Marketplaces, Experience, Cases, About, FinalCTA } from '@/components/chl/sections';

const title = 'CHL Digital | Gestão Estratégica de Marketplaces';
const description = 'Consultoria e gestão estratégica de marketplaces para aumentar vendas, rentabilidade e escala no e-commerce.';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: '/' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: '/' }] }),
  component: Index,
});

function Index() {
  return <><SiteHeader /><main><Hero onContact={openWhatsApp} /><Problems /><Solutions onContact={openWhatsApp} /><Methodology /><Marketplaces /><Experience /><Cases /><About /><FinalCTA onContact={openWhatsApp} /></main><SiteFooter /></>;
}
