import { Button } from "@mantine/core";
import React, { useState } from "react";
import axios from "axios";

const DisplayItems = (props) => {
    const url = "http://localhost:8000";

    const handleDelete = (item_name) => {
        
        if(window.confirm("Are you sure you want to delete this item?")) {
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

  const display = (props) => {
    const { items } = props;
    console.log(items);
    if (items.length > 0) {
      const sortedItems = items.sort((a, b) => a.item_name.localeCompare(b.item_name));
      const rows = sortedItems.map((item) => (
        <tr key={item.item_id}>
          <td>
            <h3>{item.item_name}</h3>
          </td>
          <td>
            <h3>{item.quantity}</h3>
          </td>
          <td>
            <h3>{item.notes}</h3>
          </td>
          <td>
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
              style={{marginBottom:"2px"}}
            >
              Edit
            </Button>
            <Button variant="gradient" gradient={{ from: "orange", to: "red" }} onClick={() => handleDelete(item.item_name)}>
              Delete
            </Button>
          </td>
        </tr>
      ));
      return <tbody>{rows}</tbody>;
    } else {
      return (
        <tbody>
          <tr>
            <td colSpan="3">
              <h1>No Items In Inventory</h1>
            </td>
          </tr>
        </tbody>
      );
    }
  };

  return <>{display(props)}</>;
};

export default DisplayItems;
