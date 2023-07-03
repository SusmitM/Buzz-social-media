import './App.css';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AllRoutes } from './routes/AllRoutes';
import { Loader } from './components/Loader/Loader';

function App() {
 

  
  return (
    <div className="App">  
     <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> 
    
      <AllRoutes/>    
    </div>
  );
}

export default App;
