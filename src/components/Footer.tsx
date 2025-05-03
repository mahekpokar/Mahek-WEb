"use client";

import { motion } from "framer-motion";
import ClientOnly from "@/components/ClientOnly";

export function Footer() {
  return (
    <ClientOnly>
      <motion.footer
        className="py-6 mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {/* Footer content intentionally left empty as requested */}
      </motion.footer>
    </ClientOnly>
  );
}
