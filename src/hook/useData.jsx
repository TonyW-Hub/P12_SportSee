import { useState } from "react";
import { useEffect } from "react";

const BASE_URL = "http://localhost:3000";

/**
 *
 * @param {Object} props
 * @param {string} props.resource Add string path to access on backend
 * @returns
 */
export const useData = ({ resource }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!resource) return;
    let isMounted = true;

    setLoading(true);

    const getData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/${resource}`);

        if (!isMounted) return;
        if (!res.ok) {
          throw new Error("Request failed");
        }

        const data = await res.json();

        setData(data?.data);
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
  }, [resource]);

  return { data, loading, error };
};
