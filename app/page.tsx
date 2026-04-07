import Navbar from "@/app/components/layout/Navbar";
import BackgroundGrid from "@/app/components/ui/BackgroundGrid";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)]">
      <BackgroundGrid />

      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto min-h-[200vh] max-w-[1320px] px-6 md:px-10">
          <section className="min-h-[80vh]" />
          <section className="min-h-[80vh]" />
          <section className="min-h-[80vh]" />
        </main>
      </div>
    </div>
  );
}