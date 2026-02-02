import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Code, Palette } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-line',
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
      )
        .fromTo(
          '.hero-subtitle',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          '.hero-badge',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          '.scroll-indicator',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.2'
        );

      // Floating animation for badges
      gsap.to('.hero-badge', {
        y: -10,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom pt-32">
        <div className="max-w-5xl">
          {/* Badges */}
          <div className="flex gap-4 mb-8">
            <div className="hero-badge flex items-center gap-2 px-4 py-2 glass-card text-sm">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Software Developer</span>
            </div>
            <div className="hero-badge flex items-center gap-2 px-4 py-2 glass-card text-sm">
              <Palette className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Visual Designer</span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8"
          >
            <div className="overflow-hidden">
              <span className="hero-line block">I Build</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line block text-gradient glow-text">
                Digital Experiences
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line block text-muted-foreground/60">
                That Inspire
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
            Crafting stunning websites and captivating visual content. From{' '}
            <span className="text-primary">React applications</span> to{' '}
            <span className="text-accent">motion graphics</span> — I bring ideas
            to life with code and creativity.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hero-cta group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hero-cta px-8 py-4 glass-card font-semibold rounded-xl hover-glow border-primary/20"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
