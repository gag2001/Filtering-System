import { useState, useEffect } from "react";
import FilterPanel from "../filterPaner";
import { Spin } from "antd";
import './index.css';

const ProductsList = ({mockData}) => {
    const [products, setProducts] = useState(mockData);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [loading,setLoading] = useState(true);
    const [filters, setFilters] = useState({
        category: "",
        brand: "",
        minPrice: 0,
        maxPrice: 500,
        rating: 0,
      });
    

      useEffect(() => {
          
        if (mockData.length > 0) {
          setProducts(mockData);  
          setFilteredProducts(mockData);  
          setLoading(false);  
        }
       
      },[mockData]);
    
      useEffect(() => {
        let updatedProducts = products;
        
        if (filters.category === "All") {
          updatedProducts = products;
        }
        else if (filters.category) {
          updatedProducts = updatedProducts.filter(
            (product) => product.category === filters.category
          );
        }
       
        if (filters.brand) {
          updatedProducts = updatedProducts.filter(
            (product) => product.brand === filters.brand
          );
        }
    
        updatedProducts = updatedProducts.filter(
          (product) =>
            product.price >= filters.minPrice && product.price <= filters.maxPrice
        );
    
        updatedProducts = updatedProducts.filter(
          (product) => product.rating >= filters.rating
        );
    
        setFilteredProducts(updatedProducts);
       
        
      }, [filters, products]);
      

      return (
        <div>
          
          <FilterPanel filters={filters} setFilters={setFilters} setLoading = {setLoading}/>
          <div className="product-card">
            { loading ? <div className="spin"><Spin size="large"/></div> : (
              filteredProducts.map((product) => (
                <div key={product.id} style={{marginRight : '70px', marginTop : '40px'}}>
                  <h2>{product.name}</h2>
                  <p>Category: {product.category}</p>
                  <p>Brand: {product.brand}</p>
                  <p>Price: ${product.price}</p>
                  <div className="rating">
                  <span>{product.rating}⭐</span>
                </div>
                  <img src={product.imageUrl} alt={product.name} width="100"/>
                </div>
              ))
            ) 
            }
          </div>
        </div>
      );
    };
    
    
;

export default ProductsList;