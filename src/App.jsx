// 1. Import useState, useEffect
import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AddNewContact from "./Pages/AddNewContact";
import ContactList from "./Pages/ContactList";
import ViewContact from "./Pages/ViewContact";

// Import the component - sideBar
import SideBar from "./Components/SideBar";

function App() {
  // 2. Create States
  const [nameList, setNameList] = useState([]);
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
        setNameList(data);
      });
  };

  return (
    <div className="mainContainer">
      <SideBar />

      <div className="con2">
        {/* Adding Routes and Links to pages */}
        <Routes>
          <Route path="/" element={<ContactList nameList={nameList} />} />
          <Route path="/add-contact" element={<AddNewContact />} />
          <Route path="/view/:id" element={<ViewContact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
