import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/images/stash-logo-transparent.png";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import BtnColorMode from "../ui/BtnColorMode";

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 border-b border-b-black bg-white dark:bg-black dark:border-b-white">
      <nav className="grid z-50 grid-cols-3 items-center max-w-screen-xl m-auto h-16 bg-white dark:bg-black">
        <Link href={"/"}>
          <Image src={LogoImage} alt="logo" width={80} />
        </Link>
        <BtnColorMode />
        <MenuIcon />
        <DesktopMenu />
      </nav>
      <MobileMenu />
    </header>
  );
}

// export default function Navbar() {
//   return (
//     <>
//       <header className="fixed w-full z-50 border-b border-b-black bg-white dark:bg-black dark:border-b-white">
//         <nav className="grid grid-cols-3 items-center max-w-screen-xl m-auto h-16">
//           <Link href={"/"}>
//             <Image src={LogoImage} alt="logo" width={80} />
//           </Link>
//           <BtnColorMode />
//           <MenuIcon />
//           <DesktopMenu />
//         </nav>
//         <MobileMenu />
//       </header>
//     </>
//   );
// }
