import LogoImageBlue from "@/images/stash-logo-transparent-blue.png";
import LogoImageOrang from "@/images/stash-logo-transparent-orange.png";
import Link from "next/link";
import Image from "next/image";
export default function LogoComponent({ className }: { className: string }) {
  return (
    <Link href={"/"} className={className}>
      <Image
        src={className === "orange" ? LogoImageOrang : LogoImageBlue}
        alt="logo"
        width={80}
      />
    </Link>
  );
}
