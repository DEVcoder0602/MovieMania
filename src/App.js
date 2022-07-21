import { BrowserRouter, Routes, Route} from "react-router-dom";
import Booking from "./components/Booking";
import Movies from "./components/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
