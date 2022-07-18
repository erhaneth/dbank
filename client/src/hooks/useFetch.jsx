import { useEffect, useState } from "react";

const API_KEY = import.local.env.DBANK_GIPHY_API_KEY;

const useFetch = ({keyword}) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGiphy = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(" ")
          .join("")}&limit=1`
      );
      const data = await response.json();
      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      setGifUrl(
        'https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif'
      );
    }
  };
   useEffect(() => {
    if(keyword)fetchGiphy();
  }
    , [keyword]);
    return gifUrl;
};

export default useFetch;