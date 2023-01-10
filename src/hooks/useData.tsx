import axios from "axios";
import useSWR from "swr";

const fetcher = () => {
  return (url: string) => axios.get(url).then((res) => res.data);
};

const useData = (url: string) => {
  const { data, error } = useSWR(url, fetcher());

  return { data, loading: !!error || !data, error };
};

export default useData;
