import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />
      <Features />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
} 