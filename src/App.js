import "./App.css";
import StarWars from "./components/StarWars";
import { LoadingProvider } from "./context/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <LoadingProvider>
        <ToastContainer />
        <StarWars />
      </LoadingProvider>
    </div>
  );
};

export default App;
