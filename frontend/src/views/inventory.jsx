import React, { useEffect, useState } from "react";
import { HeaderMegaMenu } from "./navbar.jsx";
import { Button, Input, Table } from "@mantine/core";
import axios from "axios";
import DisplayItems from "../components/displayItems.jsx";

const Inventory = () => {
  const url = "http://localhost:8000";

  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");

  const getItems = () => {
    let allItems = [];
    axios
      .get(url + "/items")
      .then((res) => {
        allItems = res.data;
        setItems(allItems);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [items, setItems] = useState("");
  useEffect(() => {
    getItems();
  }, []);

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = () => {
    if (itemName && quantity) {
      // Check if required fields are not empty
      const requestData = {
        item_name: itemName,
        quantity: quantity,
        notes: notes,
      };

      axios
        .post(url + "/items", requestData)
        .then((res) => {
          console.log(res);
          // Clear input fields after successful submission
          setItemName("");
          setQuantity("");
          setNotes("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <HeaderMegaMenu />
      <h1 style={{ fontWeight: "bold" }}>Inventory</h1>
      <form>
        <div className="create-item">
          <label htmlFor="item_name" style={{ fontWeight: "bold" }}>
            Item Name:{" "}
          </label>
          <input
            type="text"
            id="item_name"
            name="item_name"
            required
            value={itemName}
            onChange={handleItemNameChange}
            style={{
              width: "40%",
              marginBottom: "10px",
              borderRadius: "5px",
              borderWidth: "1.2px",
            }}
          />
          <label htmlFor="quantity" style={{ fontWeight: "bold" }}>
            {" "}
            Quantity:{" "}
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            required
            value={quantity}
            onChange={handleQuantityChange}
            style={{ width: "10%", borderRadius: "5px", borderWidth: "1.2px" }}
          />

          <br></br>
          <label htmlFor="notes" style={{ fontWeight: "bold" }}>
            Notes:{" "}
          </label>
          <input
            type="text"
            id="notes"
            name="notes"
            value={notes}
            onChange={handleNotesChange}
            style={{
              marginTop: "10px",
              width: "80%",
              borderRadius: "5px",
              borderWidth: "1.2px",
            }}
          />
        </div>
        <Button
          type="submit"
          onClick={() => handleSubmit()}
          style={{ marginTop: "10px", marginBottom: "10px" }}
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
        >
          Add New Item
        </Button>
      </form>
      <div
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Table
          horizontalSpacing="x1"
          verticalSpacing="lg"
          fontSize="sm"
          striped
          highlightOnHover
          withBorder
          withColumnBorders
        >
          <thead>
            <tr>
              <th>
                <h2 style={{ textAlign: "center" }}>Item Name</h2>
              </th>
              <th>
                <h2 style={{ textAlign: "center" }}>Quantity</h2>
              </th>
              <th>
                <h2 style={{ textAlign: "center" }}>Notes</h2>
              </th>
              <th>
                <h2 style={{ textAlign: "center" }}>Edits</h2>
              </th>
            </tr>
          </thead>
          <DisplayItems items={items} />
        </Table>
      </div>
    </>
  );
};

export default Inventory;
