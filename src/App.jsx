import { useState } from "react";
import CurrentWeather from "./components/organisms/CurrentWeather.organisms";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="lg:px-8 lg:py-6 px-4 py-6 bg-blue--primary lg:h-screen">
      <div className='px-4 py-4 h-full backdrop-blur-xl bg-transparent/10 rounded-md'>
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
