import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewContact() {
  const [personDetails, setPersonDetails] = useState({});
  const { id } = useParams();

  // 4. useEffect
  useEffect(() => {
    fetchData();
  }, [id]);

  // 3. Fetch the data
  const fetchData = () => {
    fetch(`https://boolean-api-server.fly.dev/ps975076/contact/${id}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data, "data");
        setPersonDetails(data);
      });
  };

  return (
    <div>
      <h2>
        {personDetails.firstName} {personDetails.lastName}
      </h2>
      <p>
        {personDetails.street}, {personDetails.city}
      </p>
    </div>
  );
}

export default ViewContact;
