import { useState } from "react";
import { X } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

function GithubIcon({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
      <path d='M9 18c-4.51 2-5-2-7-2' />
    </svg>
  );
}

function PlayStoreIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path
        d='M3.738 2.128c-.287.3-.438.742-.438 1.282v17.18c0 .54.15 1.002.458 1.302l.06.06 9.6-9.6v-1.1l-9.62-9.64-.06.056zm10.54 10.54-3.08-3.08-6.68-6.7c-.24-.24-.58-.36-.92-.36-.4 0-.78.18-1.04.5-.28.32-.42.74-.42 1.2v17.16c0 .48.14.9.44 1.22.28.3.66.48 1.06.48.34 0 .68-.12.92-.36l6.68-6.68 3.04-3.04z'
        opacity='0.8'
      />
      <path
        d='M14.278 12.668l-3.08 3.08 2.94 2.94c1.02.58 2.22.88 3.32.88 1.5 0 2.84-.58 3.72-1.58.64-.7.98-1.66.98-2.66 0-1-.34-1.94-.98-2.64-.88-1-2.22-1.58-3.72-1.58-1.1 0-2.3.3-3.32.88l-2.94 2.94z'
        fill='#4CAF50'
      />
      <path
        d='M21.178 9.388c-.88-1-2.22-1.58-3.72-1.58-1.1 0-2.3.3-3.32.88l-2.94 2.94 3.08 3.08 2.94-2.94c1.02-.58 2.22-.88 3.32-.88 1.5 0 2.84.58 3.72 1.58.64.7.98 1.66.98 2.66 0-.22-.02-.44-.04-.66-.08-.88-.44-1.74-1.02-2.4z'
        fill='#81C784'
      />
    </svg>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  appScreenshots?: string[];
  tags: string[];
  githubUrl?: string;
  playStoreUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  appScreenshots,
  tags,
  githubUrl,
  playStoreUrl,
  className,
}: ProjectCardProps) {
  // State to hold the currently clicked image URL for the lightbox
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <>
      <article
        className={cn(
          "group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-all hover:shadow-xl hover:shadow-brand-primary/10 hover:border-slate-700",
          className,
        )}
      >
        {appScreenshots && appScreenshots.length > 0 ? (
          // Added justify-center here to center the screenshots
          <div className='flex justify-center gap-4 overflow-x-auto p-6 bg-slate-800/80 snap-x snap-mandatory hide-scrollbar border-b border-slate-800/50'>
            {appScreenshots.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`${title} screenshot ${index + 1}`}
                className='h-64 w-auto rounded-xl object-cover shadow-lg border border-slate-700 snap-center flex-shrink-0 transition-transform duration-300 hover:scale-[1.03] cursor-zoom-in'
                loading='lazy'
                onClick={() => setEnlargedImage(imgUrl)} // Trigger lightbox on click
              />
            ))}
          </div>
        ) : imageUrl ? (
          <div className='relative aspect-video w-full overflow-hidden bg-slate-800'>
            <img
              src={imageUrl}
              alt={`Screenshot of ${title}`}
              className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in'
              loading='lazy'
              onClick={() => setEnlargedImage(imageUrl)} // Trigger lightbox on click
            />
            <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none' />
          </div>
        ) : null}

        <div className='flex flex-col flex-grow p-6 md:p-8'>
          <h3 className='text-2xl font-bold text-slate-100 mb-3'>{title}</h3>
          <p className='text-slate-400 text-sm leading-relaxed mb-6 flex-grow'>
            {description}
          </p>

          <div className='flex flex-wrap gap-2 mb-6'>
            {tags.map((tag) => (
              <SkillBadge key={tag}>{tag}</SkillBadge>
            ))}
          </div>

          <div className='flex items-center gap-4 mt-auto pt-4 border-t border-slate-800/50'>
            {githubUrl && (
              <a
                href={githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors'
              >
                <GithubIcon size={18} />
                Code
              </a>
            )}
            {playStoreUrl && (
              <a
                href={playStoreUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors'
              >
                <PlayStoreIcon size={20} />
                Google Play
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)} // Close when clicking the background
            className='fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm cursor-zoom-out'
          >
            {/* Close Button */}
            <button
              onClick={() => setEnlargedImage(null)}
              className='absolute top-6 right-6 p-2 rounded-full bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors'
            >
              <X size={24} />
            </button>

            {/* The Enlarged Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={enlargedImage}
              alt='Enlarged view'
              className='max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl border border-slate-800'
              onClick={(e) => e.stopPropagation()} // Prevent clicking the image itself from closing the modal
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
