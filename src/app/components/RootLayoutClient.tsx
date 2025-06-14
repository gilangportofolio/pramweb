'use client';

import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { LanguageProvider } from "@/app/context/LanguageContext";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
} 