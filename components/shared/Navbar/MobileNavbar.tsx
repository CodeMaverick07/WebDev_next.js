"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const NavContent = () => {
    const pathname = usePathname();

    return (
      <section className="flex h-full flex-col gap-1 pt-5">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <SheetClose key={item.route}>
              <Link
                href={item.route}
                className={`${
                  isActive
                    ? "primary-gradient rounded-lg text-light-900 "
                    : "text-dark300_light900"
                } flex items-center justify-start gap-4 bg-transparent p-3 text-sm`}
              >
                <Image
                  src={item.imgURL}
                  width={20}
                  height={20}
                  alt={item.label}
                  className={`${isActive ? "" : "invert-colors"}`}
                />{" "}
                <p className={`${isActive ? "base-bold" : "base-medium"} `}>
                  {item.label}
                </p>
              </Link>
            </SheetClose>
          );
        })}
      </section>
    );
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src={"/assets/icons/hamburger.svg"}
          alt="hamburger"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            alt="logo"
            width={23}
            height={23}
          />
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk ">
            Dev <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div className=" flex h-full flex-col justify-between py-6">
          <SheetClose className="w-full">
            <NavContent />
          </SheetClose>
          <div>
            <SignedOut>
              <div className="flex flex-col gap-3">
                <Link href={"/sign-in"}>
                  {" "}
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3">
                    <span className="primary-text-gradient">Sign In</span>
                  </Button>
                </Link>

                <Link href={"/sign-up"}>
                  {" "}
                  <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3">
                    <span className="text-dark400_light900">Sign Up</span>
                  </Button>
                </Link>
              </div>
            </SignedOut>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
