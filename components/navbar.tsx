import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <nav className="border-b w-full bg-background">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/portfolio" className="font-bold text-xl">
            Portrade
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
