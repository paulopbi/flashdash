import { useEffect, useState } from "react";

function useFetch(page = 1) {
  const RANDOM_URL = "https://api.unsplash.com/photos/random/";
  const KEY = "n-KrTvjnkCKf8QKVk5UUF_mLC0vWEqg2omOEmFsB-Dw";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomPhotos = async () => {
      try {
        const API = await fetch(
          `${RANDOM_URL}?client_id=${KEY}&page=${page}&count=10`
        );
        const RESPONSE = await API.json();
        setData(RESPONSE);
      } catch (error) {
        setError("Ops, something is wrong, please try again");
        console.error(`Something is wrong, error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomPhotos();
  }, [page]);

  return { data, loading, error };
}

export default useFetch;
