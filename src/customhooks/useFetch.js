import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [patientsData, setPatients] = useState([]);

  const getPatients = useCallback(async () => {
    const response = await fetch(url);
    console.log(response);
    //const patientsData = await response.json();

    setPatients(patientsData);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getPatients();
  }, [url, getPatients]);
  return { loading, patientsData };
};
