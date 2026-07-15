"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="bg-gradient-to-r from-secondary-dark to-secondary text-white text-sm py-2.5 hidden md:block">
        <Container size="wide">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-primary-300" />
              <span className="text-white/90">Telefonisch spreekuur: {siteConfig.openingHours.days} van {siteConfig.openingHours.hours}</span>
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
              className="font-semibold text-primary-200 hover:text-white transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
        </Container>
      </div>

      <Container size="wide">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Hoofdnavigatie">
          <Link href="/" className="group flex items-center gap-3 shrink-0" aria-label="Stichting Balanz - Home">
            <img
              src="/logo.svg"
              alt="Stichting Balanz Logo"
              width={48}
              height={48}
              className="w-11 h-11 md:w-12 md:h-12 object-contain animate-logo-spin"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-secondary-dark leading-tight tracking-tight">Stichting Balanz</span>
              <span className="text-xs text-foreground-muted leading-tight hidden sm:block">Bewindvoering & Mentorschap</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div className="relative">
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        pathname.startsWith("/diensten")
                          ? "text-primary bg-primary-50"
                          : "text-foreground-muted hover:text-primary hover:bg-primary-50"
                      )}
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg border border-border-light py-2 min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm transition-colors",
                              pathname === child.href
                                ? "text-primary bg-primary-50 font-medium"
                                : "text-foreground-muted hover:text-primary hover:bg-primary-50"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-primary bg-primary-50"
                        : "text-foreground-muted hover:text-primary hover:bg-primary-50"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="/contact">Contact opnemen</Link>
            </Button>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border-light bg-white overflow-hidden"
          >
            <Container>
              <div className="py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground-muted rounded-lg hover:bg-primary-50"
                        >
                          {item.name}
                          <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-2.5 text-sm text-foreground-muted hover:text-primary rounded-lg"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                          pathname === item.href
                            ? "text-primary bg-primary-50"
                            : "text-foreground-muted hover:text-primary hover:bg-primary-50"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-border-light">
                  <Button asChild className="w-full">
                    <Link href="/contact">Contact opnemen</Link>
                  </Button>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
                    className="flex items-center justify-center gap-2 mt-3 py-3 text-sm font-medium text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
