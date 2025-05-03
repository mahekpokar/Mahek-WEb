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

export default function Tools() {
  const { scrollYProgress } = useScroll();
  const contentTranslateY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const tools = [
    {
      title: "SolidWorks",
      description: "3D CAD Design Software",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeigfzuw4wb4wyyqzltfxozvutyo6sjvlhan2ta6wfe64magzv7z2yq/SolidWorks.png",
      link: "https://www.solidworks.com/",
    },
    {
      title: "Onshape",
      description: "Cloud-Based CAD Platform",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeigfzuw4wb4wyyqzltfxozvutyo6sjvlhan2ta6wfe64magzv7z2yq/Onshape.jpg",
      link: "https://www.onshape.com/",
    },
    {
      title: "AutoCAD",
      description: "2D and 3D CAD Software",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeigfzuw4wb4wyyqzltfxozvutyo6sjvlhan2ta6wfe64magzv7z2yq/AutoCAD.png",
      link: "https://www.autodesk.com/products/autocad/overview",
    },
    {
      title: "ANSYS",
      description: "Engineering Simulation Software",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeigfzuw4wb4wyyqzltfxozvutyo6sjvlhan2ta6wfe64magzv7z2yq/ANSYS.png",
      link: "https://www.ansys.com/",
    },
    {
      title: "MATLAB",
      description: "Numerical Computing Environment",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeigfzuw4wb4wyyqzltfxozvutyo6sjvlhan2ta6wfe64magzv7z2yq/MATLAB.png",
      link: "https://www.mathworks.com/products/matlab.html",
    },
    {
      title: "Microsoft 365",
      description: "Productivity Suite",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeigfzuw4wb4wyyqzltfxozvutyo6sjvlhan2ta6wfe64magzv7z2yq/Microsoft%20365.png",
      link: "https://www.microsoft.com/microsoft-365",
    },
    {
      title: "Git / GitHub",
      description: "Version Control System",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeigfzuw4wb4wyyqzltfxozvutyo6sjvlhan2ta6wfe64magzv7z2yq/GitHub.png",
      link: "https://github.com/",
    },
    {
      title: "Microsoft Teams",
      description: "Collaboration Platform",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeigfzuw4wb4wyyqzltfxozvutyo6sjvlhan2ta6wfe64magzv7z2yq/Microsoft%20Teams.png",
      link: "https://www.microsoft.com/en/microsoft-teams/group-chat-software",
    },
    {
      title: "Python",
      description: "Programming Language",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeigfzuw4wb4wyyqzltfxozvutyo6sjvlhan2ta6wfe64magzv7z2yq/Python.png",
      link: "https://www.python.org/",
    },
    {
      title: "GitHub Copilot",
      description: "AI-Powered Code Completion",
      image: "https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeigfzuw4wb4wyyqzltfxozvutyo6sjvlhan2ta6wfe64magzv7z2yq/GitHub%20Copilot.png",
      link: "https://github.com/features/copilot",
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
          <div className="lg:col-span-2">
            <ClientOnly>
              <motion.div style={{ y: contentTranslateY }}>
                {/* Tools Section */}
                <motion.div
                  className="mb-20"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <div className="section-title mb-12">
                    <motion.h2
                      className="heading-primary"
                      variants={fadeInUp}
                      custom={1}
                    >
                      PREMIUM
                    </motion.h2>
                    <motion.h2
                      className="heading-secondary"
                      variants={fadeInUp}
                      custom={2}
                    >
                      TOOLS
                    </motion.h2>
                  </div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {tools.map((tool, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        custom={index + 1}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Link
                          href={tool.link}
                          className="flex items-center gap-4 group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.div
                            className="w-14 h-14 relative flex-shrink-0 bg-white rounded-lg flex items-center justify-center overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Image
                              src={tool.image}
                              alt={tool.title}
                              width={30}
                              height={30}
                              className="object-contain"
                            />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-sawad-orange transition-colors">{tool.title}</h3>
                            <p className="text-gray-400">{tool.description}</p>
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
