import React from "react";

import ListItem from "../Components/ListItem";

function ContactList({ nameList }) {
  return (
    <div>
      <h1>Contacts</h1>
      <div className="list">
        {nameList.map((person) => (
          <ListItem key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
