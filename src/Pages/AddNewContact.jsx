// 1. Import useState
import { useState } from "react";

//3. Create function for the form
function AddNewContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { firstName, lastName, street, city };

    // if first and last name are not then give an err

    fetch("https://boolean-api-server.fly.dev/ps975076/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
      });
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setCity("");
    setStreet("");
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <h2>Create Contact</h2>
          <div>
            <label>First Name</label>
            <br />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <br />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Street</label>
            <br />
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Street"
            />
          </div>
          <div>
            <label>City</label>
            <br />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>

          <button type="submit">Create</button>
        </form>
      </section>
    </>
  );
}

export default AddNewContact;
