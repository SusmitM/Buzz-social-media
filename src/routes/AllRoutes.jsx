import { Routes, Route } from "react-router-dom";
import { SignIn,SignUp,Profile,Home,Explore,Liked,Bookmark,PostDetails,MockMan } from "../pages";

export const AllRoutes = () => {
  return(
    <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/liked" element={<Liked/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/bookmark" element={<Bookmark/>} />
        <Route path="/postDetails" element={<PostDetails/>} />
        <Route path="/mockman" element={<MockMan/>} />

  </Routes>

  )
};
