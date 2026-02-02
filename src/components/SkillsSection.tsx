import { useStaggerAnimation, useRevealAnimation } from '@/hooks/useGsapAnimations';
import { Code, Server, Database, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'primary',
    skills: ['React', 'Tailwind CSS', 'Three.js', 'GSAP', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'accent',
    skills: ['Node.js'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'primary',
    skills: ['Supabase', 'MongoDB'],
  },
  {
    title: 'Design Tools',
    icon: Palette,
    color: 'accent',
    skills: ['Adobe Photoshop', 'After Effects', 'Premiere Pro'],
  },
];

const SkillsSection = () => {
  const revealRef = useRevealAnimation();
  const staggerRef = useStaggerAnimation();

  return (
    <section id="skills" className="section-padding relative" ref={revealRef}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of technical development skills and creative design capabilities
            that help me build complete digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={staggerRef} className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            const isAccent = category.color === 'accent';

            return (
              <div
                key={category.title}
                className="glass-card p-8 hover-glow group"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-4 rounded-2xl transition-colors duration-300 ${
                      isAccent
                        ? 'bg-accent/10 group-hover:bg-accent/20'
                        : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${isAccent ? 'text-accent' : 'text-primary'}`}
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isAccent
                          ? 'bg-accent/10 text-accent/80 hover:bg-accent/20 hover:text-accent'
                          : 'bg-primary/10 text-primary/80 hover:bg-primary/20 hover:text-primary'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
