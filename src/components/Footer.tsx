const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">All Rights Reserved © ICCUBEA 2025</p>
        <p className="text-sm">
          Designed & Developed by{" "}
          <a 
            href="http://pcet.org.in/digital-marketing-team/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold hover:text-primary transition-colors underline"
          >
            Digital Marketing Team, PCET
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;