import { useRevealAnimation } from '@/hooks/useGsapAnimations';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'DoDo Headhphones',
    description:
      'A stunning web application built with React and modern technologies. Features smooth animations, responsive design, and seamless user experience.',
    tags: ['React', 'Tailwind CSS', 'GSAP', 'Three.js'],
    image: 'https://res.cloudinary.com/dlcuybfom/image/upload/v1769999234/Screenshot_2026-02-02_075616_mpbkb0.png',
    links: {
      live: 'https://dodo-headset.vercel.app/',
      github: '#',
    },
  },
  {
    id: 2,
    title: 'Project Two',
    description:
      'Creative visual project showcasing motion graphics and video editing skills. Combines technical precision with artistic vision.',
    tags: ['After Effects', 'Premiere Pro', 'Photoshop'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    links: {
      live: '#',
      github: '#',
    },
  },
];

const ProjectsSection = () => {
  const revealRef = useRevealAnimation();

  return (
    <section id="projects" className="section-padding relative" ref={revealRef}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected works that showcase my skills in development and design.
            More projects coming soon!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`reveal glass-card overflow-hidden hover-glow group ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div
                  className={`relative overflow-hidden aspect-video lg:aspect-auto ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card/80" />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div
                  className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <span className="text-primary text-sm font-semibold mb-2">
                    Project 0{project.id}
                  </span>
                  <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.links.live}
                      className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm transition-transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-xl font-medium text-sm hover-glow"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Coming Soon */}
        <div className="reveal mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card text-muted-foreground">
            <ArrowUpRight className="w-4 h-4 text-primary" />
            <span>More projects coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
