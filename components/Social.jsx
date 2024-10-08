import { icons } from "lucide-react";
import Link from "next/link";

import{FaGithub, FaLinkedinIn, FaYoutube, FaEnvelope,FaWhatsapp} from 'react-icons/fa'
import { FaNewspaper } from "react-icons/fa6";

const social =[
    //Linksssss
    {icon: <FaGithub />, path:"https://github.com/SebastianDion"},
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/sebastian-dion-8834b8251/"},
    {icon: <FaEnvelope />, path:"mailto:sebastian.dion02@gmail.com"},
    {icon: <FaWhatsapp />, path:"https://wa.me/qr/WWVM4UCKFDKPC1"},
    {icon: <FaYoutube />, path:"https://www.youtube.com/@xxassassinzz9544"},
    {icon: <FaNewspaper />, path:"https://soft-chestnut-66c.notion.site/Seb-s-Blog-1194f82ca71e8011b36ce9efea061681"},
    
    

]
const Social = ({ContainerStyles, iconStyles}) => {
  return <div className={ContainerStyles}>
    {social.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
  </div>;
};

export default Social