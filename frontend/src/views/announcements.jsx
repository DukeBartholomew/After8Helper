import React, { useState, useEffect } from "react";
import { HeaderMegaMenu } from "./navbar";
import { Table } from "@mantine/core";
import axios from "axios";
import DisplayAnnouncements from "../components/displayAnnouncements";

const Announcements = () => {
  const url = "http://localhost:8000";

  const [announcements, setAnnouncements] = useState("");
  useEffect(() => {
    getAnnouncements();
  }, []);

  const getAnnouncements = () => {
    let allAnnouncements = [];
    axios
      .get(url + "/announcements")
      .then((res) => {
        allAnnouncements = res.data;
        setAnnouncements(allAnnouncements);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <HeaderMegaMenu />
      <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>Announcements</h1>
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
                {" "}
                <h2 style={{ textAlign: "center" }}>Topic</h2>
              </th>
              <th>
                {" "}
                <h2 style={{ textAlign: "center" }}>Situation</h2>
              </th>
              <th>
                {" "}
                <h2 style={{ textAlign: "center" }}>Completed</h2>
              </th>
              <th>
                {" "}
                <h2 style={{ textAlign: "center" }}>Edit</h2>
              </th>
            </tr>
          </thead>
          <DisplayAnnouncements announcements={announcements} />
        </Table>
      </div>
    </>
  );
};

export default Announcements;
