"use client";

import Link from "next/link";
import { BiSearch, BiMenu } from "react-icons/bi";
import style from "@/components/navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [navHeight, setNavHeight] = useState("h-0");
  return (
    <>
      <div className="navbar text-white">
        <div className="container mx-auto">
          <div className="navbarItem">
            <div className="navbarItemTop py-3 flex items-center justify-between px-4 sm:px-0">
              <div className="navbarItemBrand">
                <Link href={"/"}>
                  <img
                    src="/logo-light.png"
                    alt="brand-logo"
                    className="min-h-[64px] h-16 min-w-fit"
                  />
                </Link>
              </div>
              <div className="navLinks font-bold lg:flex hidden gap-5">
                <div className={`${style.navLink} home `}>
                  <Link href={"/"}>Home</Link>
                </div>
                <div className={`${style.navLink} ongoingAnime`}>
                  <Link href={"/ongoing-anime"}>Ongoing</Link>
                </div>
                <div className={`${style.navLink} jadwalRilis`}>
                  <Link href={"/jadwal-rilis"}>Jadwal Anime</Link>
                </div>
                <div className={`${style.navLink} listGenre`}>
                  <Link href={"/list-genre"}>Genre List</Link>
                </div>
              </div>
              <div className="searchBarToggleMenu flex items-center gap-3">
                <div className="navbarItemSearchBar sm:flex hidden items-center bg-[#131313] w-80 gap-3 px-4 py-3 rounded-full">
                  <div className="searchBarIcon text-2xl">
                    <BiSearch />
                  </div>
                  <div className="searchBarForm w-full">
                    <input
                      type="text"
                      className="outline-none bg-transparent w-full placeholder:opacity-50 text-sm"
                      placeholder="Mau nonton apa hari ini ?"
                    />
                  </div>
                </div>
                <div className="navbarItemHamburgerMenu lg:hidden ">
                  <div
                    className="menuIcon text-2xl bg-[#0099bc] p-1 rounded-full cursor-pointer"
                    onClick={() => {
                      navHeight === "h-0" ? setNavHeight("h-[272px]") : setNavHeight("h-0");
                    }}
                  >
                    <BiMenu />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`navbarItemBottom w-full bg-[#0a0a0a] sm:gap-0 gap-5 flex items-center flex-col justify-center duration-200 ${navHeight} overflow-hidden`}
            >
              <div className="flex items-center justify-center">
                <div className="navLinks font-bold w-full flex justify-center flex-col items-center gap-5">
                  <div className={`${style.navLink} home `}>
                    <Link href={"/"}>Home</Link>
                  </div>
                  <div className={`${style.navLink} listAnime`}>
                    <Link href={"/list-anime"}>List Anime</Link>
                  </div>
                  <div className={`${style.navLink} ongoingAnime`}>
                    <Link href={"/ongoing-anime"}>Ongoing</Link>
                  </div>
                  <div className={`${style.navLink} jadwalRilis`}>
                    <Link href={"/jadwal-rilis"}>Jadwal Anime</Link>
                  </div>
                  <div className={`${style.navLink} listGenre`}>
                    <Link href={"/list-genre"}>Genre List</Link>
                  </div>
                </div>
              </div>
              <div className="navbarItemSearchBar sm:hidden flex items-center bg-[#131313] w-full gap-3 px-4 py-3">
                <div className="searchBarIcon text-2xl">
                  <BiSearch />
                </div>
                <div className="searchBarForm w-full">
                  <input
                    type="text"
                    className="outline-none bg-transparent w-full placeholder:opacity-50 text-sm"
                    placeholder="Mau nonton apa hari ini ?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
