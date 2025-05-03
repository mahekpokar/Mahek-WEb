"use client";

import  ContactForm  from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProfileCard } from "@/components/ProfileCard";
import ClientOnly from "@/components/ClientOnly";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.5,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const contentTranslateY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ClientOnly>
              <ProfileCard />
            </ClientOnly>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 scale-[1.03] origin-top-left">
            <ClientOnly>
              <motion.div style={{ y: contentTranslateY }}>
                {/* Hero Section */}
                <motion.div
                  className="mb-20"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <div className="section-title mb-6">
                    <motion.h1
                      className="text-white text-6xl md:text-8xl font-bold"
                      variants={fadeInUp}
                      custom={1}
                    >
                      MECHANICAL
                    </motion.h1>
                    <motion.h1
                      className="text-gray-500 text-6xl md:text-6xl font-bold uppercase"
                      variants={fadeInUp}
                      custom={2}
                    >
                      ENGINEER & DESIGNER
                    </motion.h1>
                  </div>

                  <motion.p
                    className="text-gray-400 max-w-2.5xl text-base"
                    variants={fadeInUp}
                    custom={3}
                  >
                    Motivated and detail-oriented mechanical engineer with advanced expertise in materials science, casting processes, and mechanical systems. Skilled in engineering design, casting defect analysis, and alloy optimization, with a focus on innovative solutions for sustainable manufacturing. Proficient in CAD software, mechanical testing, and project management. Dedicated to contributing to research in casting manufacturing, particularly for zero-carbon emission engines through defect elimination and material optimization. Adept at leveraging cutting-edge tools and technologies to achieve exceptional engineering outcomes.
                  </motion.p>

                  {/* Skills / Counters Section */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 mt-10"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    {/* Experience Card with Counter */}
                    <Link href="/experience" className="group">
                      <motion.div
                        className="bg-[#02204D] rounded-2xl p-6 h-32 flex flex-col justify-between"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        variants={fadeInUp}
                        custom={1}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="white" strokeWidth="2" />
                          <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="white" strokeWidth="2" />
                          <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="white" strokeWidth="2" />
                          <path d="M14 7H20" stroke="white" strokeWidth="2" />
                          <path d="M17 4V10" stroke="white" strokeWidth="2" />
                        </svg>
                        <div>
                          <p className="text-white font-medium uppercase">
                            Engineering Experience
                          </p>
                          <p className="text-white text-2xl font-bold mt-1">+5 Years</p>
                        </div>
                      </motion.div>
                    </Link>

                    {/* Project Card with Counter */}
                    <Link href="/projects" className="group">
                      <motion.div
                        className="bg-[#F88403] rounded-2xl p-6 h-32 flex flex-col justify-between"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        variants={fadeInUp}
                        custom={2}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="#14130c" strokeWidth="2" />
                          <path d="M12 18H12.01" stroke="#14130c" strokeWidth="2" />
                        </svg>
                        <div>
                          <p className="text-sawad-dark font-medium uppercase">Engineering Design & Solutions </p>
                          <p className="text-sawad-dark text-2xl font-bold mt-1">+3 Projects</p>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Recent Projects Section */}
                <motion.div
                  className="mb-20"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <div className="section-title mb-12">
                    <motion.h2
                      className="text-white text-6xl md:text-7xl font-bold"
                      variants={fadeInUp}
                      custom={1}
                    >
                      RECENT
                    </motion.h2>
                    <motion.h2
                      className="text-gray-500 text-6xl md:text-5xl font-bold uppercase"
                      variants={fadeInUp}
                      custom={2}
                    >
                      PROJECTS
                    </motion.h2>
                  </div>

                  <motion.div className="space-y-8" variants={staggerContainer}>
                    {/* You can replace these dummy projects with your own */}
                    <motion.div variants={fadeInUp} custom={3}>
                      <Link href="/projects" className="flex items-center gap-4 group">
                        <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src="https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeihc7ycodfjuc5kk52bpohlwhpzg57dbjwiq2oymady2px7z4jnv2i"
                            alt="ONGC Mechanical Systems"
                            fill
                            className="object-cover transition-transform group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-sawad-orange transition-colors">Design and Manufacture of Solenoid Engine for Two-Wheeler</h3>
                          <p className="text-gray-400">BTech Project, Ganpat University (2023)</p>
                        </div>
                      </Link>
                    </motion.div>

                    <motion.div variants={fadeInUp} custom={4}>
                      <Link href="/projects" className="flex items-center gap-4 group">
                        <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src="https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafkreibw6tvgbuemwhraceegq5q5hewiq2omuyyc5hzg3ihrtrmau4tlim"
                            alt="System Integration"
                            fill
                            className="object-cover transition-transform group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-sawad-orange transition-colors">Design of New Generation Machines for Separating Hydrogen</h3>
                          <p className="text-gray-400">Team Project, Brunel University London (2024)</p>
                        </div>
                      </Link>
                    </motion.div>

                    <motion.div variants={fadeInUp} custom={5}>
                      <Link href="/projects" className="flex items-center gap-4 group">
                        <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src="https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeifl5phxjprejva2v3af4uezawqmaixscpb6tp5uahxda5gltvkcoa"
                            alt="Maintenance Systems"
                            fill
                            className="object-cover transition-transform group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-sawad-orange transition-colors">Design of a Work Holding Device for ECM of SiC Wafer</h3>
                          <p className="text-gray-400">MSc Dissertation, Brunel University London (2024–2025)</p>
                        </div>
                      </Link>
                    </motion.div>
                  </motion.div>
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
