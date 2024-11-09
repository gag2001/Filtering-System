import { useState,useEffect } from "react";
import ProductsList from "./Components/Content";
import mockData from "./Backend-Side/ProductsData";

const App = () => {
 return (
  <ProductsList mockData={mockData}/>
 )
};

export default App;
