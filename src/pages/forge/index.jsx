import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TourProvider, useTour, withTour } from "@reactour/tour";
import PVPBackgroundLottie from "@/components/Lottie/PVPBackgroundLottie";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/layout/navbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const selectData = [
  {
    id: 842,
    bubbles: 8952,
    level: 2,
    src: "/images/nft-1.png",
  },
  {
    id: 443,
    bubbles: 4952,
    level: 1,
    src: "/images/nft-1.png",
  },
  {
    id: 543,
    bubbles: 5952,
    level: 3,
    src: "/images/nft-pvp.png",
  },
  {
    id: 643,
    bubbles: 6952,
    level: 10,
    src: "/images/nft-1.png",
  },
  {
    id: 7423,
    bubbles: 7952,
    level: 4,
    src: "/images/nft-1.png",
  },
  {
    id: 74223,
    bubbles: 7952,
    level: 4,
    src: "/images/nft-1.png",
  },

  {
    id: 5432,
    bubbles: 5952,
    level: 3,
    src: "/images/nft-pvp.png",
  },
  {
    id: 6434,
    bubbles: 6952,
    level: 10,
    src: "/images/nft-1.png",
  },
  {
    id: 74312,
    bubbles: 7952,
    level: 4,
    src: "/images/nft-1.png",
  },
];

let tabs = [
  { id: "emote", label: "Emote" },
  { id: "soul", label: "Soul" },
  { id: "body", label: "Body" },
  { id: "scarf", label: "Scarf" },
];

export default function Forge() {
  const [activeNFT, setActiveNFT] = useState(selectData[2]);
  const [gameMode, setGameMode] = useState("PVP");
  const [rarity, setRarity] = useState("Mythic");
  const [rewardPointsNeeded, setRewardPointsNeeded] = useState(300);
  const [rewardProgress, setRewardProgress] = useState(346);
  const [claimable, setClaimable] = useState(
    rewardPointsNeeded <= rewardProgress
  );
  const [rewardsLevel, setRewardsLevel] = useState(6);

  const [avatar, setAvatar] = useState(null);

  return (
    <main
      className={
        "h-screen w-screen overflow-clip bg-gradient-to-b relative p-7 lg:p-14 xl:p-0 from-[#5E58FF] to-[#00C6FF]"
      }
    >
      {/* DESKTOP NAVIGATION */}
      <div className="hidden xl:block">
        <NavBar avatar={avatar} />
      </div>

      {/* SELECT OPTIONS */}
      <div className="p-3 xl:p-6 xl:m-14 w-fit h-full xl:h-[77vh] rounded-2xl bg-black/30 border-white/20 border-4 z-50">
        <SelectForge />
      </div>

      {/* BACKGROUND VIDEO ANIMATION */}
      <PVPBackgroundLottie />

      {/* Forge IMAGE  */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2">
        <div className="">
          {/* <Image
            unoptimised
            src={"/images/forge/forge-none.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="invisible -translate-x-[1vw] translate-y-[0.5vw] z-50
                     w-[25.5vw]
                    "
          />
          <Image
            unoptimised
            src={"/images/forge/forge-none.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="absolute left-0 top-0 -translate-x-[1vw] translate-y-[0.5vw] z-50
                     w-[25.5vw]
                    "
          /> */}
          <Image
            unoptimised
            src={"/images/forge/forge-dotted.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="w-[25vw] animate-pulse"
          />
          <Image
            unoptimised
            src={"/images/forge/forge-emote.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="absolute z-40
            left-[7vw] top-[4vw] 
            w-[12vw]
                    "
          />
          <Image
            unoptimised
            src={"/images/forge/forge-scarf.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="absolute z-50
            left-[7.3vw] top-[14.2vw]
            w-[10.8vw]
                    "
          />
          <Image
            unoptimised
            src={"/images/forge/forge-soul.png"}
            alt="Dashboard Nft Image"
            width={1000}
            height={1000}
            className="absolute z-30
            left-[0.5vw] top-[1vw]
            w-[22.5vw]
                    "
          />
        </div>
      </div>

      {/* GAME MODE BUTTONS */}
      <div className="absolute flex gap-3 right-8 bottom-8 xl:right-12 xl:bottom-12 ">
        <div className="absolute flex flex-col gap-1.5 xl:gap-2.5 items-end bottom-20 md:bottom-28 lg:bottom-36 xl:bottom-60 right-0">
          <div className="flex gap-4 items-baseline font-bold text-3xl xl:text-6xl text-white">
            <span className="text-base xl:text-3xl font-normal">
              LV.{activeNFT.level}
            </span>
            <Separator className="h-4 xl:h-6 rounded-full w-0.5 bg-white/80" />#
            {activeNFT.id}
          </div>
          <div className="bg-black/30 rounded-lg xl:rounded-2xl py-2.5 px-4 font-bold text-xs xl:text-2xl text-white whitespace-nowrap">
            Total Bubbles 🫧: {activeNFT.bubbles.toLocaleString()}
          </div>
        </div>

        {/* MOBILE PLAY BUTTON WITH POPUP */}
        <Dialog>
          <DialogTrigger
            className={cn(
              "xl:hidden py-3",
              buttonVariants({ variant: "game" })
            )}
          >
            {" "}
            <Icons.controller className="w-7 h-7 fill-[#353533]" />
            PLAY!
          </DialogTrigger>
          <DialogContent className="h-fit w-fit p-5 bg-primary border-none !rounded-xl">
            <DialogHeader className="">
              <DialogTitle className="text-white text-sm font-bold text-center">
                Choose a game type{" "}
              </DialogTitle>
            </DialogHeader>
            <Tabs className="-mt-1">
              <TabsList className="grid w-full grid-cols-2 h-full gap-2 rounded-[10px] p-2 text-white bg-black/30">
                <TabsTrigger
                  value="head"
                  className="gap-2 px-6 py-1 xl:px-10 xl:py-3 rounded-md data-[state=active]:text-primary data-[state=active]:bg-white"
                  onClick={() => setGameMode("PVP")}
                  data-state={gameMode === "PVP" ? "active" : ""}
                >
                  <Icons.controller className="w-7 h-7 rotate-12 fill-primary" />
                  PVP
                </TabsTrigger>
                <TabsTrigger
                  value="tail"
                  className="gap-2 px-6 py-1 xl:px-10 xl:py-3 rounded-md data-[state=active]:text-primary data-[state=active]:bg-white"
                  onClick={() => setGameMode("Coin Flip")}
                  data-state={gameMode === "Coin Flip" ? "active" : ""}
                >
                  <Icons.coin className="w-full h-full mr-2.5" />
                  Coin Flip
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <p className="text-center mt-3 whitespace-nowrap text-base xl:text-2xl font-bold text-white">
              {" "}
              Play Need :{" "}
              <span className="px-2.5 py-1.5 bg-black/30 rounded-lg ">
                🫧243
              </span>
            </p>

            <Button variant="game" className="w-fit mx-auto">
              Play
            </Button>
          </DialogContent>
        </Dialog>

        {/* DESKTOP PLAY BUTTON */}
        <div className="hidden xl:flex relative">
          {/* bubbles required green */}
          <div className="hidden w-[calc(100%-2px)] xl:block whitespace-nowrap absolute -top-11 text-xl font-bold text-white bg-green-500 pt-2 pb-6 px-3 rounded-t-2xl">
            Bubbles required:{" "}
            <span className="px-2.5 py-1.5 bg-black/30 rounded-lg">🫧234</span>
          </div>

          <Button
            variant="game"
            className={cn(
              "text-base xl:text-[40px] font-semibold font-g8 text-[#353533] !rounded-r-none z-40"
            )}
          >
            <Icons.controller className="w-16 h-16 fill-[#353533]" />
            {gameMode}
          </Button>
          <Select className="relative">
            <SelectTrigger
              className={cn(
                "!rounded-l-none",
                buttonVariants({ variant: "gameSecondary" })
              )}
            ></SelectTrigger>
            <SelectContent
              className={cn({
                "data-[side=top]:!w-[428px]": gameMode === "Coin Flip",
              })}
            >
              <Tabs className="">
                <TabsList className="grid w-full grid-cols-2 h-full gap-2 rounded-[10px] p-2 text-white bg-[#0085CF]">
                  <TabsTrigger
                    value="pvp"
                    className="gap-2 p-1 rounded-[10px] data-[state=active]:text-primary data-[state=active]:bg-white"
                    onClick={() => setGameMode("PVP")}
                    data-state={gameMode === "PVP" ? "active" : ""}
                  >
                    <Icons.controller className="w-7 h-7 rotate-12 fill-primary" />
                    PVP
                  </TabsTrigger>
                  <TabsTrigger
                    value="coin-flip"
                    className="gap-2 p-1 px-2 rounded-[10px] data-[state=active]:text-primary data-[state=active]:bg-white"
                    onClick={() => setGameMode("Coin Flip")}
                    data-state={gameMode === "Coin Flip" ? "active" : ""}
                  >
                    <Icons.coin className="w-full h-full mr-2.5" />
                    Coin Flip
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </SelectContent>
          </Select>
        </div>
      </div>
    </main>
  );
}

function SelectForge() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <h2 className="text-white text-xl xl:text-3xl font-bold">All Buddy</h2>
      <Separator className="my-3 xl:my-7" />

      <Tabs defaultValue="profile" className="relative z-50">
        <ScrollArea className="w-[30vw] 2xl:w-full overflow rounded-lg bg-black/20">
          <ScrollBar className="" orientation="horizontal" />
          <TabsList className=" gap-4 xl:gap-10 mx-1.5 py-2.5 xl:mx-4 xl:my-3.5">
            {tabs.map((tab) => (
              <div className="relative" key={tab.id}>
                <TabsTrigger
                  className={cn(
                    "relative font-bold text-white text-xs xl:text-xl p-1.5 px-2.5 xl:p-2.5 leading-none !z-20 data-[state=active]:text-primary",
                    {
                      "text-primary": activeTab === tab.id,
                    }
                  )}
                  value={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="dot2"
                      transition={{
                        type: "spring",
                        xbounce: 0.2,
                        duration: 0.6,
                      }}
                      className="absolute w-full h-full rounded-md xl:rounded-lg bg-white -z-10"
                      onClick={() => setActiveTab(tab.id)}
                    />
                  )}
                  {tab.label}
                </TabsTrigger>
              </div>
            ))}
          </TabsList>
        </ScrollArea>
        <TabsContent
          value="profile"
          className="flex flex-col gap-5 font-medium text-foreground/50"
        ></TabsContent>
        <TabsContent
          value="stat"
          className="flex flex-col gap-5 font-bold text-foreground/50"
        ></TabsContent>
      </Tabs>
    </>
  );
}