"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
    transition: { delay: 0.05 * i, duration: 0.5 }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function SolenoidEnginePage() {
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
                Design &amp; Manufacture of Solenoid Engine for Two‑Wheeler
              </motion.h1>

              <motion.p
                className="text-gray-400 mb-8"
                variants={fadeInUp}
                custom={2}
              >
                Ganpat University — BTech Major Project, 2023
              </motion.p>

              <motion.div
                className="w-full h-64 relative mb-10 rounded-lg overflow-hidden"
                variants={fadeInUp}
                custom={3}
              >
                <Image
                  src="https://peach-manual-gayal-543.mypinata.cloud/ipfs/bafybeihc7ycodfjuc5kk52bpohlwhpzg57dbjwiq2oymady2px7z4jnv2i"
                  alt="Solenoid engine prototype"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <motion.div variants={fadeInUp} custom={4}>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Developed a proof‑of‑concept electromagnetic piston engine replacing
                  combustion with a solenoid‑driven reciprocating mechanism. A permanent
                  magnet on the piston and an AC solenoid on the headstock produce
                  alternating attraction/repulsion to generate linear motion, which is
                  converted to rotary output via connecting rod and crankshaft.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Fabricated on a modified two‑wheeler chassis, headstock machining,
                  coil winding (1500 turns of 0.8 mm copper wire), and custom driver
                  electronics. Testing revealed consistent low‑speed torque but highlighted
                  inefficiencies in pole‑reversal switching and battery drain.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Future work: optimize driver circuitry to reduce switching losses,
                  explore high‑energy magnets to boost force density, and integrate
                  supercapacitor buffering for load‑peak handling.
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
