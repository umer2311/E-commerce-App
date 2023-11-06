import React from "react";

import { Navbar } from "./compoments/Navbar";
import { Hero } from "./compoments/Hero";
import { Productname } from "./compoments/Productname";
import { Categories } from "./compoments/Categories";




function App() {
    return (
        <>
        <Navbar />
        <Hero />
        <Productname />
        <Categories />
        </>
    )
}
export default App;