import axios from "axios";

// the fetcher function is used by SWR to fetch data from the API
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default fetcher;
