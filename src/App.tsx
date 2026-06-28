// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import { PageShell } from './components/layout/PageShell';
import { Home } from './routes/Home';
import { Marketplace } from './routes/Marketplace';
import { Rewards } from './routes/Rewards';
import { Account } from './routes/Account';

function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </PageShell>
  );
}

export default App;
