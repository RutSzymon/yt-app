import axios from "axios";

const KEY = "AIzaSyB9ACg2NlduwdvjZ6F7sGj4Jeq5BMeJJdA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
