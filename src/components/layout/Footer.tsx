// src/components/layout/Footer.tsx
export const Footer: React.FC = () => (
  <footer className="border-t border-slate-800 mt-8">
    <div className="container mx-auto px-4 py-4 text-xs text-slate-400 flex justify-between">
      <span>© {new Date().getFullYear()} SkinLabs® · OpenHaus Premium</span>
      <span>Best-in-class skincare marketplace · Cash back · Giveaways · Early access</span>
    </div>
  </footer>
);
