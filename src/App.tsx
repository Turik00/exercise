import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Welcome from "./SignupForm/Welcome";
import Expertise from "./SignupForm/Expertise";
import LastThing from "./SignupForm/LastThing";
import { Button } from "@mui/material";
import { shallowEqual, useSelector } from "react-redux";

function App() {
  let navigate = useNavigate();

  function switchPage(pageName: number) {
    navigate("/" + pageName);
  }

  const currentPage = useSelector((state: AppState) => state.currentPage, shallowEqual);

  const totalPages = useSelector((state: AppState) => state.totalPages, shallowEqual);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/1" element={<Welcome />} />
        <Route path="/2" element={<Expertise />} />
        <Route path="/3" element={<LastThing />} />
      </Routes>
      <div className="footer">
        {currentPage - 1 !== 0 && (
          <Button variant="text" onClick={() => switchPage(currentPage - 1)}>
            Back
          </Button>
        )}
        <span>
          {currentPage}/{totalPages}
        </span>
        {currentPage !== totalPages && (
          <Button variant="text" onClick={() => switchPage(currentPage + 1)}>
            Next
          </Button>
        )}
        {currentPage === totalPages && <Button variant="text">Finish</Button>}
      </div>
    </div>
  );
}

export default App;
