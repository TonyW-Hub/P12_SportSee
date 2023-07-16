import { useState } from "react";
import { useEffect } from "react";
import { APP_API_RESOURCE } from "../data/project/appAPIResource";
import { mapper } from "../data/project/mapper";

const BASE_URL = "http://localhost:3000";

/**
 *
 * @param {Object} props
 * @param {string} props.resource Add string path to access on backend
 * @returns
 */
export const useData = ({ id, userId = "12" }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    let isMounted = true;

    setLoading(true);

    const getItem = APP_API_RESOURCE.find((el) => el.id === id);

    const url = getItem.url(userId);

    const getData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/${url}`);

        if (!isMounted) return;
        if (!res.ok) {
          throw new Error("Request failed");
        }

        const data = await res.json();

        setData(mapper[id](data));
      } catch (error) {
        if (!isMounted) return;
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => {
      isMounted = false;
    };
  }, [id, userId]);

  return { data, loading, error };
};
