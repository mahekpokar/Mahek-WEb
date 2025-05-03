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

export default function ECMSiCWaferPage() {
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
                Work Holding Device for ECM of SiC Wafer
              </motion.h1>

              <motion.p
                className="text-gray-400 mb-8"
                variants={fadeInUp}
                custom={2}
              >
                Brunel University London — MSc Dissertation, 2024–25
              </motion.p>

              <motion.div
                className="w-full h-64 relative mb-10 rounded-lg overflow-hidden"
                variants={fadeInUp}
                custom={3}
              >
                <Image
                  src="https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeifl5phxjprejva2v3af4uezawqmaixscpb6tp5uahxda5gltvkcoa"
                  alt="ECM workholding device"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <motion.div variants={fadeInUp} custom={4}>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Designed a vacuum‑based clamping system for electrochemical
                  machining of silicon carbide (SiC) wafers, using 316L stainless
                  steel channels, EPDM gaskets, and spring‑loaded pins to ensure
                  uniform, corrosion‑resistant holding under NaOH/KOH.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  FEA and CFD optimizations guided the shape and thickness of
                  six key components—base block, upper holder, gasket, springs,
                  pins, and fasteners—achieving leak‑free clamping at 25 kPa
                  with minimal wafer stress.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Validation showed an 18% reduction in downtime and maintenance
                  costs. Future enhancements include dynamic pressure sensors
                  and multi‑zone vacuum control for non‑standard wafer geometries.
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
