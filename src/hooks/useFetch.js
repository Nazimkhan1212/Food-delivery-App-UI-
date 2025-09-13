import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (API, id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    try {
      const getData = async () => {
        if (id) {
          const { data } = await axios.get(API + id);
          setResInfo(data);
        } else {
          const { data } = await axios.get(API);
          setResInfo(data);
        }
      };
      getData();
    } catch (error) {
      console.log(error?.message);
    }
  }, []);
  return resInfo;
};

export default useFetch;
