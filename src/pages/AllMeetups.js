import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is the first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/b/b4/Buckingham_Palace%2C_London_-_April_2009.jpg",
//     address: "London, Bukingem Palace 2a",
//     description: "This is the first amazing meetup, we glad..",
//   },
//   {
//     id: "m2",
//     title: "This is the second meetup",
//     image:
//       "https://previews.123rf.com/images/jordi2r/jordi2r1811/jordi2r181100082/126924522-.jpg",
//     address: "NewYork, 6th Avenue",
//     description: "This is the second amazing meetup in NewYork, we glad..",
//   },
//   {
//     id: "m3",
//     title: "This is the third meetup",
//     image:
//       "https://554a875a-71dc-4f5f-b6bf-ae8967f137d5.selcdn.net/thumbs2/01a1efb4-6f3c-11e8-8346-6e714efd800d.800x600.jpg",
//     address: "Kyiv, Chreschatik 23a",
//     description: "This is the third amazing meetup in  great Kyiv, we glad..",
//   },
// ];

const AllMeetupsPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
