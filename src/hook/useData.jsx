import { useState } from "react";
import { useEffect } from "react";
import { APP_API_RESOURCE } from "../data/project/appAPIResource";
import { mapper } from "../data/project/mapper";

const BASE_URL = "http://localhost:3000";

/**
 *
 * @param {Object} props
 * @param {API_KEYS} props.resource Use API_KEYS object to select the current resource selected
 * @param {string} props.userId Add the user id to fetch the correct data
 * @returns
 */
export const useData = ({ resource, userId = "12" }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!resource) return;
    let isMounted = true;

    setLoading(true);

    const getItem = APP_API_RESOURCE.find((el) => el.id === resource);

    const url = getItem.url(userId);

    const getData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/${url}`);

        if (!isMounted) return;
        if (!res.ok) {
          throw new Error("Request failed");
        }

        const data = await res.json();

        setData(mapper[resource](data));
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
  }, [resource, userId]);

  return { data, loading, error };
};
