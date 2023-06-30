import React from "react";
import { LandingNav } from "./navbar";
import { Card, Container, Input, Button } from "@mantine/core";
import "../css/buttonHover.css";

const Landing = () => {
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
            <h1>Enter Information For Access</h1>
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
            />
            <Button
              type="submit"
              size="lg"
              className="add-button"
              style={{width:"200px", marginTop: "30px"}}
            //   onClick={() => handleSubmit()}
            >Submit</Button>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default Landing;
