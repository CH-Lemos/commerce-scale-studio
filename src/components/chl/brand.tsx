export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <span className={`brand ${inverse ? 'brand-inverse' : ''}`} aria-label="CHL Digital"><span className="brand-monogram">CHL<span className="brand-dot">.</span></span><span className="brand-digital">DIGITAL</span></span>;
}