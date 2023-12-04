import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function PVP() {
  const [editProfile, setEditProfile] = useState(false);
  const [activeNFTIndex, setActiveNFTIndex] = useState(2); // null indicates no active div

  return (
    <main className="h-screen w-screen overflow-clip bg-gradient-to-b relative from-[#7E2EF7] to-[#9C93FF]">
      {/* BACKGROUND ELLIPSE SVGs */}
      <svg
        width="2006"
        height="2007"
        viewBox="0 0 2006 2007"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 transform -translate-x-1/2 -top-[60%] scale-75 xl:-top-[40%] 2xl:-top-[15%] 2xl:scale-100 3xl:-top-[5%] z-0"
      >
        <g filter="url(#filter0_f_1_7903)">
          <circle cx="1002.5" cy="999.755" r="374.5" fill="#C5ACFF" />
        </g>
        <circle
          cx="1002.5"
          cy="985.755"
          r="464"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="41"
        />
        <circle
          cx="1003"
          cy="1003.25"
          r="602.5"
          stroke="white"
          strokeOpacity="0.06"
          strokeWidth="9"
        />
        <circle
          cx="1003"
          cy="1003.25"
          r="958"
          stroke="white"
          strokeOpacity="0.05"
          strokeWidth="90"
        />
        <defs>
          <filter
            id="filter0_f_1_7903"
            x="410"
            y="407.255"
            width="1185"
            height="1185"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="109"
              result="effect1_foregroundBlur_1_7903"
            />
          </filter>
        </defs>
      </svg>

      {/* DESKTOP NFT IMAGE  */}
      <Image
        src="/images/nft-pvp.png"
        alt="Dashboard Nft Image"
        width={1000}
        height={1000}
        className="hidden lg:block absolute left-0 xl:left-1/2  xl:-translate-x-1/2 xl:-mb-10 z-40 w-[600px] h-[600px] 
                  xl:w-[calc(100vw-750px)] xl:h-[calc(100vw-750px)] lg:bottom-[40px]
                  2xl:w-[calc(100vw-700px)] 2xl:max-w-[800px] 2xl:max-h-[800px]
                  3xl:h-[calc(100vw-700px)] 3xl:max-w-[850px] 3xl:max-h-[850px] 
                  "
      />

      {/* SELECT FROM AVAILABLE NFTs */}
      <div className="tallXL:scale-75 tallXL:2xl:scale-90 tallXL:3xl:scale-100 pl-6 space-y-6 lg:pl-[40px] h-fit absolute w-fit xl:top-1/2  xl:-translate-y-1/2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "rounded-2xl transition-transform duration-150 ease-in cursor-pointer p-1 bg-gradient-to-r border-yellow-400",
              {
                "border-4 bg-clip-content inset-0 from-white to-white scale-105":
                  activeNFTIndex === i,
                "inset-0 from-white to-transparent": activeNFTIndex !== i,
              }
            )} // Adjust hover and border color as needed
            onClick={() => setActiveNFTIndex(i)}
          >
            <div className={cn("w-[460px] h-[150px] rounded-2xl")}></div>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="absolute flex gap-3 right-12 bottom-12 ">
        <div className="flex">
          <Button
            variant="game"
            className={cn(
              "text-[40px] font-semibold font-g8 text-[#353533] !rounded-r-none z-10"
            )}
          >
            <Icons.controller className="w-14 h-14 mr-2" />
            PVP
          </Button>
          <Select className="relative">
            <SelectTrigger
              className={cn(
                "!rounded-l-none",
                buttonVariants(),
                "!bg-[#11A7FC] !w-fit transform !border-b-8 !border-blue-500",
                "transform active:translate-y-0.5 active:border-none transition duration-150 ease-in-out z-10"
              )}
            ></SelectTrigger>
            <SelectContent className="pb-6">
              <Tabs>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
              </Tabs>
            </SelectContent>
          </Select>
        </div>
      </div>
    </main>
  );
}
