import logoAsset from '@/assets/chl-logo.png.asset.json';
import logoInverseAsset from '@/assets/chl-logo-white.png.asset.json';
import compactAsset from '@/assets/chl-logo-compact.png.asset.json';
import compactInverseAsset from '@/assets/chl-logo-compact-white.png.asset.json';

export function Brand({ inverse = false }: { inverse?: boolean }) {
  const full = inverse ? logoInverseAsset : logoAsset;
  const compact = inverse ? compactInverseAsset : compactAsset;
  return (
    <span className="brand">
      <picture>
        <source media="(max-width: 950px)" srcSet={compact.url} />
        <img
          className="brand-logo"
          src={full.url}
          alt="CHL Digital"
          width={1748}
          height={364}
          loading="eager"
          decoding="async"
        />
      </picture>
    </span>
  );
}
