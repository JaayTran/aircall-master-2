import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import ActivityList from "./screens/ActivityList.jsx";
import ActivityDetails from "./components/ActivityDetails.jsx";
import useCallData from "./hooks/useCallData.js";

const App = () => {
  const { state, setState } = useCallData();
  return (
    <div className="main-container container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ActivityList state={state} setState={setState} />}
        />
        <Route
          path="/archived"
          element={
            <ActivityList
              state={state}
              setState={setState}
              filter={"archived"}
            />
          }
        />
        <Route
          path="/details/:id"
          element={<ActivityDetails state={state} />}
        />
      </Routes>
    </div>
  );
};

export default App;
