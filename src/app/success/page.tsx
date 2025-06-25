// app/success/page.tsx
import { Suspense } from "react";
import SucessoPageClient from "./SucessPageClient";

// força renderização no server + client, evita build estático
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-white">
          Carregando…
        </div>
      }
    >
      <SucessoPageClient />
    </Suspense>
  );
}
