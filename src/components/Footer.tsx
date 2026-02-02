const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Divakar G. Crafted with passion.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with{' '}
            <span className="text-primary">React</span>,{' '}
            <span className="text-primary">Tailwind</span> &{' '}
            <span className="text-accent">GSAP</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
