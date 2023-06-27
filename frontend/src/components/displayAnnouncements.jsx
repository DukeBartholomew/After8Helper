import React from "react";
import { Button, Select } from "@mantine/core";
import axios from "axios";

const DisplayAnnouncements = (props) => {
  const url = "http://localhost:8000";

  const handleDelete = (announcement_id) => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      axios
        .delete(url + "/announcements/" + announcement_id)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleEdit = (announcement_id, situation) => {
    const newSituation = prompt("Please enter the new situation: ", situation);
    if (newSituation) {
      axios
        .put(url + "/announcements/" + announcement_id, {
          situation: newSituation,
        })
        .then((res) => {
          console.log("Situation Succesfully Updated");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleCheckboxChange = (event, announcement) => {
    const updatedAnnouncement = {
      ...announcement,
      completed: event.target.checked,
    };

    axios
      .put(
        url + "/announcements/completed/" + announcement.announcement_id,
        updatedAnnouncement
      )
      .then((res) => {
        console.log("Checkbox Successfully Updated");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRowClassName = (announcement) => {
    if (announcement && announcement.urgency) {
      const urgency = announcement.urgency.trim();

      if (urgency.toLowerCase() === "mild") {
        return "yellow-row";
      } else if (urgency.toLowerCase() === "urgent") {
        return "red-row";
      }
    }

    return "";
  };

  const handleSelectChange = (event, announcement) => {
    const updatedAnnouncement = {
      ...announcement,
      urgency: event.target.value,
    };

    axios
      .put(
        url + "/announcements/urgency/" + announcement.announcement_id,
        updatedAnnouncement
      )
      .then((res) => {
        console.log("Select Successfully Updated");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const display = (props) => {
    const { announcements } = props;

    if (!announcements || announcements.length === 0) {
      return (
        <tbody>
          <tr>
            <td colSpan="5">
              <h1>No Announcements</h1>
            </td>
          </tr>
        </tbody>
      );
    }
    console.log(announcements);

    const sortedAnnouncements = announcements.sort((a, b) => {
      const topicA = a.topic.toLowerCase();
      const topicB = b.topic.toLowerCase();
      if (topicA < topicB) return -1;
      if (topicA > topicB) return 1;
      return 0;
    });

    if (announcements.length > 0) {
      const rows = sortedAnnouncements.map((announcement) => (
        <tr
          key={announcement.announcement_id}
          style={
            announcement.urgency === "Mild"
              ? { backgroundColor: "rgb(243, 243, 190)" }
              : announcement.urgency === "Urgent"
              ? { backgroundColor: "rgb(227, 178, 178)" }
              : {}
          }
        >
          <td style={{ backgroundColor: 'inherit' }}>
            <h3>{announcement.topic}</h3>
          </td>
          <td style={{ backgroundColor: 'inherit' }}>
            <h3>{announcement.situation}</h3>
          </td>
          <td style={{ backgroundColor: 'inherit' }}>
            <input
              type="checkbox"
              checked={announcement.completed}
              onChange={(event) => handleCheckboxChange(event, announcement)}
            />{" "}
          </td>
          <td style={{ backgroundColor: 'inherit' }}>
            <select
              value={announcement.urgency}
              onChange={(event) => handleSelectChange(event, announcement)}
            >
              <option style={{textAlign:"center"}} value="Regular">Regular</option>
              <option style={{textAlign:"center"}} value="Mild">Mild</option>
              <option style={{textAlign:"center"}} value="Urgent">Urgent</option>
            </select>
          </td>
          <td>
            <Button
              variant="gradient"
              gradient={{ from: "violet", to: "teal", deg: 105 }}
              style={{ marginBottom: "2px", marginRight: "2px" }}
              onClick={() => {
                handleEdit(
                  announcement.announcement_id,
                  announcement.situation
                );
              }}
            >
              Edit
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              onClick={() => handleDelete(announcement.announcement_id)}
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

export default DisplayAnnouncements;
