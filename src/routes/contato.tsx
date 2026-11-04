import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { z } from 'zod';
import { ArrowUpRight, Check, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { SiteHeader, SiteFooter, WhatsAppIcon } from '@/components/chl/site-shell';
import { contactInfo, whatsappUrl } from '@/components/chl/content';

const title = 'Contato | CHL Digital — Gestão de Marketplaces';
const description = 'Fale com a CHL Digital pelo WhatsApp, e-mail ou formulário e solicite um diagnóstico da sua operação em marketplaces.';

export const Route = createFileRoute('/contato')({
  head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, 'Informe seu nome').max(120),
  company: z.string().trim().min(1, 'Informe a empresa').max(160),
  email: z.string().trim().email('E-mail inválido').max(255),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(1, 'Conte um pouco sobre sua operação').max(2000),
});

function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) { setError(parsed.error.issues[0].message); setStatus('error'); return; }
    setStatus('sending'); setError('');
    const { error: dbError } = await supabase.from('contact_submissions').insert({ ...parsed.data, phone: parsed.data.phone || null });
    if (dbError) { setError('Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.'); setStatus('error'); return; }
    form.reset(); setStatus('sent');
  }
  return <><SiteHeader /><main className="contact-page section-chl"><div className="container-chl contact-page-grid"><div className="contact-page-intro"><span className="eyebrow">CONTATO</span><h1>Vamos conversar sobre a sua operação.</h1><p>Conte sobre seus canais e desafios. A CHL Digital retorna para entender seu cenário e indicar o próximo passo.</p><div className="contact-channels"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> <span><strong>WhatsApp</strong>{contactInfo.whatsappDisplay}</span></a><a href={`mailto:${contactInfo.email}`}><Mail /> <span><strong>E-mail</strong>{contactInfo.email}</span></a></div></div><form className="contact-form contact-page-form" onSubmit={onSubmit} noValidate><label>Seu nome<input name="name" autoComplete="name" required maxLength={120} placeholder="Nome e sobrenome" /></label><label>Empresa<input name="company" autoComplete="organization" required maxLength={160} placeholder="Nome da empresa" /></label><label>E-mail profissional<input name="email" type="email" autoComplete="email" required maxLength={255} placeholder="voce@empresa.com.br" /></label><label>Telefone / WhatsApp (opcional)<input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="(11) 90000-0000" /></label><label>Sobre sua operação<textarea name="message" required rows={5} maxLength={2000} placeholder="Quais canais você utiliza e qual seu principal desafio?" /></label><Button variant="brand" size="lg" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : <>Enviar mensagem <ArrowUpRight /></>}</Button>{status === 'sent' && <p role="status" className="form-status"><Check /> Mensagem enviada. Obrigado pelo contato!</p>}{status === 'error' && <p role="alert" className="form-error">{error}</p>}</form></div></main><SiteFooter /></>;
}
