import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

type SocialIconsProps = {
    size: number;
    color: string;
}

const SocialIcons = ({size, color}:SocialIconsProps) => {
    const iconStyles= {
        size: size,
        color: color
    }
  return (
    <>
    <FaFacebookF {...iconStyles} />
    <FaTwitter {...iconStyles}/>
    <TfiYoutube {...iconStyles}/>
    <FaInstagram {...iconStyles}/>
    </>
  )
}

export default SocialIcons