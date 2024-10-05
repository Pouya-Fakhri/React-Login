import Login from "./components/Login";
import Svg from "./components/Svg";

function App() {
  return (
    <div className=" w-screen h-screen bg-[#355B3E] flex justify-center items-center ">
      <div className=" w-8/12 h-4/6 bg-white  rounded-3xl flex justify-between overflow-hidden ">
        <div className="flex justify-center items-center h-full w-1/2 " >
          <Login />
        </div>

        <div className="imgContainer w-1/2 h-full bg-[#F5DBC4] flex justify-center items-center ">
         <Svg />
        </div>
      </div>
    </div>
  );
}

export default App;
