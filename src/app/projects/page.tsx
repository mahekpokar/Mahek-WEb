// Location: src/app/projects/page.tsx

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

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const contentTranslateY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const projects = [
    {
      title: "Design and Manufacture of Solenoid Engine",
      type: "BTech Project, Ganpat University (2023)",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeihc7ycodfjuc5kk52bpohlwhpzg57dbjwiq2oymady2px7z4jnv2i",
      link: "/projects/solenoid-engine",
    },
    {
      title: "Design of New Generation Machines for Separating Hydrogen",
      type: "Team Project, Brunel University London (2024)",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafkreibw6tvgbuemwhraceegq5q5hewiq2omuyyc5hzg3ihrtrmau4tlim",
      link: "/projects/hydrogen-separation",
    },
    {
      title: "Design of a Work Holding Device for ECM of SiC Wafer",
      type: "MSc Dissertation, Brunel University London (2024–2025)",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeifl5phxjprejva2v3af4uezawqmaixscpb6tp5uahxda5gltvkcoa",
      link: "/projects/ecm-sic-wafer",
    },
  ];

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
                {/* Projects Section */}
                <motion.div
                  className="mb-20"
                  initial="hidden"
                  animate="visible"
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
                      className="text-gray-500 text-6xl md:text-7xl font-bold uppercase"
                      variants={fadeInUp}
                      custom={2}
                    >
                      PROJECTS
                    </motion.h2>
                  </div>

                  <motion.div
                    className="space-y-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        custom={index + 1}
                      >
                        <Link
                          href={project.link}
                          className="flex items-center gap-4 group"
                        >
                          <motion.div
                            className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-md"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-110"
                            />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-sawad-orange transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-gray-400">{project.type}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
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
