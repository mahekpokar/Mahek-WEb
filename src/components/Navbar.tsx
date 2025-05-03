"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, Briefcase, Wrench, BookText } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/tools", label: "Tools", icon: Wrench },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex space-x-8 bg-[#1d1d1b]/90 backdrop-blur-md rounded-full px-10 py-5"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {navLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
              className="relative group"
            >
              <Link
                href={link.href}
                className={`flex items-center justify-center transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                title={link.label}
              >
                <Icon size={20} />
                <span className="absolute whitespace-nowrap text-white text-xs font-medium bg-[#1d1d1b] px-2 py-1 rounded -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.nav>
  );
}
