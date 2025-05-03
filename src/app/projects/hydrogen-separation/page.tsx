"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProfileCard } from "@/components/ProfileCard";
import ClientOnly from "@/components/ClientOnly";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.5 }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function HydrogenSeparationPage() {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container py-24 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <ClientOnly>
            <ProfileCard />
          </ClientOnly>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 scale-[1.03] origin-top-left">
          <ClientOnly>
            <motion.div
              style={{ y: translateY }}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-white text-5xl md:text-6xl font-bold mb-4"
                variants={fadeInUp}
                custom={1}
              >
                Design of New Generation Machines for Separating Hydrogen
              </motion.h1>

              <motion.p
                className="text-gray-400 mb-8"
                variants={fadeInUp}
                custom={2}
              >
                Brunel University London — Team Project, 2024
              </motion.p>

              <motion.div
                className="w-full h-64 relative mb-10 rounded-lg overflow-hidden"
                variants={fadeInUp}
                custom={3}
              >
                <Image
                  src="https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafkreibw6tvgbuemwhraceegq5q5hewiq2omuyyc5hzg3ihrtrmau4tlim"
                  alt="Hydrogen separation rig"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <motion.div variants={fadeInUp} custom={4}>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Developed scalable hydrogen‑separation machinery combining modular
                  membrane stacks with pressure‑swing adsorption (PSA). CFD‑driven
                  flow‑path optimizations reduced pressure drop by 12%, while heated
                  ceramic supports maintained membrane integrity at 80 °C.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The lab‑scale prototype delivered 99.9% H₂ purity at 20 bar feed,
                  with energy consumption 15% lower than baseline designs. Key
                  innovations included counter‑current electrolyte flow enhancing
                  recovery by 8%.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Next steps: scale to industrial membrane area, embed real‑time
                  purity sensors, and explore hybrid membrane‑PSA cycles for
                  further efficiency gains.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} custom={5}>
                <Link href="/projects" className="text-sawad-orange underline hover:text-white">
                  ← Back to all projects
                </Link>
              </motion.div>
            </motion.div>
          </ClientOnly>
        </div>
      </div>

      <Footer />
    </main>
  );
}
