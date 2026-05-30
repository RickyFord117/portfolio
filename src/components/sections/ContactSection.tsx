import { Mail, MapPin } from "lucide-react";
import { SectionContainer } from "../ui/SectionContainer";
import { Button } from "../ui/Button";

// Custom Brand Icons
function GithubIcon({ size = 24 }: { size?: number }) {
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
    >
      <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
      <path d='M9 18c-4.51 2-5-2-7-2' />
    </svg>
  );
}

function LinkedinIcon({ size = 24 }: { size?: number }) {
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
    >
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
      <rect width='4' height='12' x='2' y='9' />
      <circle cx='4' cy='4' r='2' />
    </svg>
  );
}

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const message = formData.get("message");

    const mailtoLink = `mailto:rg.henriques@hotmail.com?subject=Portfolio Inquiry from ${name}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <SectionContainer
      id='contact'
      className='bg-slate-900/20 border-t border-slate-800/50'
    >
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-100 mb-4'>
            Let's Build Something
          </h2>
          <p className='text-lg text-slate-400'>
            Whether you need a technical leader for your next enterprise project
            or a full-stack engineer to bring your vision to life, I'm currently
            open to new opportunities.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold text-slate-200'>
              Contact Information
            </h3>

            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-lg bg-brand-primary/10 text-brand-primary'>
                  <Mail size={24} />
                </div>
                <div>
                  <p className='font-medium text-slate-200'>Email</p>
                  <a
                    href='mailto:rg.henriques@hotmail.com'
                    className='text-slate-400 hover:text-brand-primary transition-colors'
                  >
                    rg.henriques@hotmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-lg bg-brand-secondary/10 text-brand-secondary'>
                  <MapPin size={24} />
                </div>
                <div>
                  <p className='font-medium text-slate-200'>Location</p>
                  <p className='text-slate-400'>London, UK / Remote</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className='pt-6 border-t border-slate-800'>
              <p className='font-medium text-slate-200 mb-4'>Connect with me</p>
              <div className='flex gap-4'>
                <a
                  href='https://github.com/RickyFord117'
                  className='p-3 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors'
                >
                  <GithubIcon />
                </a>
                <a
                  href='https://www.linkedin.com/in/ricardohenriques-548504ab'
                  className='p-3 rounded-lg bg-slate-800 text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-colors'
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className='space-y-6 bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-800'
            onSubmit={handleSubmit}
          >
            <div className='space-y-2'>
              <label
                htmlFor='name'
                className='text-sm font-medium text-slate-300'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors'
                placeholder='John Doe'
              />
            </div>
            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='text-sm font-medium text-slate-300'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors'
                placeholder='john@example.com'
              />
            </div>
            <div className='space-y-2'>
              <label
                htmlFor='message'
                className='text-sm font-medium text-slate-300'
              >
                Message
              </label>
              <textarea
                id='message'
                rows={4}
                className='w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none'
                placeholder='How can I help you?'
              ></textarea>
            </div>
            <Button type='submit' variant='primary' className='w-full'>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}
