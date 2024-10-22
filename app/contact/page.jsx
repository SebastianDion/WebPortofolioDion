"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  // {
  //   icons: <FaPhoneAlt />,
  //   title: 'Phone',
  //   description: " ",
  // },
  {
    icons: <FaEnvelope />,
    title: 'Email',
    description: 'sebastian.dion02@gmail.com',
  },
  {
    icons: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Jalan Pengairan No.19,Bendungan Hilir, Jakarta Pusat.',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:sebastian.dion02@gmail.com?subject=Contact Form Submission&body=Firstname: ${formData.firstname}%0ALastname: ${formData.lastname}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 p-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's Work Together!</h3>
              <p className="text-white/60">Send me a message below!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {/* TextArea */}
              <Textarea
                className="h-[100px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />
              {/* btn */}
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent flex items-center justify-center rounded">
                    <div className="text-[28px]">{item.icons}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-white/60">{item.title}</div>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
