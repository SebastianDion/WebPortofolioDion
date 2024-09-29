import { icons } from "lucide-react";
import Link from "next/link";

import{FaGithub, FaLinkedinIn, FaYoutube, FaEnvelope,FaWhatsapp} from 'react-icons/fa'
const social =[
    //Linksssss
    {icon: <FaGithub />, path:"https://github.com/SebastianDion"},
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/sebastian-dion-8834b8251/"},
    {icon: <FaEnvelope />, path:"mailto:sebastian.dion02@gmail.com"},
    {icon: <FaWhatsapp />, path:"https://wa.me/qr/WWVM4UCKFDKPC1"},
    {icon: <FaYoutube />, path:"https://www.youtube.com/@xxassassinzz9544"},

]
const Social = ({ContainerStyles, iconStyles}) => {
  return <div className={ContainerStyles}>
    {social.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
  </div>;
};

export default Social