import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  params: {
    api_key: "b08e4c0395fccfb69ba749e97fc5a927",
  },
});

export default instance;
