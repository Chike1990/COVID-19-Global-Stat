import axios from "axios";
import url from "./urls";

const fetchCovidCases = (date) =>
  axios({
    method: "get",
    url: `${url}/${date}`,
  });

export default fetchCovidCases;
