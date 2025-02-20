"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutTheTeam = () => {
  const teamMembers = [
    { name: "Olivia Dunham", role: "CEO", image: "/member1.jpg" },
    { name: "Peter Bishop", role: "Marketing", image: "/member2.jpg" },
    { name: "Astrid Farnsworth", role: "Design", image: "/member3.jpg" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100 text-center">
      <h2 className="text-5xl font-bold text-orange-700 mb-6">Meet Our Team</h2>
      <p className="text-gray-700 mb-16 text-lg">Our experts who make everything possible.</p>
      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="bg-orange-300 rounded-2xl shadow-2xl p-8 w-80 transform transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:shadow-orange-700 hover:bg-white/80"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Member Image */}
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <Image 
                src={member.image} 
                alt={member.name} 
                width={128} 
                height={128} 
                className="rounded-full border-4 border-orange-500 object-cover"
              />
         
            </div>

            {/* Member Name and Role */}
            <h3 className="text-2xl font-bold text-orange-800 p-10">{member.name}</h3>
            <p className="text-gray-700 tracking-widest font-bold text-2xl">{member.role}</p>

            {/* Optional: View Profile Button */}
            <div className="mt-6">
              <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300">
                View Profile
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AboutTheTeam;