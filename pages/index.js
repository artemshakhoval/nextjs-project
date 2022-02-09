import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2019/09/c267j3-2.jpg",
    address: "Barcelona, 24055, Some street",
    description: "A First Meetup place",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2015/12/15040570004_d78f0f11d2_z.jpg",
    address: "Barcelona, 24055, Some street",
    description: "A Second Meetup place",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2019/09/c267j3-2.jpg",
    address: "Barcelona, 24055, Some street",
    description: "A Third Meetup place",
  },
];

const HomePage = () => {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
};

export default HomePage;
