import React, { useState, useEffect } from "react";
import { HeaderMegaMenu } from "./navbar";
import { Table, Button } from "@mantine/core";
import axios from "axios";
import DisplayHeadphones from "../components/displayHeadphones";

const Headphones = () => {
  const url = "http://localhost:8000";

  const [headphones, setHeadphones] = useState("");
  const [headphoneNumber, setHeadphoneNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [twoCords, setTwoCords] = useState(true);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    getHeadphones();
  }, []);

  const handleHeadphoneNumberChange = (event) => {
    setHeadphoneNumber(event.target.value);
  };

  const handleSerialNumberChange = (event) => {
    setSerialNumber(event.target.value);
  };

  const handleTwoCordsChange = (event) => {
    setTwoCords(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = () => {
    if (headphoneNumber && serialNumber) {
      const requestData = {
        headphone_number: headphoneNumber,
        serial_number: serialNumber,
        two_cords: twoCords,
        notes: notes,
      };
  
      axios
        .post(url + "/headphones", requestData)
        .then((res) => {
          console.log(res);
          // Check if the response indicates that the laptop number already exists
          if (res.data && res.data.error === "Headphone number already exists") {
            // Display an alert to the user
            alert("Headphone number already exists. Please enter a different headphone number.");
          } else {
            // Laptop added successfully
            setHeadphoneNumber("");
            setSerialNumber("");
            setTwoCords("");
            setNotes("");
            // Reset the form or perform any other necessary actions
            window.location.reload();

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

  const getHeadphones = () => {
    let allHeadphones = [];
    axios
      .get(url + "/headphones")
      .then((res) => {
        allHeadphones = res.data;
        setHeadphones(allHeadphones);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <HeaderMegaMenu />
      <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>Headphones</h1>
      <form>
        <label htmlFor="headphone_number" style={{ fontWeight: "bold" }}>
          Headphone Number:{" "}
        </label>
        <input
          type="text"
          id="headphone_number"
          name="headphone_number"
          required
          value={headphoneNumber}
          onChange={handleHeadphoneNumberChange}
          style={{
            width: "10%",
            marginRight: "3px",
            marginBottom: "10px",
            borderRadius: "5px",
            borderWidth: "1.2px",
          }}
        />
        <label htmlFor="serial_number" style={{ fontWeight: "bold" }}>
          {" "}
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
            width: "10%",
            marginRight: "3px",
            marginBottom: "10px",
            borderRadius: "5px",
            borderWidth: "1.2px",
          }}
        />
        <br></br>
        <label htmlFor="two_cords" style={{ fontWeight: "bold" }}>
          Two Cords:{" "}
        </label>
        <input
          type="checkbox"
          id="two_cords"
          name="two_cords"
          checked={twoCords}
          onChange={handleTwoCordsChange}
          style={{
            marginRight: "3px",
            marginBottom: "10px",
            borderRadius: "5px",
            borderWidth: "1.2px",
          }}
        />
        <label htmlFor="notes" style={{ fontWeight: "bold" }}>
          {" "}
          Notes:{" "}
        </label>
        <input
          type="text"
          id="notes"
          name="notes"
          value={notes}
          onChange={handleNotesChange}
          style={{
            width: "60%",
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
          Add New Headphone
        </Button>
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
              <h2 style={{ textAlign: "center" }}>Headphone / Serial #</h2>
            </th>
            <th>
              <h2 style={{ textAlign: "center" }}>Two Cords</h2>
            </th>
            <th>
              <h2 style={{ textAlign: "center" }}>Notes</h2>
            </th>
            <th>
              <h2 style={{ textAlign: "center" }}>Edit</h2>
            </th>
          </tr>
        </thead>
        <DisplayHeadphones headphones={headphones} />
      </Table>
    </>
  );
};

export default Headphones;
