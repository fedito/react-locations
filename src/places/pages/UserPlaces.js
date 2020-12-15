import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "The most famous building in the world",
    imageUrl:
      "https://projection-mapping.org/wp-content/uploads/2015/08/obscura-project-change-empire-state-building-designboom-02-818x512.jpg",
    adress: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "The most famous building in the world",
    imageUrl:
      "https://projection-mapping.org/wp-content/uploads/2015/08/obscura-project-change-empire-state-building-designboom-02-818x512.jpg",
    adress: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
