import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../settings/api.js";

export default function NewsBody() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://storage.googleapis.com/aller-structure-task/test_data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="characters">
      <ul></ul>
    </div>
  );
}
