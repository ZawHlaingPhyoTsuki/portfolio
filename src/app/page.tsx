import { FadeUp } from '@/components/motion/fade-up';
import { Hero } from '@/components/sections/hero';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { TechStack } from '@/components/sections/tech-stack';
// import { Certifications } from '@/components/sections/certifications';
import { Education } from '@/components/sections/education';
import { OutsideIde } from '@/components/sections/outside-ide';
import { Contact } from '@/components/sections/contact';
import GithubActivity from '@/components/sections/github-activity';
// import { Featured } from '@/components/sections/featured';

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-14 px-4 pb-10 sm:gap-16 sm:px-6 sm:pb-16">
      <FadeUp>
        <Hero />
      </FadeUp>

      {/* <FadeUp>
        <Featured  />
      </FadeUp> */}

      <FadeUp>
        <Experience />
      </FadeUp>

      <FadeUp>
        <Projects limit={3} showExplore />
      </FadeUp>

      <FadeUp>
        <TechStack />
      </FadeUp>

      {/* <FadeUp>
        <Certifications />
      </FadeUp> */}

      <FadeUp>
        <Education />
      </FadeUp>

      <FadeUp>
        <OutsideIde />
      </FadeUp>

      <FadeUp>
        <GithubActivity />
      </FadeUp>

      <FadeUp>
        <Contact />
      </FadeUp>
    </main>
  );
}
