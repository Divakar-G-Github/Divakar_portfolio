import { useRevealAnimation } from '@/hooks/useGsapAnimations';
import profilePhoto from '@/assets/Divakar.jpg';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const revealRef = useRevealAnimation();

  return (
    <section id="about" className="section-padding relative" ref={revealRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="reveal relative">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl" />
              <div className="absolute -inset-8 border border-primary/10 rounded-3xl" />
              
              {/* Glowing accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden glow-box">
                <img
                  src={profilePhoto}
                  alt="Divakar G - Software Developer"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="reveal">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">
                Divakar G
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-foreground">Software Developer</span> and{' '}
                <span className="text-foreground">Graphic Designer</span> based in Chennai, India.
                I specialize in building modern web applications while also creating stunning
                visual content through motion graphics and digital design.
              </p>
            </div>

            {/* Info Cards */}
            <div className="reveal grid gap-4">
              <div className="glass-card p-5 flex items-start gap-4 hover-glow">
                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-start gap-4 hover-glow">
                <div className="p-3 rounded-xl bg-accent/10">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className="text-muted-foreground text-sm">
                    B.Tech in Artificial Intelligence & Data Science
                  </p>
                  <p className="text-muted-foreground/60 text-xs mt-1">
                    Dhanalakshmi College of Engineering
                  </p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-start gap-4 hover-glow">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className="text-muted-foreground text-sm">
                    Frontend Developer Trainee at Cognitive Value Tech
                  </p>
                  <p className="text-muted-foreground/60 text-xs mt-1">
                    8 months of hands-on development experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
