import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/images/stash-logo-transparent.png";
import BtnColorMode from "../ui/btnColorMode";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Navbar() {
  return (
    <>
      <header className="relative z-50 border-b border-black bg-white dark:border-white dark:bg-black">
        <nav className="grid grid-cols-3 items-center max-w-screen-xl m-auto h-16">
          <Link href={"/"}>
            <Image src={LogoImage} alt="logo" width={80} />
          </Link>
          <BtnColorMode />
          <MenuIcon />
          <DesktopMenu />
        </nav>
      </header>
      <MobileMenu />
    </>
  );
}
