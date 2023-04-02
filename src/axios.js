import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// https://api.themoviedb.org/3/trending/all/week?api_key=f6a60194ae4250257509d45fc9f7a66a&language=en-US
