import { useEffect, useState } from "react";
import axios from "axios";

// const APIKEY = import.meta.env.VITE_GIPHY_API;

const APIKEY = process.env.REACT_APP_DBANK_API_KEY;
const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");

  
  useEffect(() => {
    const fetchGifs = async () => {
      try {
          
      //const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
        // const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=OhoITg1G03QmxEJeVp65GutiSVybqVkc&q=${keyword.split(" ").join("")}&limit=1&offset=0&rating=g&lang=en`);
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
        console.log(response.data.data);
        // const data  = await response.json();
        
  
        setGifUrl(response.data.data[0]?.images?.downsized_medium.url);
        // console.log(gifUrl);
      } catch (error) {
        setGifUrl("https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif");
      }
    };

    if (keyword) 
    fetchGifs();
    
  }, [keyword]);

  
  return gifUrl;
};

export default useFetch;