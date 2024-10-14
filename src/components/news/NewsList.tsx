"use client";
import { NewsItem } from "@/types/news";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import { fetchNews } from "@/lib/fetchNews";
import Newscard from "../Newscard";

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getnews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };

    getnews();
  }, [category, search]);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-5">
        {/* Search bar */}
        <SearchBar onSearch={setSearch} />

        {/* category filtering */}
        <CategoryFilter onCategoryChange={setCategory} />

        {/* present news */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
          {news.map((item: NewsItem) => (
            <Newscard key={item?._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
