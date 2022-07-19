import { useEffect, useState } from "react";

// const APIKEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
        
    //   const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=OhoITg1G03QmxEJeVp65GutiSVybqVkc&q=${keyword.split(" ").join("")}&limit=25&offset=0&rating=g&lang=en`);
      const { data } = await response.json();
      console.log(data);

      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      setGifUrl("https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif");
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;