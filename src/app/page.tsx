import ChooseUs from "@/components/ChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <FeaturedCourses />
      <ChooseUs />
    </main>
  );
}
