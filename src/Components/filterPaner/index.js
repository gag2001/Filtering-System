import React from 'react';
import { Select, Space, Form, Input } from 'antd';
import './index.css';

const FilterPanel = ({ filters, setFilters , setLoading }) => {
  const handleCategoryChange = (value) => { 
    setTimeout(()=> setLoading(true));
    setFilters({ ...filters, category: value })
    setTimeout(()=> setLoading(false),1000);
  };
  const handleBrandChange = (value) => {
    setTimeout(()=> setLoading(true));
    setFilters({ ...filters, brand: value });
    setTimeout(()=> setLoading(false),1000);
};
  const handleMinPriceChange = (e) => setFilters({ ...filters, minPrice:  parseFloat(e.target.value)});
  const handleMaxPriceChange = (e) => setFilters({ ...filters, maxPrice:  parseFloat(e.target.value)});
  const handleRatingChange = (e) => setFilters({ ...filters, rating:  parseFloat(e.target.value) });

  return (
    <div className="filter-panel">
      <h3>Find Your Product</h3>
      
       <div className='main-content'>
      <Space wrap>
        
        <label className="filter-label"><span className="filter-label-text" style={{paddingRight: '5px' , marginLeft : '30px'}}>Category</span>
            <Select
            defaultValue="All"
            style={{
                width: 100,
                marginRight : '15px'
            }}
            className="filter-select"
            onChange={handleCategoryChange}
            options={[
                {
                value: 'All',
                label: 'All',
                },
                {
                value: 'Electronics',
                label: 'Electronics',
                },
                {
                value: 'Footwear',
                label: 'Footwear',
                },
                {
                value: 'Clothing',
                label: 'Clothing',
                },
            ]}
          />
          </label>
          
          <label className="filter-label"><span className="filter-label-text" style={{paddingRight: '6px', color : '#263b8e'}}>Brand</span>
          <Select
            defaultValue="All"
            style={{
                width: 100,
                marginRight : '15px'
            }}
            className="filter-select"
            onChange={handleBrandChange}
            options={[
                {
                value: 'Brand A',
                label: 'Brand A',
                },
                {
                value: 'Brand B',
                
                },
                {
                value: 'Brand C',
                label: 'Brand C',
                },
                {
                value: 'Brand D',
                label: 'Brand D',
                },
            ]}
          />
          </label>

          
        <Form layout="inline">
        <Form.Item label="Min Price" name="MinPrice" className="filter-form-item" style={{paddingRight: '15px'}}>
          <Input type="number" placeholder="Min Price" onChange={handleMinPriceChange} style={{width: '100px'}}/>
        </Form.Item>

        <Form.Item label="Max Price" name="MaxPrice"  className="filter-form-item" style={{paddingRight: '15px'}}>
          <Input type="number" placeholder="Max Price" onChange={handleMaxPriceChange} style={{width: '100px'}}/>
        </Form.Item>

        <Form.Item label="Rating" name="Rating"  className="filter-form-item" style={{paddingRight: '15px'}}>
          <Input type="number" min={0} max={5} step={0.5} onChange={handleRatingChange}/>
        </Form.Item>
        </Form>
      </Space>
      </div>
    </div>
  );
};

export default FilterPanel;
