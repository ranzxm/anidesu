"use client";

import { Layout } from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardPotrait, CardLandscape } from "@/components/card";
import { TitleHeader } from "@/components/titleHeader";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [recentAnime, setRecentAnime] = useState([]);
  const [mostViewedAnime, setMostViewedAnime] = useState([]);
  const [ongoingAnime, setOngoingAnime] = useState([]);

  const getRecentAnime = async () => {
    setLoading(false);
    const res = await axios.get("http://localhost:3000/api/anime/recent", {
      withCredentials: true,
    });
    setRecentAnime(res.data.data);
    setLoading(true);
  };

  const getMostViewedAnime = async () => {
    setLoading(false);
    const res = await axios.get("http://localhost:3000/api/anime/recent?order_by=most_viewed", {
      withCredentials: true,
    });
    setMostViewedAnime(res.data.data);
    setLoading(true);
  };

  const getOngoingAnime = async () => {
    setLoading(false);
    const res = await axios.get("http://localhost:3000/api/anime/ongoing", {
      withCredentials: true,
    });
    setOngoingAnime(res.data.data);
    setLoading(true);
  };

  useEffect(() => {
    getMostViewedAnime();
    getRecentAnime();
    getOngoingAnime();
  }, []);

  return (
    <Layout>
      <main className="container mx-auto min-h-screen">
        <div className="wrapper flex sm:flex-row flex-col gap-3">
          <div className="main sm:w-8/12 w-full sm:px-0 px-4">
            <div className="recentAnime">
              {loading ? <TitleHeader judul={"Anime Terbaru"} /> : ``}
              <div className="listItems grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {recentAnime.slice(0, 6).map((item, index) => (
                  <CardPotrait
                    posterImage={item.image}
                    starScore={item.ratings}
                    title={item.title}
                    type1={item.typeList.type1}
                    type2={item.typeList.type2}
                    key={index + 1}
                  />
                ))}
              </div>
            </div>
            <div className="ongoingAnime">
              {loading ? <TitleHeader judul={"Anime On-going"} /> : ``}
              <div className="listItems grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {ongoingAnime.slice(0, 6).map((item, index) => (
                  <CardPotrait
                    posterImage={item.image}
                    starScore={item.ratings}
                    title={item.title}
                    episode={item.episode}
                    key={index + 1}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="sidebar w-full px-4 sm:px-0 sm:w-1/3">
            {loading ? <TitleHeader judul={"Dilihat Terbanyak"} /> : ``}
            <div className="listItems flex flex-col gap-6">
              {mostViewedAnime.slice(0, 7).map((item, index) => (
                <CardLandscape
                  judul={item.title}
                  imageUrl={item.image}
                  starScore={item.ratings}
                  key={index + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
