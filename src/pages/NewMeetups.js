import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = (props) => {
  let navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    ).then(() => {
      navigate('/', { replace: true })
    });
  };

  return (
    <section>
      <h1>Add new meet up</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
