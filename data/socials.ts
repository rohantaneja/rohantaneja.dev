import type { IconType } from "react-icons";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export interface Social {
  label: string;
  url: string;
  icon: IconType;
}

export const socials: Social[] = [
  { label: "Instagram", url: "https://www.instagram.com/rohantaneja99/", icon: IoLogoInstagram },
  { label: "GitHub", url: "https://github.com/rohantaneja", icon: IoLogoGithub },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/rohantaneja-dev/", icon: IoLogoLinkedin },
  { label: "X", url: "https://x.com/rohantaneja99", icon: FaXTwitter },
];
