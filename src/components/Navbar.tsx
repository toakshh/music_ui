"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        " fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <HoveredLink href="/courses">All Courses</HoveredLink>
          <HoveredLink href="/products">Basic Music Theory</HoveredLink>
          <HoveredLink href="/products">Advanced Compositions</HoveredLink>
          <HoveredLink href="/products">Song Writing</HoveredLink>
          <HoveredLink href="/products">Music Production</HoveredLink>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About Us" />
        <MenuItem setActive={setActive} active={active} item="Contact Us" />
      </Menu>
    </div>
  );
};

export default Navbar;
