import { Navbar } from "@/components/navbar";
// import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import gliter from "@/public/images/gliter.svg";
import gliterX from "@/public/images/gliter2.svg";
import discord from "@/public/images/discord.svg";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center mt-32 ">
        <h1 className="text-center text-zinc-50 text-6xl w-[35rem] font-bold leading-[62px] tracking-[-0.3rem]">
          The easiest way <br /> to start a DAO
        </h1>
        <p className="w-[28rem] text-zinc-50 text-center mt-8 ">
          An all-in-one platform to start, manage and grow a decentralized
          autonomous organization
        </p>
        <button className="mt-20 bg-700 hover:bg-700/70 transition-colors py-3 px-10 rounded-lg text-bg font-bold">
          Get started
        </button>
        <div className="mt-32 text-700 animate-bounce">
          <ChevronsDown />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-32">
        <h1 className="text-center flex gap-10 text-zinc-50 text-[3.30rem] font-bold leading-[62px] tracking-[-0.3rem]">
          <span>
            <Image src={gliter} alt="" width={50} />
          </span>
          Ready for every project
        </h1>
        <div className="flex gap-5 mt-10 ">
          <Badge variant="default" className="text-pink-300">
            Investment DAO
          </Badge>
          <Badge variant="default" className="text-yellow-400">
            Startup DAO
          </Badge>
          <Badge variant="default" className="text-purple-400">
            Service DAO
          </Badge>
          <Badge variant="default" className="text-sky-400">
            Community DAO
          </Badge>
        </div>
        <div className="flex gap-5 mt-5 ">
          <Badge variant="default" className="text-blue-300">
            Impact DAO
          </Badge>
          <Badge variant="default" className="text-rose-400">
            DeFi DAO
          </Badge>
          <Badge variant="default" className="text-zinc-400">
            + More
          </Badge>
        </div>
        <div className="w-[1200px] h-[500px] border border-[#2A3744] bg-bg/50 overflow-hidden  relative  mt-10 rounded-xl">
          <div className="bg-bgjobs h-screen absolute w-[1200px] bg-center bg-cover animate-slide-down" />
        </div>
        <Badge
          variant="default"
          className="relative font-bold bg-orange-500 border-bg hover:bg-orange-700 w-96 text-bg -top-5">
          1000+ projects launched on Superdao
        </Badge>
      </div>
      <div className="w-full font-bold flex gap-3 flex-col text-2xl justify-center mt-20 text-[#37424D] items-center">
        <h1 className="font-bold text-3xl text-white mb-11">
          Designed for the full journey
        </h1>
        <h1 className="hover:text-300 transition-all hover:text-3xl">
          Organisation design
        </h1>
        <h1 className="hover:text-300 transition-all hover:text-3xl ">
          Fundraising
        </h1>
        <h1 className="text-300 transition-all hover:text-3xl">
          Launch marketing
        </h1>
        <h1 className="hover:text-300 transition-all hover:text-3xl">
          Member onboarding
        </h1>
        <h1 className="hover:text-300 transition-all hover:text-3xl">
          Contributor management
        </h1>
        <h1 className="hover:text-300 transition-all hover:text-3xl">
          DAO operations
        </h1>
      </div>
      <div className="w-full flex flex-col gap-11 justify-center items-center">
        <h1 className="text-center mt-20 flex  gap-10  text-zinc-50 text-3xl font-bold ">
          <span>
            <Image src={gliterX} alt="" width={50} />
          </span>
          All the tools in one app
        </h1>
        <ul className="flex gap-3 font-semibold text-base text-[#37424D]">
          <li className="text-700 transition-colors  cursor-pointer py-2 px-4 rounded-full">
            NFT membership
          </li>
          <li className="hover:text-700 transition-colors cursor-pointer py-2 px-4 rounded-full">
            Member directory
          </li>
          <li className="hover:text-700 transition-colors cursor-pointer py-2 px-4 rounded-full">
            Treasury
          </li>
          <li className="hover:text-700 transition-colors cursor-pointer py-2 px-4 rounded-full">
            Governance
          </li>
          <li className="hover:text-700 transition-colors cursor-pointer py-2 px-4 rounded-full">
            App store
          </li>
        </ul>
        <div>
          <Image src={discord} alt="" />
        </div>
      </div>
    </div>
  );
}
