import { ArrowRight, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion"; // <-- Import Variants here
import { Button } from "../ui/Button";
import { SectionContainer } from "../ui/SectionContainer";

// Apply the Variants type so TypeScript knows 'easeOut' is valid
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HeroSection() {
  return (
    <SectionContainer className='min-h-[90vh] flex flex-col justify-center pt-32 pb-16'>
      <motion.div
        className='max-w-4xl mx-auto text-center space-y-8'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Eyebrow text */}
        <motion.div
          variants={itemVariants}
          className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-brand-primary text-sm font-medium mb-4'
        >
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-brand-primary'></span>
          </span>
          Available for new opportunities
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className='text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-100'
        >
          Senior Full-Stack Engineer <br className='hidden md:block' />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary'>
            & Technical Leader.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className='text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed'
        >
          From architecting enterprise connected-TV platforms and cloud-native
          AI systems to shipping native mobile apps under my independent studio,{" "}
          <strong className='text-slate-200'>Islander Tech</strong>. I build
          high-performance software across the entire modern tech stack.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'
        >
          <a href='#projects'>
            <Button
              variant='primary'
              size='lg'
              className='w-full sm:w-auto gap-2'
            >
              View My Work
              <ArrowRight size={18} />
            </Button>
          </a>
          <a href='#contact'>
            <Button
              variant='outline'
              size='lg'
              className='w-full sm:w-auto gap-2'
            >
              <Mail size={18} />
              Get in Touch
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
