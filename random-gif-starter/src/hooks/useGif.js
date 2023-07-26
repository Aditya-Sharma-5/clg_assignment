import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



// way to fetch data from .env file
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const[gif , setGif] = useState('');
  const[loading , setLoading] = useState('false');


  // ye function api call krke , 
  // usme se meme lekr gif k andr attach kr dega using setGif function.

  async function fetchData(tag){
    setLoading(true);
    // api call using axios
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`:url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect( ()=>{
    fetchData('Car');
  } , [])

  return{gif , loading , fetchData}


};

export default useGif;
