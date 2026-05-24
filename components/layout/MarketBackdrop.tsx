export default function MarketBackdrop() {
  return (
    <div className="market-backdrop" aria-hidden>
      <span className="market-backdrop__wash market-backdrop__wash--left" />
      <span className="market-backdrop__wash market-backdrop__wash--right" />
      <span className="market-backdrop__glow market-backdrop__glow--primary" />
      <span className="market-backdrop__glow market-backdrop__glow--secondary" />
      <span className="market-backdrop__grid" />
    </div>
  );
}
