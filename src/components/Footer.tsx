const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Nikki Sharma. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Built with React.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
