"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 py-10 flex flex-col items-center gap-4 text-white/80 text-lg">
      {/* <Image src="/Avatar.png" alt="avatar" width={80} height={80} className="rounded-full border border-white/20" /> */}
      <p> Designed and built with ❤️ by Paridhi Talwar</p>
    </footer>
  );
}
