/**
 * Capturas do BizManager em /public/images/projects/bizmanager (loja de demonstração com dados fictícios).
 * Para trocar uma imagem: substitua o arquivo mantendo o nome, ou adicione um novo aqui com a largura e altura reais.
 * Os textos alternativos (alt) ficam em pt.ts e en.ts.
 */
const basePath = "/images/projects/bizmanager";

const desktop = (file: string) => ({ src: `${basePath}/${file}`, width: 2400, height: 1500 });
const mobile = (file: string) => ({ src: `${basePath}/${file}`, width: 780, height: 1688 });

export const bizManagerImages = {
  dashboard: desktop("dashboard.webp"),
  sales: desktop("sales.webp"),
  newSale: desktop("new-sale.webp"),
  orders: desktop("orders.webp"),
  finance: desktop("finance.webp"),
  clients: desktop("clients.webp"),
  clientHistory: desktop("client-history.webp"),
  inventory: desktop("inventory.webp"),
  agenda: desktop("agenda.webp"),
  profit: { src: `${basePath}/profit.webp`, width: 2256, height: 904 },
  mobileDashboard: mobile("mobile-dashboard.webp"),
  mobileSales: mobile("mobile-sales.webp"),
  lockup: { src: `${basePath}/brand/bizmanager-lockup.svg`, width: 256, height: 42 },
  lockupOnDark: { src: `${basePath}/brand/bizmanager-lockup-on-dark.svg`, width: 256, height: 42 },
};
