import { motion } from "framer-motion";
import { SectionContainer } from "../ui/SectionContainer";
import { ProjectCard } from "../ui/ProjectCard";
import { ScrollReveal } from "../ui/ScrollReveal";

// ... (Keep your ProjectItem type and PROJECTS array exactly the same as before) ...
type ProjectItem = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const PROJECTS: ProjectItem[] = [
  {
    title: "Polidex AI RAG Platform",
    description:
      "Served as CTO to architect an AI workflow optimization tool for fire engineers. Developed a custom FastAPI MCP server connecting OpenAI, Qdrant vector search, and Neo4j graph databases to query building regulations.",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    tags: ["ReactJS", "Python FastAPI", "Qdrant", "Neo4j", "Google Cloud"],
    liveUrl: "#",
  },
  {
    title: "Enterprise VOD Platforms",
    description:
      "Lead Engineer managing massive-scale video-on-demand applications for high-profile clients. Handled component re-architecture, complex analytics integrations (Adobe, Conviva), and deployment to millions of Roku, LG, and Samsung devices.",
    imageUrl:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000&auto=format&fit=crop",
    tags: ["Roku", "BrightScript", "React/Redux", "TypeScript", "NodeJS"],
    liveUrl: "#",
  },
  {
    title: "AuroraNow Space Weather",
    description:
      "A fully independent mobile application allowing users to track Auroras via custom APIs. Built end-to-end including a Supabase backend with edge functions, Google AdMob implementation, and RevenueCat subscription paywalls.",
    imageUrl:
      "https://images.unsplash.com/photo-1531366936337-7785e0bf1bb8?q=80&w=1000&auto=format&fit=crop",
    tags: ["Flutter", "Supabase", "Firebase", "RevenueCat", "Google AdMob"],
    liveUrl: "https://play.google.com/store",
  },
];

export function ProjectsSection() {
  return (
    <SectionContainer id='projects'>
      <ScrollReveal>
        <div className='mb-12 md:text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-100 mb-4'>
            Featured Work
          </h2>
          <p className='text-lg text-slate-400 max-w-2xl md:mx-auto'>
            A selection of enterprise streaming systems, advanced AI
            architectures, and independent apps shipped directly to production.
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-8'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-5%" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              className='h-full' // Ensures cards in the same row are the same height
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
