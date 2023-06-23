import React from "react";
import { Button } from "@mantine/core";
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
        const newSituation = prompt(
          "Please enter the new situation: ",
          situation
        );
        if (newSituation) {
          axios
            .put(url + "/announcements/" + announcement_id, {
              situation: newSituation
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

  const display = (props) => {
    const { announcements } = props;

    if (!announcements || announcements.length === 0) {
      return (
        <tbody>
          <tr>
            <td colSpan="4">
              <h1>No Announcements</h1>
            </td>
          </tr>
        </tbody>
      );
    }
    console.log(announcements);

    if (announcements.length > 0) {
      const rows = announcements.map((announcement) => (
        <tr key={announcement.announcement_id}>
          <td>
            <h3>{announcement.topic}</h3>
          </td>
          <td>
            <h3>{announcement.situation}</h3>
          </td>
          <td>
            <h3>{announcement.completed}</h3>
          </td>
          <td>
            <Button
              variant="gradient"
              gradient={{ from: "violet", to: "teal", deg: 105 }}
              style={{ marginBottom: "2px", marginRight: "2px" }}
              onClick={() => {
                handleEdit(announcement.announcement_id, announcement.situation);
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
