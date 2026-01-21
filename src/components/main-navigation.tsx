"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, ArrowRight, Zap, Globe, Users, Headphones } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { getSigninUrl } from "@/lib/auth-links"

const navigation = [
  { name: "Features", href: "/features", icon: Zap },
  { name: "Pricing", href: "/pricing", icon: Globe },
  { name: "About", href: "/about", icon: Users },
  { name: "Help", href: "/help", icon: Headphones },
]

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 p-0.5">
              <div className="w-full h-full rounded-md bg-primary/80 flex items-center justify-center">
                <Image
                  src="/gossiper-logo-white.png"
                  alt="Gossiper Logo"
                  width={128}
                  height={128}
                  className="w-20 h-20 object-contain scale-[2.5]"
                />
              </div>
            </div>
            <span className="text-xl font-bold text-foreground">Gossiper</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors",
                  pathname === item.href && "text-foreground font-medium",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button className="text-foreground hover:text-foreground" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild>
              <Link href={getSigninUrl()}>Sign In</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                {/* Header */}
                <div className="flex items-center p-6 border-b border-border">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="h-10 w-10 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 p-0.5">
                      <div className="w-full h-full rounded-md bg-primary/80 flex items-center justify-center">
                        <Image
                          src="/gossiper-logo-white.png"
                          alt="Gossiper Logo"
                          width={128}
                          height={128}
                          className="w-20 h-20 object-contain scale-[2.5]"
                        />
                      </div>
                    </div>
                    <span className="text-xl font-bold text-foreground">Gossiper</span>
                  </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col p-6 space-y-1">
                  <div className="mb-4">
                    {navigation.map((item) => {
                      const Icon = item.icon
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group",
                            isActive
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          )}
                        >
                          <Icon className={cn(
                            "h-5 w-5 transition-colors",
                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                          )} />
                          <span className="flex-1">{item.name}</span>
                          {isActive && (
                            <Badge variant="secondary" className="text-xs">
                              Current
                            </Badge>
                          )}
                          <ArrowRight className={cn(
                            "h-4 w-4 transition-transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1",
                            isActive && "opacity-100"
                          )} />
                        </Link>
                      )
                    })}
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group",
                        pathname === "/contact"
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      <span className="flex-1">Contact Us</span>
                      <ArrowRight className={cn(
                        "h-4 w-4 transition-transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1",
                        pathname === "/contact" && "opacity-100"
                      )} />
                    </Link>
                  </div>
                  <div className="border-t border-border pt-4 mt-4">
                    <Button className="w-full" asChild>
                      <Link href={getSigninUrl()} onClick={() => setIsOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
