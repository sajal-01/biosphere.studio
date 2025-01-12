"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import ShimmerButton from "../ui/shimmer-button";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/forms/contact-form";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className=" fixed top-5 md:top-2  px-5 md:px-20  md:mx-auto z-50 grid md:grid-cols-3 grid-cols-2   w-full items-center">
      <Link href="/" className="text-xl md:text-3xl  font-bold">
        <span className="text-xl md:text-3xl  font-bold">
          Biosphere.Studios{" "}
        </span>
      </Link>
      <div className="hidden md:flex justify-center space-x-4">
        <Menu setActive={setActive}>
          <Link href="#services" className="flex  ">
            Services
          </Link>
        </Menu>
      </div>
      <ContactForm>
        <ShimmerButton className="shadow-2xl w-fit justify-self-end ml-10">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Contact Us
          </span>
        </ShimmerButton>
      </ContactForm>
    </div>
  );
}
