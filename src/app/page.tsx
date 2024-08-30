import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import "./global.css"

export default function Home() {
  return (
  <div className="flex column items-center ">
    <Header />
    <MainContent />
    <Footer author={"Davide Baldi"} month={"SEP"} year={"2024"} />
  
  </div>
  );
}
