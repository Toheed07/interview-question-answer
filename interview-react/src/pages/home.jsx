import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  const hanndleDisplay = () => {
    navigate("/student");
  };
  return (
    <div>
    <h1>Hello</h1>
      <button onClick={hanndleDisplay}>Display</button>
    </div>
  );
}
