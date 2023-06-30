import { Button, Select } from "@mantine/core";
import React, { useState } from "react";
import axios from "axios";
import '../css/buttonHover.css';


const DisplayItems = (props) => {
  const url = "http://localhost:8000";


  const handleDelete = (item_name) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .delete(url + "/items/" + item_name)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleEdit = (item_name, quantity, notes) => {
    const newQuantityAmount = prompt(
      "Please enter the new quantity: ",
      quantity
    );
    if (newQuantityAmount) {
      const newNotes = prompt("Type to edit notes. Otherwise, click OK", notes);
      axios
        .put(url + "/items/" + item_name, {
          quantity: newQuantityAmount,
          notes: newNotes,
        })
        .then((res) => {
          console.log("Quantity Succesfully Updated");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const display = (props) => {
    const { items } = props;

    if (!items || items.length === 0) {
        return (
          <tbody>
            <tr>
              <td colSpan="4">
                <h1>No Items In Inventory</h1>
              </td>
            </tr>
          </tbody>
        );
      }


    console.log(items);
   
    if (items.length > 0) {
      const rows = items.map((item) => (
        <tr key={item.item_id}>
          <td>
            <h3>{item.item_name}</h3>
          </td>
          <td>
            <h3>{item.quantity}</h3>
          </td>
          <td>
            <h4 className="wrap">{item.notes}</h4>
          </td>
          <td>
            <Button
              className="edit-button"
              onClick={() => {
                handleEdit(item.item_name, item.quantity, item.notes);
              }}
            >
              Edit
            </Button>
            <Button
              className="delete-button"
              onClick={() => handleDelete(item.item_name)}
            >
              Delete
            </Button>
          </td>
        </tr>
      ));
      return (
        <>
          <tbody>{rows}</tbody>
        </>
      );
    } 
  };

  return <>{display(props)}</>;
};

export default DisplayItems;
