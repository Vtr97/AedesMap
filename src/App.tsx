import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";

const App: React.FC = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <MainRoutes />
            </BrowserRouter>
        </div>
    );
};
export default App;
