import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useGetAPI(url) {
 const [data, setData] = useState([]);
 const [error, setError] = useState(null);

 const getData = async () => {
  const response = await axios(url);
  try {
   setData(response.data);
  } catch (error) {
   setError(error.message);
  }
 };
 useEffect(() => {
  getData();
 }, []);

 return { data, error };
}
