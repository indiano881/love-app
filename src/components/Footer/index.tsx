

type FooterProps= {
    author: string;
    month: string;
    year: string
}


const Footer = ({author, month, year}:FooterProps) => {
    return (
        <div>
          <h4>Done with Love from {author} {month}/{year}</h4>
        </div>
    )
};

export default Footer
