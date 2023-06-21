import React, { useEffect, useState } from "react";
import { HeaderMegaMenu } from "./navbar";
import { Button, Container, Table } from "@mantine/core";
import DisplayLaptops from "../components/displayLaptops";
import axios from "axios";

const Laptops = () => {
  const url = "http://localhost:8000";

  const [laptopNumber, setLaptopNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [model, setModel] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  const [laptops, setLaptops] = useState("");
  useEffect(() => {
    getLaptops();
  }, []);

  const handleLaptopNumberChange = (event) => {
    setLaptopNumber(event.target.value);
  };

  const handleSerialNumberChange = (event) => {
    setSerialNumber(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const getLaptops = () => {
    let allLaptops = [];
    axios
      .get(url + "/laptops")
      .then((res) => {
        allLaptops = res.data;
        setLaptops(allLaptops);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    if (laptopNumber && serialNumber && model) {
      const requestData = {
        laptop_number: laptopNumber,
        serial_number: serialNumber,
        model: model,
        status: status,
        notes: notes,
      };
  
      axios
        .post(url + "/laptops", requestData)
        .then((res) => {
          console.log(res);
          // Check if the response indicates that the laptop number already exists
          if (res.data && res.data.error === "Laptop number already exists") {
            // Display an alert to the user
            alert("Laptop number already exists. Please enter a different laptop number.");
          } else {
            // Laptop added successfully
            setLaptopNumber("");
            setSerialNumber("");
            setStatus("");
            setModel("");
            setNotes("");
            window.location.reload();
            // Reset the form or perform any other necessary actions
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Required fields are missing, show an alert to the user
      alert("Please fill in all the required fields.");
    }
  };
  

  return (
    <>
      <HeaderMegaMenu />
      <h1 style={{ fontWeight: "bold", fontSize:"40px" }}>Laptops</h1>
      <Container>
        <form>
          <label htmlFor="laptop_number" style={{ fontWeight: "bold" }}>
            Laptop Number:{" "}
          </label>
          <input
            type="text"
            id="laptop_number"
            name="laptop_number"
            required
            value={laptopNumber}
            onChange={handleLaptopNumberChange}
            style={{
              width: "10%",
              marginRight: "3px",
              marginBottom: "10px",
              borderRadius: "5px",
              borderWidth: "1.2px",
            }}
          />
          <label htmlFor="serial_number" style={{ fontWeight: "bold" }}>
            Serial Number:{" "}
          </label>
          <input
            type="text"
            id="serial_number"
            name="serial_number"
            required
            value={serialNumber}
            onChange={handleSerialNumberChange}
            style={{
              width: "20%",
              marginRight: "3px",
              marginBottom: "10px",
              borderRadius: "5px",
              borderWidth: "1.2px",
            }}
          />
          <br></br>
          <label htmlFor="model" style={{ fontWeight: "bold" }}>
            Model:{" "}
          </label>
          <input
            type="text"
            id="model"
            name="model"
            required
            value={model}
            onChange={handleModelChange}
            style={{
              width: "20%",
              marginRight: "3px",
              marginBottom: "10px",
              borderRadius: "5px",
              borderWidth: "1.2px",
            }}
          />

          <label htmlFor="status" style={{ fontWeight: "bold" }}>
            Status:{" "}
          </label>
          <input
            type="text"
            id="status"
            name="status"
            value={status}
            onChange={handleStatusChange}
            style={{
              width: "30%",
              marginRight: "3px",
              marginBottom: "10px",
              borderRadius: "5px",
              borderWidth: "1.2px",
            }}
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
              width: "80%",
              marginRight: "3px",
              marginBottom: "10px",
              borderRadius: "5px",
              borderWidth: "1.2px",
            }}
          />
        </form>
        <Button
          type="submit"
          onClick={() => handleSubmit()}
          style={{ marginTop: "10px", marginBottom: "20px" }}
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
        >
          Add New Laptop
        </Button>
      </Container>
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
                <h2 style={{ textAlign: "center" }}>Laptop / Serial #</h2>
              </th>
              <th>
                <h2 style={{ textAlign: "center" }}>Model</h2>
              </th>
              <th>
                <h2 style={{ textAlign: "center" }}>Status</h2>
              </th>
              <th>
                <h2 style={{ textAlign: "center" }}>Notes</h2>
              </th>
              <th>
                <h2 style={{ textAlign: "center" }}>Edit</h2>
              </th>
            </tr>
          </thead>
          <DisplayLaptops laptops={laptops} />
        </Table>
      </div>
    </>
  );
};

export default Laptops;
