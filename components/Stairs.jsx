import { motion } from "framer-motion";

//Variants

const stairAnimation = {
    initial:{
        top:"0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

//Calculate the reverse index fat staggred delay
const reverseIndex = (index)=> {
    const totalStep = 6; //Banyaknya step
    return totalStep - index - 1

}

const Stairs = () => {
  return <>
  {/* Render 6 motion divs, each representing a step of the stairs 
  
    Tiap div punya animasi yang sama defined oleh stairsAnimation object. 
    Delay tiap DIV di kalkulasi secara dinamik berdasarkan reversed indexnya,
    ngebuat effect decreasing delay buat setiap step
  
  */}
  {[...Array(6)].map((_,index)=>{
    return(
    <motion.div key={index} variants={stairAnimation} 
    initial="initial" animate="animate" exit="exit" transition={{
        duration: 0.4,
        ease: 'easeInOut',
        delay: reverseIndex(index) * 0.1,
    }}
    className="h-full w-full bg-white relative"
    />)
  })}
  </>
};

export default Stairs