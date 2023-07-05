import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "5d1b8920-c6cc-4d6a-8a0f-039d01dd4cf0",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    email: "adarshbalika@gmail.com",
    bio: "An Adarsh Balika",
    website: "https://adarshbalika.netlify.app/",
    profileAvatar:
    "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
    createdAt: "2022-06-12T10:35:21+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "5d1b8920-c6cc-4d6a-8v9y-039d01dd4cf0",
    firstName: "Raj",
    lastName: "Sharma",
    username: "rajsharma",
    password: "rajsharma123",
    email: "rajsharma@gmail.com",
    bio: "rajsharma",
    website: "https://rajsharma.app/",
    profileAvatar:
    "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
    createdAt: "2022-06-12T10:35:21+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  
  {
    _id: "s2d3Bie-8",
    firstName: "John",
    lastName: "William",
    username: "johnwilliam",
    email: "johnwilliam03@gmail.com",
    password: "john123@03",
    bio: "Senior Software Developer at Google",
    website: "https://johnwilliam.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659911/tech-social/man3_a5om95.jpg",
    createdAt: "2022-03-12T10:35:21+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "e6a9Gqs-u",
    firstName: "Lina",
    lastName: "Abott",
    username: "linaabott",
    email: "linaabott56@gmail.com",
    password: "lina453@56",
    bio: "Backend Developer at Amazon",
    website: "https://linaabott.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659986/tech-social/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter_b9hnrt.jpg",
    createdAt: "2022-01-11T10:25:07+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "f1h5Jwv-m",
    firstName: "David",
    lastName: "Kyle",
    username: "davidkyle",
    email: "davidkyle24@gmail.com",
    password: "david67@24",
    bio: "Android developer",
    website: "https://davidkyle.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659910/tech-social/photo-1566753323558-f4e0952af115_cocrd5.jpg",
    createdAt: "2022-03-12T11:25:24+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "l0y2Krn-5",
    firstName: "Julie",
    lastName: "Adams",
    username: "julieadams",
    email: "julieadams62@gmail.com",
    password: "julie93@62",
    bio: "Full-stack developer",
    website: "https://julieadams.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659986/tech-social/photo-1544005313-94ddf0286df2_qz2jqa.jpg",
    createdAt: "2022-04-22T10:25:24+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "fi72Kea-7",
    firstName: "Carl",
    lastName: "Smith",
    username: "carlsmith",
    email: "carlsmith34@gmail.com",
    password: "carl34@52",
    bio: "SDE - Frontend Developer 🧑‍💻",
    website: "https://carlsmith.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1687869079/tech-social/pexels-photo-220453_xrctn8.jpg",
    createdAt: "2022-08-30T10:25:24+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
];
