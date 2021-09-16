import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const fetchingData = async () => {
    const data = await axios.get("http://localhost:5000/api/fruits");
    console.log(data);
    return setData(data);
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return <h1>Working</h1>;
}

export default App;
