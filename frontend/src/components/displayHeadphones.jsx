import React from "react";
import { Button } from "@mantine/core";

const DisplayHeadphones = (props) => {
  const url = "http://localhost:8000";

  const display = (props) => {
    const { headphones } = props;
    console.log(headphones);
    if (headphones.length > 0) {
      const sortedHeadphones = headphones.sort((a, b) => {
        const headphoneNumberA = parseInt(a.headphone_number);
        const headphoneNumberB = parseInt(b.headphone_number);
        return headphoneNumberA - headphoneNumberB;
      });

      const rows = sortedHeadphones.map((headphone) => (
        <tr key={headphone.headphone_number}>
          <td>
            <h3>
              {headphone.headphone_number} / {headphone.serial_number}
            </h3>
          </td>
          <td>
            <input type="checkbox" checked={headphone.two_cords} />{" "}
          </td>
          <td>
            <h3>{headphone.notes}</h3>
          </td>
          <td>
            <Button
              variant="gradient"
              gradient={{ from: "violet", to: "teal", deg: 105 }}
              style={{ marginBottom: "2px", marginRight: "2px" }}
            >
              Edit
            </Button>
            <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
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
            <td colSpan="4">
              <h1>No Headphones In Inventory</h1>
            </td>
          </tr>
        </tbody>
      );
    }
  };

  return <>{display(props)}</>;
};

export default DisplayHeadphones;
