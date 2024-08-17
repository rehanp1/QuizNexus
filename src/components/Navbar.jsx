import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { IoIosReturnLeft } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="text-white px-2 py-4 flex justify-between items-center max-w-[95%] md:max-w-[90%] m-auto relative">
      {/* Mobile NavOptions */}
      <span
        className="md:hidden text-2xl"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </span>
      {isOpen && (
        <section className="flex flex-col [&>*]:mb-4 absolute top-14 left-1/2 -translate-x-1/2 w-[105%] text-lg py-3 px-6 [&>*]:py-1 h-[calc(100dvh-3.5rem)] text-[#24292f] md:hidden">
          <a href="#" className="custom--flex">
            Trivia
            <IoIosReturnLeft />
          </a>
          <a href="#" className="custom--flex">
            Quiz
            <IoIosReturnLeft />
          </a>
          <a href="#" className="custom--flex">
            Leaderboard
            <IoIosReturnLeft />
          </a>
          <a href="#" className="custom--flex">
            Contact
            <IoIosReturnLeft />
          </a>
          <a
            href="#"
            className="bg-[#24292f] text-white rounded-md text-center text-base mt-auto"
          >
            Sign up
          </a>
        </section>
      )}
      <span className="font-bold md:hidden">QUIZ MASTER</span>

      {/* Desktop NavOptions */}
      <section className="hidden justify-between items-center [&>*]:mr-8 text-base md:flex">
        <a href="#" className="font-bold hover:text-gray-300">
          QUIZ MASTER.
        </a>
        <a href="#" className="hover:text-gray-300 ml-6">
          Trivia
        </a>
        <a href="#" className="hover:text-gray-300">
          Quiz
        </a>
        <a href="#" className="hover:text-gray-300">
          Leaderboard
        </a>
        <a href="#" className="hover:text-gray-300">
          Contact
        </a>
      </section>
      <section className="[&>*]:ml-1 text-sm">
        <a
          href="#"
          className="hover:text-gray-300 rounded-lg p-2 border md:border-none "
        >
          Sign in
        </a>
        <a
          href="#"
          className="border border-inherit p-2 rounded-lg hover:text-gray-300 hidden md:inline"
        >
          Sign up
        </a>
      </section>
    </nav>
  );
};

export default Navbar;
