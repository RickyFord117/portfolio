import { MonitorPlay, Database, Smartphone, Wrench } from "lucide-react";
import { SectionContainer } from "../ui/SectionContainer";
import { SkillBadge } from "../ui/SkillBadge";

const PILLARS = [
  {
    title: "OTT & Connected TV",
    icon: <MonitorPlay className='text-brand-primary' size={24} />,
    description:
      "Architecting and leading development for enterprise video-on-demand applications across massive global platforms.",
    skills: [
      "Roku SDK",
      "BrightScript",
      "SceneGraph",
      "webOS",
      "Samsung Tizen",
    ],
  },
  {
    title: "AI, Backend & Cloud",
    icon: <Database className='text-brand-secondary' size={24} />,
    description:
      "Building custom Model Context Protocol (MCP) servers and RAG pipelines powered by graph and vector databases.",
    skills: ["Python FastAPI", "Qdrant", "Neo4j", "Google Cloud", "OpenAI API"],
  },
  {
    title: "Mobile & Full-Stack",
    icon: <Smartphone className='text-blue-400' size={24} />,
    description:
      "Delivering end-to-end applications from custom React UI components to automated Supabase edge functions and app store publishing.",
    skills: [
      "React / Redux",
      "TypeScript",
      "Flutter",
      "React Native",
      "Supabase",
    ],
  },
  {
    title: "Leadership & Operations",
    icon: <Wrench className='text-purple-400' size={24} />,
    description:
      "Owning feature lifecycles, managing release candidates, and integrating complex analytics tracking for high-profile clients.",
    skills: ["CI/CD", "Conviva / Sumo Logic", "Agile/Scrum", "Rooibos Testing"],
  },
];

export function ExpertiseSection() {
  return (
    <SectionContainer
      id='expertise'
      className='bg-slate-900/20 border-y border-slate-800/50'
    >
      <div className='mb-12 md:text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-slate-100 mb-4'>
          Technical Expertise
        </h2>
        <p className='text-lg text-slate-400 max-w-2xl md:mx-auto'>
          A comprehensive breakdown of the specialized ecosystems, AI
          infrastructure, and modern web technologies I use to build scalable
          software.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
        {PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className='p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors'
          >
            <div className='flex items-center gap-4 mb-4'>
              <div className='p-3 rounded-lg bg-slate-800'>{pillar.icon}</div>
              <h3 className='text-xl font-bold text-slate-100'>
                {pillar.title}
              </h3>
            </div>
            <p className='text-slate-400 mb-6 leading-relaxed'>
              {pillar.description}
            </p>
            <div className='flex flex-wrap gap-2'>
              {pillar.skills.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
