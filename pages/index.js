import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2019/09/c267j3-2.jpg",
    address: "Barcelona, 24055, Rambla street",
    description: "A First Meetup place",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2015/12/15040570004_d78f0f11d2_z.jpg",
    address: "Barcelona, 24055, Sagrada street",
    description: "A Second Meetup place",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2019/09/c267j3-2.jpg",
    address: "Barcelona, 24055, Columb street",
    description: "A Third Meetup place",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

export default HomePage;
