import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "3XHvLF4kC",
    content: "Felling bad for computer 🤣🤣🤣",
    mediaURL:
      "https://res.cloudinary.com/djxqg0lar/image/upload/v1688974829/Buzz-socialmedia/cxktyg3pod19msaoybkn.jpg",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9u5",
        username: "carlsmith",
        text: "Happy Birthday! Enjoy your Day!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "MemeLord",
    createdAt: "2023-06-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLF2kC",
    content: "My E-commerce project",
    mediaURL:
      "https://res.cloudinary.com/djxqg0lar/video/upload/v1688761971/Buzz-socialmedia/smy52vq3lm4vv7tqfllh.mp4",
    likes: {
      likeCount: 35,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9u5",
        username: "rajatgupta",
        text: "Great Work!!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "susmit2001",
    createdAt: "2023-06-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLF4pC",
    content: "I just hope Christopher Nolan releases Oppenheimer before Vladimir Putin does.",
    mediaURL:
      "",
    likes: {
      likeCount: 57,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPNyu5",
        username: "susmit2001",
        text: "🤣🤣🤣🤣🤣🤣",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "MemeLord",
    createdAt: "2023-07-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "8f87b286-7c73-4f83-8901-5e154eed21a3",
    content:"Humans-1 AI-0 ☠️☠️ ",
    mediaURL:"https://res.cloudinary.com/djxqg0lar/video/upload/v1688974348/Buzz-socialmedia/hxwftt9tasnx6538b954.mp4",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPNyp5",
        username: "susmit2001",
        text: "🤣🤣🤣🤣🤣🤣",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "MemeLord",
    createdAt: "2023-03-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "4XHvLF2kC",
    content: "Made this MERN-based image-to-text conversion app that uses Google Vision to transcribe text, has authentication management, listen feature, and user history.",
    mediaURL:
      "https://res.cloudinary.com/djxqg0lar/video/upload/v1688978899/Buzz-socialmedia/mquqvo7amfeebitwvtxe.mp4",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "E97iOPN9u7",
        username: "maneetsikka",
        text: "Great Work!!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "susmit2001",
    createdAt: "2023-07-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "8f87b286-7c73-4f83-2709-5e154eed21a3",
    content: "Table is set 😍😍",
    mediaURL:
      "https://res.cloudinary.com/djxqg0lar/image/upload/v1688977467/Buzz-socialmedia/ba3sxjngu3ije1wbvvgb.jpg",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ZO7iOPN9n8",
        username: "MemeLord",
        text: "Awesome🔥🔥",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "foodie",
    createdAt: "2023-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "MTYtVhecCj",
    content:
      "Today's sunset was something else !!!",
    mediaURL: "https://res.cloudinary.com/djxqg0lar/image/upload/v1688977911/Buzz-socialmedia/pdbz1ygonqd1tjqqg2g1.jpg",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rajatgupta",
    createdAt: "2023-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "b311b7oc-d150-4462-800a-7369938ea3a8",
    content: "Lord Rinku 👑👑👑",
    mediaURL: "https://res.cloudinary.com/djxqg0lar/video/upload/v1688980257/Buzz-socialmedia/y7yztohbbdf1phoadlky.mp4",
    likes: {
      likeCount: 30,
      likedBy: [],
      dislikedBy: []
    },
    comments: [
      {
        _id: "ZO7iOPN5u8",
        username: "adarshbalika",
        text: "Lord Rinku!!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "maneetsikka",
    createdAt: "2023-06-10T10:55:06+05:30",
    updatedAt: formatDate(),

  },
  {
    _id: "b310b9bc-d150-4462-800a-7369938ea3a8",
    content: "So true 🤣🤣🤣",
    mediaURL: "https://res.cloudinary.com/djxqg0lar/video/upload/v1688974973/Buzz-socialmedia/lg1axhgvqgp1ja5czynd.mp4",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: []
    },
    comments: [
      {
        _id: "ZO7iOPN9u8",
        username: "adarshbalika",
        text: "Relatable :))",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "MemeLord",
    createdAt: "2023-01-10T10:55:06+05:30",
    updatedAt: formatDate(),

  },
  {
    _id: "b310b9oc-d150-4462-800a-7369938ea3a8",
    content: "A feast for the senses: Flavors captured in every bite.",
    mediaURL: "https://res.cloudinary.com/djxqg0lar/image/upload/v1688977628/Buzz-socialmedia/zke374vcnqxnqrj8iizk.jpg",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: []
    },
    comments: [
      {
        _id: "ZO7iOPN9u8",
        username: "adarshbalika",
        text: "Looks really tempting❤️",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "foodie",
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),

  },
  {
    _id: "3XHvLF2oC",
    content: "Monday Motivation",
    mediaURL:
      "https://res.cloudinary.com/djxqg0lar/image/upload/v1688983144/Buzz-socialmedia/uqws2vq64icxwbim7fsc.jpg",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "TO7iOPN9u5",
        username: "rajatgupta",
        text: "Great Thought!!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshbalika",
    createdAt: "2023-02-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLF2oD",
    content: "",
    mediaURL:
      "https://res.cloudinary.com/djxqg0lar/image/upload/v1688983591/Buzz-socialmedia/qgf4bjirxlcbymt7kbnl.jpg",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "TO7iOPN9u5",
        username: "rajatgupta",
        text: "🤣🤣🤣",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshbalika",
    createdAt: "2023-05-28T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  
 
];
