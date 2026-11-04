import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Menu, X, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Brand } from '@/components/chl/brand';
import { navigation } from '@/components/chl/content';
import { ContactDialog } from '@/components/chl/contact-dialog';
import { Hero, Problems, Solutions, Methodology, Marketplaces, Experience, Cases, About, FinalCTA } from '@/components/chl/sections';

const title = 'CHL Digital | Gestão Estratégica de Marketplaces';
const description = 'Consultoria e gestão estratégica de marketplaces para aumentar vendas, rentabilidade e escala no e-commerce.';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: '/' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: '/' }] }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => { setMenuOpen(false); setContactOpen(true); };
  return <><header className="site-header"><div className="container-chl header-inner"><a href="#inicio" aria-label="CHL Digital — Início" onClick={() => setMenuOpen(false)}><Brand /></a><nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav><Button variant="brand" className="header-cta" onClick={openContact}>Falar com um especialista <ArrowUpRight /></Button><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>{menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação mobile">{navigation.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}<Button variant="brand" onClick={openContact}>Falar com um especialista <ArrowUpRight /></Button></nav>}</header><main><Hero onContact={openContact} /><Problems /><Solutions onContact={openContact} /><Methodology /><Marketplaces /><Experience /><Cases /><About /><FinalCTA onContact={openContact} /></main><footer className="site-footer"><div className="container-chl"><div className="footer-grid"><div className="footer-brand"><a href="#inicio" aria-label="CHL Digital — voltar ao início"><Brand inverse /></a><p className="footer-tagline">Conectando sonhos, entregando qualidade</p><p className="footer-brand-copy">Consultoria e Gestão Estratégica de Marketplaces</p><p className="footer-brand-copy">Estratégia, operação e performance.<br />Conectadas ao seu crescimento.</p></div><div><h3 className="footer-title">Explore</h3><nav className="footer-links" aria-label="Navegação do rodapé">{navigation.slice(1, 6).map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav></div><div><h3 className="footer-title">Vamos conversar</h3><Button variant="link" className="footer-contact" onClick={openContact}>Falar com a CHL <ArrowUpRight /></Button><p className="footer-note">Contato oficial<br />Em breve</p></div><div className="footer-social"><h3 className="footer-title">Conecte-se</h3><p className="footer-note">Perfis oficiais em breve.</p><div className="social-placeholders"><span aria-label="LinkedIn — perfil a inserir" title="LinkedIn — perfil oficial a inserir"><Linkedin /></span><span aria-label="Instagram — perfil a inserir" title="Instagram — perfil oficial a inserir"><Instagram /></span></div></div></div><div className="footer-bottom"><p>© 2026 CHL Digital. Todos os direitos reservados.</p><p>CNPJ e políticas institucionais serão disponibilizados em breve.</p></div></div></footer><ContactDialog open={contactOpen} onOpenChange={setContactOpen} /></>;
}
