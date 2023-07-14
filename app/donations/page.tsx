"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar path="/donations" />
      <div className="relative bg-background flex min-h-[calc(100vh-5rem)] h-max w-screen flex-col items-center justify-center self-center text-center text-textcolor">
        <div className="relative">
          <Image
            src="/UnderConstruction.webp"
            alt="Image description"
            className="rounded-sm"
            width={500}
            height={150}
          />
        </div>
        <div className="p-4">
          <p className="w-full text-6xl max-sm:text-4xl font-medium">
            Donations
          </p>
          <p className="py-2 text-xl indent-4">
            We are a group that is committed towards providing a positive impact
            within our own immediate communities through a large variety of
            different service projects. As a non-profit organisation, we rely on
            donations and grants from external parties for any potential
            resources that we will need in order to keep our projects up and
            running. To ensure that we get to provide the most for our
            communities as we push forward to unite different clusters, please
            kindly consider donating to help us support our cause!
          </p>
          <p className="py-2 text-xl">
            As of right now, the donations page is currently unavailable. If you
            are still willing to make some small contribution, we advise that
            you reach us through{" "}
            <a href="mailto:spark9project@gmail.com" className="underline">
              our email
            </a>
            . If you have any questions, email them to the same address; Aaliyah
            Mahboubi (project director) or Sobhan Salehi (admin director) will
            contact you back within 48 hours. Thank you!
          </p>
        </div>
      </div>
    </main>
  );
}
