"use client";

import  ContactForm  from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProfileCard } from "@/components/ProfileCard";
import ClientOnly from "@/components/ClientOnly";
import { motion, useScroll, useTransform } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.5,
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const contentTranslateY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar with profile card */}
          <div className="lg:col-span-1">
            <ClientOnly>
              <ProfileCard />
            </ClientOnly>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 scale-[1.03] origin-top-left">
            <ClientOnly>
              <motion.div style={{ y: contentTranslateY }}>
                {/* Education Section */}
                
{/* Education Section */}
<motion.div className="mb-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}>
  <div className="section-title mb-12">
    <motion.h2 className="text-white text-6xl md:text-7xl font-bold"
               variants={fadeInUp}
               custom={1}>
      EDUCATION
    </motion.h2>
  </div>
  <div className="space-y-10">
    <motion.div variants={fadeInUp} custom={1}>
      <div className="flex items-start gap-4">
        <div className="bg-sawad-orange w-2 h-2 rounded-full mt-2.5 flex-shrink-0"></div>
        <div>
          <h3 className="text-xl font-bold text-white">MSc Advanced Engineering Design</h3>
          <p className="text-gray-300 mb-1">Brunel University London • London, UK • Expected January 2025</p>
          <p className="text-gray-400">Specialization in engineering design, materials science, CAD/FEA tools, and sustainable manufacturing.</p>
        </div>
      </div>
    </motion.div>
    <motion.div variants={fadeInUp} custom={2}>
      <div className="flex items-start gap-4">
        <div className="bg-sawad-orange w-2 h-2 rounded-full mt-2.5 flex-shrink-0"></div>
        <div>
          <h3 className="text-xl font-bold text-white">B.Tech Mechanical Engineering (First Class)</h3>
          <p className="text-gray-300 mb-1">Ganpat University, India • 2023</p>
          <p className="text-gray-400">Focus on materials science, casting processes, mechanical systems, and  manufacturing systems.</p>
        </div>
      </div>
    </motion.div>
    <motion.div variants={fadeInUp} custom={3}>
      <div className="flex items-start gap-4">
        <div className="bg-sawad-orange w-2 h-2 rounded-full mt-2.5 flex-shrink-0"></div>
        <div>
          <h3 className="text-xl font-bold text-white">Graduate Diploma in Mechanical Engineering (Distinction)</h3>
          <p className="text-gray-300 mb-1">Gujarat Technological University, Ahmedabad • 2019</p>
          <p className="text-gray-400">Strong foundation in mechanical systems, technical drawing, and industrial applications.</p>
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>
{/* Experience Section */}
                
{/* Experience Section */}
<motion.div className="mb-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}>
  <div className="section-title mb-12">
    <motion.h2 className="text-white text-6xl md:text-7xl font-bold"
               variants={fadeInUp}
               custom={1}>
      EXPERIENCE
    </motion.h2>
  </div>
  <div className="space-y-10">
    <motion.div variants={fadeInUp} custom={1}>
      <div className="flex items-start gap-4">
        <div className="bg-sawad-orange w-2 h-2 rounded-full mt-2.5 flex-shrink-0"></div>
        <div>
          <h3 className="text-xl font-bold text-white">Field Engineer</h3>
          <p className="text-gray-300 mb-1">Ambica Wood Products • Mehsana, Gujarat • Jun 2021 – Nov 2023</p>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Provided technical support and managed maintenance for mechanical systems, overseeing repair and installation activities.</li>
            <li>Completed complex mechanical projects on time and within budget, enhancing operational efficiency.</li>
            <li>Contributed to defect identification in aluminum alloys and optimized casting methods to improve mechanical properties.</li>
          </ul>
        </div>
      </div>
    </motion.div>
    <motion.div variants={fadeInUp} custom={2}>
      <div className="flex items-start gap-4">
        <div className="bg-sawad-orange w-2 h-2 rounded-full mt-2.5 flex-shrink-0"></div>
        <div>
          <h3 className="text-xl font-bold text-white">Mechanical Engineer Intern</h3>
          <p className="text-gray-300 mb-1">Oil and Natural Gas Corporation (ONGC) • Mehsana, Gujarat • May 2023 – Jul 2023</p>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Assisted in commissioning mechanical equipment, ensuring defect-free performance and adherence to design specifications.</li>
            <li>Identified casting defects and supported material analysis to optimize alloy performance.</li>
            <li>Collaborated with cross-functional teams to streamline maintenance operations and workflow improvements.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>

{/* Skills Section */}
<motion.div className="mb-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}>
  <div className="section-title mb-12">
    <motion.h2 className="text-white text-6xl md:text-7xl font-bold"
               variants={fadeInUp}
               custom={1}>
      SKILLS
    </motion.h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <motion.div variants={fadeInUp} custom={1} className="bg-sawad-gray-dark rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">CAD & Simulation</h3>
      <p className="text-gray-400">Proficient in AutoCAD, SolidWorks, and Onshape for mechanical design and FEA.</p>
    </motion.div>
    <motion.div variants={fadeInUp} custom={2} className="bg-sawad-gray-dark rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Materials & Testing</h3>
      <p className="text-gray-400">Expertise in materials science, casting processes, mechanical testing, and defect analysis.</p>
    </motion.div>
    <motion.div variants={fadeInUp} custom={3} className="bg-sawad-gray-dark rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Project Management</h3>
      <p className="text-gray-400">Skilled in project planning, team leadership, and agile management methodologies.</p>
    </motion.div>
    <motion.div variants={fadeInUp} custom={4} className="bg-sawad-gray-dark rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Digital Tools</h3>
      <p className="text-gray-400">Proficient with Microsoft 365 suite and AI-enhanced engineering tools.</p>
    </motion.div>
  </div>
</motion.div>
{/* Contact Form */}
                <ContactForm />
              </motion.div>
            </ClientOnly>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
