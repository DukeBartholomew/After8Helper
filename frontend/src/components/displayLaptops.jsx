import { Button } from "@mantine/core";
import React from "react";
import axios from "axios";

const DisplayLaptops = (props) => {
  const url = "http://localhost:8000";

  const handleEdit = (laptop_number, status, notes) => {
    const newStatus = prompt("Please enter the new status: ", status);
    const newNotes = prompt("Type to edit notes. Otherwise, click OK", notes);
    if (newStatus || newNotes) {
      axios
        .put(url + "/laptops/" + laptop_number, {
          status: newStatus,
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

  const handleDelete = (laptop_number) => {
    if (window.confirm("Are you sure you want to delete this laptop?")) {
      axios
        .delete(url + "/laptops/" + laptop_number)
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
    const { laptops } = props;
    console.log(laptops);
    if (laptops.length > 0) {
        const sortedLaptops = laptops.sort((a, b) => {
            const laptopNumberA = parseInt(a.laptop_number);
            const laptopNumberB = parseInt(b.laptop_number);
            return laptopNumberA - laptopNumberB;
          });

      const rows = sortedLaptops.map((laptop) => (
        <tr key={laptop.laptop_number}>
          <td>
            <h3>
              {laptop.laptop_number} / {laptop.serial_number}
            </h3>
          </td>
          <td>
            <h3>{laptop.model}</h3>
          </td>
          <td>
            <h3>{laptop.status}</h3>
          </td>
          <td>
            <h3>{laptop.notes}</h3>
          </td>
          <td>
            <Button
              variant="gradient"
              gradient={{ from: "violet", to: "teal", deg: 105 }}
              style={{ marginBottom: "2px", marginRight: "2px" }}
              onClick={() =>
                handleEdit(laptop.laptop_number, laptop.status, laptop.notes)
              }
            >
              Edit
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              onClick={() => handleDelete(laptop.laptop_number)}
            >
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
            <td colSpan="5">
              <h1>No Laptops In Inventory</h1>
            </td>
          </tr>
        </tbody>
      );
    }
  };
  return <>{display(props)}</>;
};

export default DisplayLaptops;
