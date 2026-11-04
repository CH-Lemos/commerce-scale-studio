import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Brand } from '@/components/chl/brand';
import { navigation, contactInfo, whatsappUrl } from '@/components/chl/content';

/** Anchor to a home section that works from any page. */
const sectionHref = (id: string) => `/#${id}`;

export function openWhatsApp() {
  window.open(whatsappUrl(), '_blank', 'noopener,noreferrer');
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 9.44 9.45c0 5.2-4.24 9.43-9.46 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.8.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.3l5.72-1.5a11.3 11.3 0 0 0 5.72 1.46h.01c6.25 0 11.35-5.1 11.35-11.35 0-3.03-1.18-5.88-3.32-8.03" /></svg>;
}

export function WhatsAppFloat() {
  return <a className="whatsapp-float" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a CHL Digital pelo WhatsApp"><WhatsAppIcon /></a>;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return <header className="site-header"><div className="container-chl header-inner"><a href={sectionHref('inicio')} aria-label="CHL Digital — Início" onClick={close}><Brand /></a><nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(([label, id]) => id === 'contato' ? <Link to="/contato" key={id}>{label}</Link> : <a href={sectionHref(id)} key={id}>{label}</a>)}</nav><Button variant="brand" className="header-cta" onClick={openWhatsApp}>Falar com um especialista <ArrowUpRight /></Button><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>{menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação mobile">{navigation.map(([label, id]) => id === 'contato' ? <Link to="/contato" key={id} onClick={close}>{label}</Link> : <a href={sectionHref(id)} key={id} onClick={close}>{label}</a>)}<Button variant="brand" onClick={() => { close(); openWhatsApp(); }}>Falar com um especialista <ArrowUpRight /></Button></nav>}</header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container-chl"><div className="footer-grid"><div className="footer-brand"><a href={sectionHref('inicio')} aria-label="CHL Digital — voltar ao início"><Brand inverse /></a><p className="footer-tagline">Conectando sonhos, entregando qualidade</p><p className="footer-brand-copy">Consultoria e Gestão Estratégica de Marketplaces</p><p className="footer-brand-copy">Estratégia, operação e performance.<br />Conectadas ao seu crescimento.</p></div><div><h3 className="footer-title">Explore</h3><nav className="footer-links" aria-label="Navegação do rodapé">{navigation.slice(1, 6).map(([label, id]) => <a href={sectionHref(id)} key={id}>{label}</a>)}</nav></div><div><h3 className="footer-title">Vamos conversar</h3><nav className="footer-links"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="footer-contact-link"><WhatsAppIcon /> {contactInfo.whatsappDisplay}</a><a href={`mailto:${contactInfo.email}`} className="footer-contact-link"><Mail /> {contactInfo.email}</a><Link to="/contato">Formulário de contato</Link></nav></div><div className="footer-social"><h3 className="footer-title">Conecte-se</h3><p className="footer-note">Perfis oficiais em breve.</p><div className="social-placeholders"><span aria-label="LinkedIn — perfil a inserir" title="LinkedIn — perfil oficial a inserir"><Linkedin /></span><span aria-label="Instagram — perfil a inserir" title="Instagram — perfil oficial a inserir"><Instagram /></span></div></div></div><div className="footer-bottom"><p>© 2026 CHL Digital. Todos os direitos reservados.</p><p>CNPJ e políticas institucionais serão disponibilizados em breve.</p></div></div></footer>;
}
