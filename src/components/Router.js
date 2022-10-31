import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Success from "./Success";
export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
