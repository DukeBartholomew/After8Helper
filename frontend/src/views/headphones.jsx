import React, { useState, useEffect } from "react";
import { HeaderMegaMenu } from "./navbar";
import { Table } from "@mantine/core";
import axios from "axios";
import DisplayHeadphones from "../components/displayHeadphones";

const Headphones = () => {
  const url = "http://localhost:8000";

  const [headphones, setHeadphones] = useState("");

  useEffect(() => {
    getHeadphones();
  }, []);

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
