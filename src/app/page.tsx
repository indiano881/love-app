import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Home() {
  return (
  <div className="flex column items-center ">
    <Header />
    
    <Footer author={"Davide Baldi"} month={"SEP"} year={"2024"} />
  
  </div>
  );
}
