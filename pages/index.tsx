import type { NextPage } from "next";
import { useEffect } from "react";

const AndroidLarge1: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-gray-100 box-border w-full h-[801px] overflow-hidden text-left text-[24px] text-white font-lexend-giga border-[1px] border-solid border-black [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_fade-in] sm:opacity-[0]"
      data-animate-on-scroll
    >
      <h2 className="m-0 absolute top-[calc(50%_-_284.5px)] left-[calc(50%_-_161.5px)] text-inherit font-extrabold font-inherit inline-block w-[328px] h-[58px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)]">
        Hey Eco-Badger!
      </h2>
      <div className="absolute top-[calc(50%_-_251.5px)] left-[calc(50%_-_158.5px)] text-[17px] font-semibold inline-block w-[311px] h-[35px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)]">
        Here are some tasks for you:
      </div>
      <section className="absolute top-[609px] left-[19px] rounded-6xl [background:linear-gradient(180deg,_#4e4c4c_79.69%,_rgba(30,_30,_30,_0))] w-[314px] h-[167px] flex flex-col py-[2.1973683834075928px] pr-[11px] pl-3 box-border items-start justify-start text-left text-xl text-white font-lexend-giga">
        <b className="relative inline-block w-[124px] h-[34.06px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)]">
          Task 3:
        </b>
        <b className="relative text-mini inline-block w-[291px] h-[106.57px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] mt-[-2px]">
          <p className="m-0">3rd Task Description</p>
          <p className="m-0">Lorum Ipsum</p>
          <p className="m-0">Lorum Ipsum</p>
          <p className="m-0">Lorem Ipsum</p>
          <p className="m-0">Lorem Ipsum</p>
        </b>
      </section>
      <section className="absolute top-[413px] left-[19px] rounded-6xl [background:linear-gradient(180deg,_#4e4c4c_79.69%,_rgba(30,_30,_30,_0))] w-[314px] h-[167px] flex flex-col py-[2.1973683834075928px] pr-[11px] pl-3 box-border items-start justify-start text-left text-xl text-white font-lexend-giga">
        <b className="relative inline-block w-[124px] h-[34.06px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)]">
          Task 2:
        </b>
        <b className="relative text-mini inline-block w-[291px] h-[106.57px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] mt-[-2px]">
          <p className="m-0">2nd Task Description</p>
          <p className="m-0">Lorum Ipsum</p>
          <p className="m-0">Lorum Ipsum</p>
          <p className="m-0">Lorem Ipsum</p>
          <p className="m-0">Lorem Ipsum</p>
        </b>
      </section>
      <section className="absolute top-[218px] left-[19px] rounded-6xl [background:linear-gradient(180deg,_#4e4c4c_79.69%,_rgba(30,_30,_30,_0))] w-[314px] h-[167px] flex flex-col py-[2.1973683834075928px] pr-[11px] pl-3 box-border items-start justify-start text-left text-xl text-white font-lexend-giga">
        <b className="relative inline-block w-[124px] h-[34.06px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)]">
          Task 1:
        </b>
        <b className="relative text-mini inline-block w-[291px] h-[106.57px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] mt-[-2px]">
          <p className="m-0">1st Task Description</p>
          <p className="m-0">Lorum Ipsum</p>
          <p className="m-0">Lorum Ipsum</p>
          <p className="m-0">Lorem Ipsum</p>
          <p className="m-0">Lorem Ipsum</p>
        </b>
      </section>
      <section className="absolute top-[-29px] left-[-69px] rounded-[82px] [background:linear-gradient(180deg,_#1c1c1c_74.48%,_rgba(28,_28,_28,_0))] w-[473px] h-[150px]" />
      <section className="absolute top-[-17px] left-[0px] w-[360px] h-[133px]">
        <img
          className="absolute top-[17px] left-[0px] w-[360px] h-[47.05px]"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute top-[29.76px] left-[0px] w-[360px] h-[47.04px]"
          alt=""
          src="/vector1.svg"
        />
        <img
          className="absolute top-[17px] left-[0px] w-[360px] h-[47.05px]"
          alt=""
          src="/vector2.svg"
        />
        <img
          className="absolute top-[44.24px] left-[0px] w-[360px] h-[48.83px]"
          alt=""
          src="/vector3.svg"
        />
        <img
          className="absolute top-[26.36px] left-[0px] w-[360px] h-[48.83px]"
          alt=""
          src="/vector4.svg"
        />
        <img
          className="absolute top-[57.81px] left-[0px] w-[360px] h-[48.84px]"
          alt=""
          src="/vector5.svg"
        />
        <img
          className="absolute top-[42.63px] left-[0px] w-[360px] h-[47.04px]"
          alt=""
          src="/vector6.svg"
        />
        <img
          className="absolute top-[71.38px] left-[0px] w-[360px] h-[48.84px]"
          alt=""
          src="/vector7.svg"
        />
        <img
          className="absolute top-[56.2px] left-[0px] w-[360px] h-[47.04px]"
          alt=""
          src="/vector8.svg"
        />
        <img
          className="absolute top-[84.95px] left-[0px] w-[360px] h-[48.83px]"
          alt=""
          src="/vector9.svg"
        />
      </section>
      <div className="absolute top-[28px] left-[9px] rounded-[50%] bg-gray-200 w-[50px] h-[50px]" />
      <img
        className="absolute top-[0px] left-[131px] w-[102.22px] h-[104.12px] object-cover"
        alt=""
        src="/firefly-minimalisitic-roundish-type-leaf-logo-37003fotor20230818233759-1@2x.png"
      />
      <img
        className="absolute top-[39px] left-[19px] rounded-mini-5 w-[31px] h-[5px] object-cover"
        alt=""
        src="/ext-menu1-1@2x.png"
      />
      <img
        className="absolute top-[50px] left-[19px] rounded-mini-5 w-[31px] h-[5px] object-cover"
        alt=""
        src="/ext-menu1-1@2x.png"
      />
      <img
        className="absolute top-[61px] left-[19px] rounded-mini-5 w-[31px] h-[5px] object-cover"
        alt=""
        src="/ext-menu1-1@2x.png"
      />
    </div>
  );
};

export default AndroidLarge1;
