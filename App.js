

import React, { useState } from "react";
import  Navbar  from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";



const App =()=> {
 const[progress,setProgress]=useState(0)
 

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
                  color="#61dafb"
                  progress={progress}
                 
                />

          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={setProgress} key="General"  pageSize={10} country="us" category="General" />}
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News setProgress={setProgress} key="Entertainment" pageSize={10} country="us" category="Entertainment" />
              }
            />
            <Route
              exact
              path="/Science"
              element={<News setProgress={setProgress}key="Science" pageSize={10} country="us" category="Science" />}
            />
            <Route
              exact
              path="/Sports"
              element={<News setProgress={setProgress} key="Sports" pageSize={10} country="us" category="Sports" />}
            />
            <Route
              exact
              path="/Health"
              element={<News setProgress={setProgress} key="Health" pageSize={10} country="us" category="Health" />}
            />
            <Route
              exact
              path="/Technology"
              element={
                <News setProgress={setProgress} key="Technology"  pageSize={10} country="us" category="Technology" />
              }
            />
            <Route
              exact
              path="/Business"
              element={<News setProgress={setProgress}key="Business"  pageSize={10} country="us" category="Business" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
export default App
