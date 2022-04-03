import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.css";
import Cards from "../Cards";

const DetailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  console.log(data);
  const getData = async (url: string) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(`https://picsum.photos/id/${id}/info`);
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <div className="detail">
      {/* <img src={data.download_url}/>
    <div  className="info">
      <span>Id : {id}</span>
      <span>Author : {data.author}</span>
    </div> */}
      <Cards download_url={data.download_url} author={data.author} />;
    </div>
  );
};

export default DetailPage;
