import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const Hero = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-lg flex justify-center items-center flex-col relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-3 w-full text-center">
        <Spotlight
          className="-top-40 -left-20 md:left-80 md:-top-20"
          fill="white"
        />
        <h1 className="mt-20 md:mt-0 text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the music card
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re a beginner or looking to refine
          your skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              borderRadius="1.75rem"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
