"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import members from "./Members";
import CarouselComponent from "@/app/components/CarouselComponent";
import { useState } from "react";

export default function MembersCarousel() {
  const [selectedMember, setSelectedMember] = useState(1);
  const member = members.find((member) => member.index - 1 === selectedMember);
  return (
    <div className="relative max-w-screen bg-secondary">
      <CarouselComponent
        contents={members.map((member, index) => {
          const imageUrl = member.imageAddress
            ? member.imageAddress
            : "/Members/anonymous.png";
          return (
            <div key={index} className="h-[100%] ">
              <div className="flex w-full min-h-0 max-h-screen justify-center">
                <div className="flex flex-col justify-center bg-inherit max-w-screen max-h-screen sm:aspect-[8/6] max-sm:aspect-square">
                  <img
                    src={imageUrl}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          );
        })}
        seconds={5}
        width={"100%"}
        get_select_index={(index, _) => setSelectedMember(index)}
      />
      <div className="relative bottom-0 max-sm:-bottom-5 max-sm:text-sm text-xl w-full flex flex-col items-center bg-tertiary pb-7 transition-all duration-300 ease-in-out">
        <p className="text-2xl max-sm:text-lg">
          <span className="font-bold">{member?.name}</span>
        </p>
        <p className="flex flex-wrap">
          <span className="font-bold">Roles:</span>&nbsp;{member?.Roles}
        </p>
        <p className="">
          <span className="font-bold">Phone:</span>&nbsp;{member?.phone}
        </p>
        <p className="">
          <span className="font-bold">Email:</span>&nbsp;{member?.email}
        </p>
      </div>
    </div>
  );
}
