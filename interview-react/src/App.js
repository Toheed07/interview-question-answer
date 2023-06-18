import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Student from "./components/student-details";

export default function App() {
  const data = {
    name: "Toheed",
    Tel: 9541670911,
  };
  return (
    <>
      <Routes> // It was with capital R
      <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student details={data} />}>
          
        </Route>
      </Routes>
    
      
    </>
  );
}
