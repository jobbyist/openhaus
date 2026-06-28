// src/components/layout/PageShell.tsx
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const PageShell: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
};
