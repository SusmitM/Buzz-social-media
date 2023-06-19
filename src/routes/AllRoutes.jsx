import { Routes, Route } from "react-router-dom";
import { SignIn,SignUp,Profile,Home,Explore,Liked,Bookmark,PostDetails,MockMan } from "../pages";
import { PrivateRoute } from "../components/privateRoute";

export const AllRoutes = () => {
  return(
    <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path="/" element={ <PrivateRoute><Home/></PrivateRoute>} />
        <Route path="/explore" element={ <PrivateRoute><Explore/></PrivateRoute>} />
        <Route path="/liked" element={ <PrivateRoute><Liked/></PrivateRoute>} />
        <Route path="/bookmark" element={ <PrivateRoute><Bookmark/></PrivateRoute>} />
        <Route path="/postDetails" element={ <PrivateRoute><PostDetails/></PrivateRoute>} />
        <Route path="/mockman" element={<MockMan/>} />

  </Routes>

  )
};
