import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Cards";
import { time } from "console";

type ItemProps = {
  url: string;
  id: string;
  width: string;
  author: string;
  download_url: string;
};

const Scroll = () => {
  const [page, setPage] = useState(1);

  const [config, setConfig] = useState([]);
  console.log(config);

  const getData = async (url: string) => {
    try {
      const response = await axios.get(url);

      setConfig(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    getData("https://picsum.photos/v2/list");
  }, []);

  const infiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      let newPage = page;
      newPage++;
      setPage(newPage);
      getData(`https://picsum.photos/v2/list?page=${page}&limit=100`);
    }
  };

  return (
    <div className="app">
      {config.map((item: ItemProps) => {
        return (
          <Cards
            id={item.id}
            download_url={item.download_url}
            author={item.author}
          />
        );
      })}
    </div>
  );
};
export default Scroll;
