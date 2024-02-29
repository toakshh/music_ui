import ChooseUs from "@/components/ChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Webinars from "@/components/Webinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <FeaturedCourses />
      <ChooseUs />
      <Testimonials />
      <Webinars />
      <Instructors />
    </main>
  );
}
