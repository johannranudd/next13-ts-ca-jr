import LogoImageBlue from "@/images/stash-logo-transparent-blue.png";
import Link from "next/link";
import Image from "next/image";
export default function LogoComponent({ className }: { className: string }) {
  return (
    <Link href={"/"} className={className}>
      <Image src={LogoImageBlue} alt="logo" width={80} />
    </Link>
  );
}
