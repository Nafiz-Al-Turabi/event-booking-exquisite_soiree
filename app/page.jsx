import Image from "next/image";
import bannar from "@/public/images/banner.png";
export default function Home() {
  return (
    <div>
      <header style={{backgroundImage: `url(${bannar.src})`}} className="bg-cover bg-center h-screen flex items-center justify-center">

      </header>
    </div>
  );
}
