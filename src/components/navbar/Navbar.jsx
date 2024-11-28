"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTasks } from 'react-icons/fa';
import { FaDonate } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
  const [solutions, setSolutions] = useState(false);

  const handleSolutions = () => {
    setSolutions(!solutions);
  };

  useEffect(() => {
    const closeShowOptions = (e) => {
      if (!e.target.closest(".open")) {
        setSolutions(false);
      }
    };
    document.body.addEventListener("click", closeShowOptions);
    return () => {
      document.body.removeEventListener("click", closeShowOptions);
    };
  }, []);

  return (
    <div className="fixed w-full z-50 bg-black text-white py-4 px-[50px] justify-between items-center flex gap-[50px]">
      <Link href={""}>
        <div>
          <h1 className="text-white lg:text-[25px] md:text-[20px] text-[18px]">
            John <span className="text-[#FF0000]">Animasahun</span>
          </h1>
        </div>
      </Link>

      <div className="flex gap-[30px] items-center justify-center">
        <Link href={""}>
          <div className="text-white hover hover:text-[#FF0000]">
            <h1>Home</h1>
          </div>
        </Link>

        <div
          onClick={handleSolutions}
          className="lg:flex items-center  lg:flex-row gap-2 relative cursor-pointer hidden z-100"
        >
          <div className="flex items-center gap-[10px]">
            <p>About</p>
            <Image
              src={"./dropdown-btn.svg"}
              alt="Next.js Logo"
              width={20}
              height={20}
            />
          </div>
          {solutions && (
            <div className="absolute bg-[var(--primary-color)] rounded-md top-[50px] text-black p-8 w-[340px] h-[310px] left-[-80px] shadow-2xl flex flex-col z-0">
              <div className="text-[var(--text-color)] mb-[25px]"></div>
              <div className="">
                <Link href={"/multi-wallet"}>
                  <div className="flex gap-[15px] ">
                    <div className="mt-[13px]">
                    <FaUser size={30} color="red" />
                    </div>
                    <div>
                      <h1 className="font-bold text-[16px] text-[var(--text-color)]">
                        About Me
                      </h1>
                      <p className="text-[12px] text-[var(--text-color)] w-[180px]">
                        Everything you need to know about me
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="my-[30px]">
                <Link href={"/bridge"}>
                  <div className="flex gap-[15px]">
                    <div className="mt-[13px]">
                    <FaTasks size={30} color="red" />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        Projects
                      </h1>
                      <p className="text-[12px] text-[var(--text-color)] w-[180px]">
                        Projects I&apos;ve worked on
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div>
                <Link href={"/buy"}>
                  <div className="flex gap-[15px]">
                    <div className="mt-[13px]">
                    <FaDonate size={30} color="red" />
                    </div>
                    <div>
                      <h1 className="font-bold text-[18px] text-[var(--text-color)]">
                        Offerings
                      </h1>
                      <p className="text-[12px] text-[var(--text-color)] w-[180px]">
                        What I can offer
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link href={""}>
          <div className="text-white hover hover:text-[#FF0000]">
            <h1>Contact</h1>
          </div>
        </Link>

        <Link href={""}>
          <div className="text-white hover hover:text-[#FF0000]">
            <h1>Skills</h1>
          </div>
        </Link>
      </div>

      <div>
        <Link href={""}>
          <div className="border-[1px] border-[#FF0000] py-[10px] px-[40px] rounded-[50px] hover hover:bg-[#FF0000] hover:text-white ">
            <button>Let&apos;s talk</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
