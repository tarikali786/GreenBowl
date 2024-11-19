import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, HomeLayout } from "./Component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
