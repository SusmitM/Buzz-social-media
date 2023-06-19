import "./Home.module.css"
import {Feed} from "../../components/Feed/Feed";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Rightbar } from "../../components/Rightbar/Rightbar";

export const Home = () => {
  return (
   <>
   
  
   {Sidebar()}
   {Feed()}
   {Rightbar()}
   </>
  )
}
