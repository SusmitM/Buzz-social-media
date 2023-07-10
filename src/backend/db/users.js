import {
  v4 as uuid
} from "uuid";
import {
  formatDate
} from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [{
    _id: "5d1b8920-c6cc-4d6a-8a0f-039d01dd4cf0",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    email: "adarshbalika@gmail.com",
    bio: "A Adarsh Balika",
    website: "https://adarshbalika.netlify.app/",
    profileAvatar: "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
    createdAt: "2022-06-12T10:35:21+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: []
  },

  {
    _id: "s2d3Bie-8",
    firstName: "MemeLord",
    lastName: "",
    username: "MemeLord",
    email: "memeland@gmail.com",
    password: "meme@03",
    bio: "I post memes, comics.",
    website: "https://MemeLord.netlify.app/",
    profileAvatar: "https://res.cloudinary.com/djxqg0lar/image/upload/v1688976035/Buzz-socialmedia/o7wfi36pel4riltxi97g.jpg",
    createdAt: "2022-03-12T10:35:21+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "e6a9Gqs-u",
    firstName: "Maneet",
    lastName: "Sikka",
    username: "maneetsikka",
    email: "maneetsikka@gmail.com",
    password: "maneetsikka453@56",
    bio: "Sports Guy",
    website: "https://maneetsikka.netlify.app/",
    profileAvatar: "https://res.cloudinary.com/djxqg0lar/image/upload/v1688977360/Buzz-socialmedia/bpgbkq0twjsv9bykivu6.jpg",
    createdAt: "2022-01-11T10:25:07+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "f1h5Jwv-m",
    firstName: "Rajat",
    lastName: "Gupta",
    username: "rajatgupta",
    email: "rajatgupta24@gmail.com",
    password: "rajatgupta7@24",
    bio: "A Uncanny traveler",
    website: "https://rajatgupta.netlify.app/",
    profileAvatar: "https://res.cloudinary.com/djxqg0lar/image/upload/v1688978055/Buzz-socialmedia/hzjzjhwe3hs4zxhorojs.jpg",
    createdAt: "2022-01-11T10:25:07+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "l0y2Krn-5",
    firstName: "Susmit",
    lastName: "",
    username: "susmit2001",
    email: "susmitmukherjee2001@gmail.com",
    password: "jss@62",
    bio: "Frontend developer",
    website: "https://susmitmukherjee.vercel.app/",
    profileAvatar: "https://res.cloudinary.com/djxqg0lar/image/upload/v1688978342/Buzz-socialmedia/tanazkv5vjd6ry6ffnsc.jpg",
    createdAt: "2022-04-22T10:25:24+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "fi72Kea-7",
    firstName: "Sushree",
    lastName: "Sangita",
    username: "foodie",
    email: "sangita@gmail.com",
    password: "cass34@52",
    bio: "🍕 Food / Product Photographer",
    website: "https://Sushree.netlify.app/",
    profileAvatar: "https://res.cloudinary.com/djxqg0lar/image/upload/v1688979188/Buzz-socialmedia/xysudn3guxmpbfqbt6nh.jpg",
    createdAt: "2022-08-30T10:25:24+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
];