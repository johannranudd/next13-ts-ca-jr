"use client";
import { useTheme } from "next-themes";
import LogoImageOrange from "@/images/stash-logo-transparent-orange.png";
import LogoImageBlue from "@/images/stash-logo-transparent-blue.png";
import Link from "next/link";
import Image from "next/image";
export default function LogoComponent({ className }: any) {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <Link href={"/"} className={className}>
      <Image src={LogoImageBlue} alt="logo" width={80} />
      {/* <Image
        src={currentTheme === "light" ? LogoImageOrange : LogoImageBlue}
        alt="logo"
        width={80}
      /> */}
    </Link>
  );
}
