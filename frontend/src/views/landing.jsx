import React, { useState } from "react";
import { LandingNav } from "./navbar";
import { Card, Container, Input, Button } from "@mantine/core";
// import { hash } from "bcrypt";
import axios from "axios";
import "../css/buttonHover.css";

const Landing = () => {
  const url = "http://localhost:8000";


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    if (username && password) {
      // Check if username and password are provided
  
      try {
        // Hash the provided password
        const hashedPassword = await hashUserPassword(password);
  
        const requestData = {
          username: username,
          password: hashedPassword,
        };
  
        axios
          .post(url + "/login", requestData)
          .then((res) => {
            // Check the response from the server
            if (res.data.success) {
              // User authentication successful
              // Grant access to the website or redirect to the authenticated page
              console.log("User authenticated");
              // Add your logic to grant access to the website here
            } else {
              // User authentication failed
              console.log("Authentication failed");
              // Add your logic to handle failed authentication here
            }
          })
          .catch((err) => {
            console.log("Error in login:", err);
            // Add your logic to handle the error here
          });
      } catch (err) {
        console.log("Error in hashing password:", err);
        // Add your logic to handle the error here
      }
    }
  };

  async function hashUserPassword(password) {
    // const hashedPassword = await hash(password, 15);
    // return hashedPassword;
  }

  return (
    <>
      <LandingNav />
      <Container style={{ marginTop: "100px" }}>
        <Card
          shadow="lg"
          padding="lg"
          radius="md"
          withBorder
          className="login-card"
          // style={{ width: "80%" }}
        >
          <form>
            <h1 style={{fontSize:"40px"}}>Enter Information For Access</h1>
            <div style={{ textAlign: "left" }}>
              <label style={{ fontWeight: "bold", fontSize: "20px" }}>
                Username
              </label>
            </div>
            <Input
              placeholder="Enter Username"
              radius="md"
              size="md"
              required
              onChange={handleUsernameChange}
            />
            <br></br>
            <div style={{ textAlign: "left" }}>
              <label style={{ fontWeight: "bold", fontSize: "20px" }}>
                Password
              </label>
            </div>
            <Input
              placeholder="Enter Password"
              radius="md"
              size="md"
              required
              onChange={handlePasswordChange}
            />
            <Button
              type="submit"
              size="lg"
              className="add-button"
              style={{width:"200px", marginTop: "30px"}}
              onClick={() => handleSubmit()}
            >Submit</Button>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default Landing;
