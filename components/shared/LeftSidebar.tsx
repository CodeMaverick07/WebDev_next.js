"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import React from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section className="background-light900_dark200 no-scrollbar light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto  border-r p-6 pt-36 shadow-light-300 dark:shadow-none  max-sm:hidden lg:w-[266px] ">
      <div className="flex flex-col gap-2">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              key={item.label}
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900 "
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                width={20}
                height={20}
                alt={item.label}
                className={`${isActive ? "" : "invert-colors"}`}
              />{" "}
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <Link href={"/sign-in"}>
              {" "}
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 ">
                <span className="primary-text-gradient max-lg:hidden">
                  Sign In
                </span>
                <Image
                  src="/assets/icons/account.svg"
                  alt="sign-in"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
              </Button>
            </Link>

            <Link href={"/sign-up"}>
              {" "}
              <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3">
                <span className="text-dark400_light900 max-lg:hidden">
                  Sign Up
                </span>
                <Image
                  src="/assets/icons/sign-up.svg"
                  alt="sign-in"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
              </Button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
