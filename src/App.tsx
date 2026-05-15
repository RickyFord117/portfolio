import { Navbar } from "./components/ui/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { ExpertiseSection } from "./components/sections/ExpertiseSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";

function App() {
  return (
    <div className='min-h-screen bg-slate-950 selection:bg-brand-primary selection:text-white flex flex-col'>
      <Navbar />

      <main className='flex-grow'>
        <HeroSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Simple Footer */}
      <footer className='py-8 text-center border-t border-slate-900 bg-slate-950'>
        <p className='text-slate-500 text-sm'>
          © {new Date().getFullYear()} Islander Tech. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
