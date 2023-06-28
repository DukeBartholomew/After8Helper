import React, { useState, useEffect } from "react";
import { HeaderMegaMenu } from "./navbar";
import { Table, Button } from "@mantine/core";
import axios from "axios";
import DisplayAnnouncements from "../components/displayAnnouncements";

const Announcements = () => {
  const url = "http://localhost:8000";

  const [announcements, setAnnouncements] = useState("");
  const [topic, setTopic] = useState("");
  const [urgency, setUrgency] = useState("");
  const [situation, setSituation] = useState("");

  useEffect(() => {
    getAnnouncements();
  }, []);

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleUrgencyChange = (event) => {
    setUrgency(event.target.value);
  };

  const handleSituationChange = (event) => {
    setSituation(event.target.value);
  };

  const handleSubmit = () => {
    if (topic && situation) {
      const requestData = {
        topic: topic,
        situation: situation,
        end_result: " ",
        urgency: urgency,
      };

      axios
        .post(url + "/announcements", requestData)
        .then((res) => {
          console.log(res);
          // announcement added successfully
          setSituation("");
          setUrgency("");
          setTopic("");
          // Reset the form or perform any other necessary actions
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Required fields are missing, show an alert to the user
      alert("Please fill in all the required fields.");
    }
  };

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
      <form>
        <label style={{ fontSize: "25px", color: "red" }}>*</label>
        <label htmlFor="topic" style={{ fontWeight: "bold" }}>
          Topic:{" "}
        </label>
        <input
          type="text"
          id="topic"
          name="topic"
          required
          value={topic}
          onChange={handleTopicChange}
          style={{
            width: "20%",
            marginRight: "3px",
            marginBottom: "10px",
            borderRadius: "5px",
            borderWidth: "1.2px",
          }}
        />

        <label htmlFor="urgency" style={{ fontWeight: "bold" }}>
          Urgency:{" "}
        </label>
        <select
          id="urgency"
          name="urgency"
          value={urgency}
          onChange={handleUrgencyChange}
          style={{
            width: "20%",
            marginRight: "3px",
            marginBottom: "10px",
            borderRadius: "5px",
            borderWidth: "1.2px",
          }}
        >
          <option value="Regular">Regular</option>
          <option value="Mild">Mild Urgency</option>
          <option value="Urgent">Urgent</option>
        </select>
        <br></br>

        <label style={{ fontSize: "25px", color: "red" }}>*</label>
        <label htmlFor="situation" style={{ fontWeight: "bold" }}>
          Situation:{" "}
        </label>
        <input
          type="text"
          id="situation"
          name="situation"
          required
          value={situation}
          onChange={handleSituationChange}
          style={{
            width: "70%",
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
        New Announcement
      </Button>

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
          withBorder
          withColumnBorders
          style={{ borderWidth: "1.5px", borderColor: "darkGray" }}
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
                <h2 style={{ textAlign: "center" }}>Done</h2>
              </th>
              <th>
                {" "}
                <h2 style={{ textAlign: "center" }}>Urgency</h2>
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
