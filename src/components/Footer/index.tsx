type FooterProps = {
    author: string;
    month: string;
    year: string;
  };
  
  const Footer = ({ author, month, year }: FooterProps) => {
    return (
      <footer className="w-full bg-purple-800 py-4 text-center">
        <h4 className="text-white text-sm font-light">
          Done with ❤️ by {author} - {month}/{year}
        </h4>
      </footer>
    );
  };
  
  export default Footer;
  