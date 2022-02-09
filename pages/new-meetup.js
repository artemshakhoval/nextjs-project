import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const addNewMeetupHandler = (enteredMeetup) => {
    console.log(enteredMeetup);
  };

  return <NewMeetupForm onAddMeetup={addNewMeetupHandler} />;
};

export default NewMeetup;
