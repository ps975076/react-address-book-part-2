import "./App.css";

// 1. Import useState, useEffect
import { useState, useEffect } from "react";

function App() {
  // 2. Create States
  const [contactList, setContactList] = useState([]);
  const [addANewContact, setAddANewContact] = useState([]);

  // 4. useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // 3. Fetch the data
  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/ps975076/contact")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        setContactList(data);
      });
  };

  return <h2>Menu</h2>;
}

export default App;
