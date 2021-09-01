import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    getApi();
  }, []);

  const [data, setData] = useState<any>();
  const getApi = async () => {
    try {
      const url = "https://api.publicapis.org/random";
      const res = await axios.get(url);
      setData(res.data.entries[0]);
      console.log(res.data.entries[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <span onClick={() => getApi()}>test lol {data.API}</span>
    </div>
  );
}

export default App;
