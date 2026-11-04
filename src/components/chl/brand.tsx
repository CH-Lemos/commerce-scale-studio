import logoAsset from '@/assets/chl-logo.png.asset.json';
import logoInverseAsset from '@/assets/chl-logo-white.png.asset.json';

export function Brand({ inverse = false }: { inverse?: boolean }) {
  const asset = inverse ? logoInverseAsset : logoAsset;
  return (
    <span className="brand">
      <img
        className="brand-logo"
        src={asset.url}
        alt="CHL Digital"
        width={1748}
        height={364}
        loading="eager"
        decoding="async"
      />
    </span>
  );
}
