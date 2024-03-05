import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const fullUrl = `${BASE_URL}/${url}`;

  // Log the full URL
  console.log("Requesting URL:", fullUrl);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
