import { useEffect, useState } from "react";

function GetApiData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {

    getData();

  }, [url]);

  async function getData() {
    try {
      const response = await fetch(url);
      const apidata = await response.json();
      setData(apidata);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return  { data, loading, error };
}

export default GetApiData;
