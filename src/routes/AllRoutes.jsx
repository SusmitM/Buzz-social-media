import { Routes, Route } from "react-router-dom";
// import { SignIn,SignUp,Profile,Home,Explore,Liked,Bookmark,PostDetails,MockMan } from "../pages";
import { PrivateRoute } from "../components/privateRoute";
import { Layout } from "../components/Layout/Layout";
import { lazy } from "react";
import { Suspense } from "react";
import { Loader } from "../components/Loader/Loader";
const SignIn = lazy(() => import("../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Home = lazy(() => import("../pages/Home/Home"));
const Explore = lazy(() => import("../pages/Explore/Explore"));
const Liked = lazy(() => import("../pages/Liked/Liked"));
const Bookmark = lazy(() => import("../pages/Bookmark/Bookmark"));
const PostDetails = lazy(() => import("../pages/PostDetails/PostDetails"));
const MockMan = lazy(() => import("../pages/Mockman/MockMan"));


export const AllRoutes = () => {
  return(
    <Suspense fallback={<Loader/>}>
    <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile/:userId" element={<PrivateRoute><Layout><Profile/></Layout></PrivateRoute>}/>
        <Route path="/" element={ <PrivateRoute><Layout><Home/></Layout></PrivateRoute>} />
        <Route path="/explore" element={ <PrivateRoute><Layout><Explore/></Layout></PrivateRoute>} />
        <Route path="/liked" element={ <PrivateRoute><Layout><Liked/></Layout></PrivateRoute>} />
        <Route path="/bookmarks" element={ <PrivateRoute><Layout><Bookmark/></Layout></PrivateRoute>} />
        <Route path="/postDetails/:postId" element={ <PrivateRoute><Layout><PostDetails/></Layout></PrivateRoute>} />
        <Route path="/mockman" element={<MockMan/>} />

  </Routes>
  </Suspense>

  )
};
