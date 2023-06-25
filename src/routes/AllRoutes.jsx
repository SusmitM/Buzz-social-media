import { Routes, Route } from "react-router-dom";
import { SignIn,SignUp,Profile,Home,Explore,Liked,Bookmark,PostDetails,MockMan } from "../pages";
import { PrivateRoute } from "../components/privateRoute";
import { Layout } from "../components/Layout/Layout";

export const AllRoutes = () => {
  return(
    <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<PrivateRoute><Layout><Profile/></Layout></PrivateRoute>}/>
        <Route path="/" element={ <PrivateRoute><Layout><Home/></Layout></PrivateRoute>} />
        <Route path="/explore" element={ <PrivateRoute><Layout><Explore/></Layout></PrivateRoute>} />
        <Route path="/liked" element={ <PrivateRoute><Layout><Liked/></Layout></PrivateRoute>} />
        <Route path="/bookmarks" element={ <PrivateRoute><Layout><Bookmark/></Layout></PrivateRoute>} />
        <Route path="/postDetails" element={ <PrivateRoute><Layout><PostDetails/></Layout></PrivateRoute>} />
        <Route path="/mockman" element={<MockMan/>} />

  </Routes>

  )
};
