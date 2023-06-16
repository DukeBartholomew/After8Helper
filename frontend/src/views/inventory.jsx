import React, { useEffect, useState } from 'react'
import { HeaderMegaMenu } from './navbar.jsx'
import { Table } from '@mantine/core'
import axios from 'axios';
import DisplayItems from '../components/displayItems.jsx';


const Inventory = () => {
  const url = "http://localhost:8000";

  const getItems = () => {
    let allItems = [];
    axios.get(url + '/items')
    .then((res) => {
      allItems = res.data;
      setItems(allItems);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  


  const [items, setItems] = useState('');
  useEffect(() => {
    getItems();
  }, []);

  return (
    
    <>
    <HeaderMegaMenu /><h1 style={{fontWeight:"bold"}}>Inventory</h1>
    <div style={{ marginLeft: '10px', marginRight: '10px', display: 'flex', justifyContent: 'center' }}>
    <Table horizontalSpacing="x1" verticalSpacing="lg" fontSize="sm" striped highlightOnHover withBorder withColumnBorders>
      <thead>
        <tr>
        <th><h2 style={{textAlign:"center"}}>Item Name</h2></th>
        <th><h2 style={{textAlign:"center"}}>Quantity</h2></th>
        <th><h2 style={{textAlign:"center"}}>Notes</h2></th>
        <th><h2 style={{textAlign:"center"}}>Edits</h2></th>
        </tr>
      </thead>
      <DisplayItems items={items}/>
    </Table>
    </div>
    </>
    
    

  )

  
}

export default Inventory