import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlNzIyMTMxNi1jZmRhLTQzYzgtOTYyOC02MWNiYWYwOTM4YjAiLCJ1c2VybmFtZSI6ImFkYXJzaGJhbGlrYSJ9.GVWcRSuEqHidUZT9HGLQTDqnSA1NCpU1XR63kDCf3Vs"