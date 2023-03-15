import { Suspense, use } from "react";
import { getData } from "./utils/gets";
import ListOfProducts from "./components/lists/ListOfProducts";
import SearchBar from "./components/ui/SearchBar";
import LoadingWidget from "./components/widgets/LoadingWidget";
import Image from "next/image";
import hero5 from "../images/hero5.jpg";
import LogoComponent from "./components/navigation/LogoComponent";

export default function Home() {
  const data = use(getData());
  return (
    <main className="mb-52 mt-16">
      <div className="relative h-64 mb-8 flex flex-col justify-evenly items-center">
        <Image
          src={hero5}
          alt={`background image of silk, Photo by Pawel Czerwinski`}
          fill={true}
          className="object-cover -z-50"
        />
        <div className="px-2 w-full mx-auto flex justify-center items-center text-primary xxs:text-lg xs:text-[1.9rem]">
          <h1>Welcome to</h1>
          {<LogoComponent className="orange" />}
          <h1> Home page</h1>
        </div>
        <SearchBar />
      </div>
      <Suspense fallback={<LoadingWidget />}>
        <ListOfProducts data={data} />
      </Suspense>
    </main>
  );
}
