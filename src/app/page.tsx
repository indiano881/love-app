import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import "./global.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100%] bg-gray-50 items-center justify-between">
      <Header />
      <MainContent />
      <Footer author={"Davide Baldi"} month={"SEP"} year={"2024"} />
    </div>
  );
}
