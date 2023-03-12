import {
  TiSocialTwitter,
  TiSocialFacebookCircular,
  TiSocialLinkedin,
} from "react-icons/ti";
import LogoComponent from "./LogoComponent";
export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 p-4 rounded-t-md border-t border-secondary dark:border-primary">
      <div className="max-w-screen-xl mx-auto grid justify-items-center items-center md:grid-cols-3">
        <p className="hover:text-thirdClrDark hover:dark:text-thirdClr md:justify-self-start">
          <a href="mailto:example@example.com">example@example.com</a>
        </p>
        <LogoComponent className="ml-4 md:justify-self-center" />
        <div className="flex items-center text-[1.5rem] space-x-3 md:justify-self-end">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-thirdClrDark hover:dark:text-thirdClr"
          >
            <TiSocialTwitter />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-thirdClrDark hover:dark:text-thirdClr"
          >
            <TiSocialFacebookCircular />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-thirdClrDark hover:dark:text-thirdClr"
          >
            <TiSocialLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
