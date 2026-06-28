// src/components/auth/AuthGate.tsx
import React from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useEffect, useState } from 'react';

type AuthState =
  | { status: 'loading' }
  | { status: 'guest' }
  | { status: 'premium'; email: string }
  | { status: 'non-premium'; email: string };

export const AuthGate: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<AuthState>({ status: 'loading' });

  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setState({ status: 'guest' });
        return;
      }

      const email = session.user.email ?? '';
      const { data: profile } = await supabase
        .from('profiles')
        .select('is_premium')
        .eq('id', session.user.id)
        .single();

      if (profile?.is_premium) {
        setState({ status: 'premium', email });
      } else {
        setState({ status: 'non-premium', email });
      }
    };

    void init();
  }, []);

  if (state.status === 'loading') {
    return <div className="text-sm text-slate-400">Checking your Premium status…</div>;
  }

  if (state.status === 'guest') {
    return (
      <div className="max-w-md mx-auto text-center space-y-4">
        <h2 className="text-xl font-semibold">OpenHaus is for SkinLabs® Premium members only</h2>
        <p className="text-sm text-slate-400">
          Sign in or upgrade to unlock cash back rewards, personalised recommendations, giveaways, and early access.
        </p>
        {/* Replace with shadcn-ui button */}
        <button
          className="px-4 py-2 rounded bg-yellow-400 text-slate-900 font-medium"
          onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  if (state.status === 'non-premium') {
    return (
      <div className="max-w-md mx-auto text-center space-y-4">
        <h2 className="text-xl font-semibold">Upgrade to SkinLabs® Premium</h2>
        <p className="text-sm text-slate-400">
          Your account is active, but not Premium yet. Upgrade to access OpenHaus and all member benefits.
        </p>
        <button className="px-4 py-2 rounded bg-yellow-400 text-slate-900 font-medium">
          Upgrade to Premium
        </button>
      </div>
    );
  }

  // Premium: render protected content
  return <>{children}</>;
};
