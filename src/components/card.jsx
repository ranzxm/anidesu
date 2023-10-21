import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import style from "@/components/card.module.css";

export const CardPotrait = ({ posterImage, starScore, type1, type2, title, episode, key }) => {
  return (
    <>
      <div className="item" key={key}>
        <div className="itemImage relative">
          <Link href={""}>
            <img
              src={posterImage}
              alt=""
              className="rounded-md hover:opacity-50  md:min-h-[250px] md:max-h-[250px] lg:min-h-[350px] lg:max-h-[350px] sm:min-h-[330px] sm:max-h-[330px]  duration-100 cursor-pointer"
            />
            {starScore === undefined ? (
              <div className="itemEpisode bg-red-600 w-max absolute top-2 left-2 md:top-4 md:left-4 px-3 rounded text-xs md:text-sm">
                <p className="flex items-center gap-1">{episode}</p>
              </div>
            ) : (
              <div className="itemScore bg-red-600 w-max absolute top-4 left-4 px-3 rounded">
                <p className="flex items-center gap-1">
                  <AiFillStar />
                  {starScore}
                </p>
              </div>
            )}
          </Link>
        </div>
        {type1 === undefined ? (
          ``
        ) : (
          <div className="itemAnimeType flex gap-3 my-2 cursor-default select-none">
            <div className="type bg-[#252525] px-2 py-1 rounded flex items-center justify-center">
              <p className="text-xs">{type1}</p>
            </div>
            <div className="type bg-[#252525] px-2 py-1 rounded flex items-center justify-center">
              <p className="text-xs">{type2}</p>
            </div>
          </div>
        )}
        <div className="itemTitle mt-2 md:text-base text-sm">
          <Link href={""} className="font-bold hover:text-[#0099bc]">
            {title}
          </Link>
        </div>
      </div>
    </>
  );
};

export const CardLandscape = ({ judul, imageUrl, starScore, key }) => {
  return (
    <Link href={""} key={key}>
      <div
        className={`${style.cardLandscape} h-56 w-full rounded-md overflow-hidden bg-cover bg-opacity-30`}
      >
        <div className="bg-cover bg-center h-full w-full relative">
          <img
            src={`${imageUrl}`}
            alt=""
            className={`${style.bgImage} w-full h-full object-cover`}
          />
          <div className="title select-none text-sm text-center font-semibold bg-white text-black absolute bottom-8 min-h-[44px] flex items-center w-full justify-center duration-200">
            <p>{judul}</p>
          </div>
          <div className="starScore bg-red-600 w-max absolute top-4 left-4 px-3 rounded">
            <p className="flex items-center gap-1">
              <AiFillStar />
              {starScore}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
