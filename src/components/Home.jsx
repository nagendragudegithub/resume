import React, { useEffect, useState } from "react";
import { Typography, Grid, Button } from "@mui/material";
import photo from "./images/chinna.png";
import "../styles/homeStyles.scss";
import Education from "./Education";
import Experience from "./Experience";
import WordFlicker from "./WordFlicker";
import WorkIcon from "@mui/icons-material/Work";

const Home = () => {
  return (
    <div style={{ margin: "30px" }} id="home">
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={6} xs={4}>
          <Grid className="content">
            <span>
              Hi I'm <span className="name">Nagendra Gude</span>
            </span>

            <span className="word" style={{ display: "grid" }}>
              <span style={{ color: "yellow" }}>
                a&nbsp;{" "}
                <span style={{ color: "white" }}>
                  <WordFlicker />
                </span>
              </span>
            </span>
          </Grid>
          <Typography
            variant="h6"
            color="white"
            className="sub"
            style={{ width: "100%" }}
          >
            I am a skilled and passionate web designer with experience in
            creating visually appealing and user-friendly websites.
          </Typography>
          <Button className="hire">
            Hire Me
            <WorkIcon color="warning" sx={{ fontSize: 25 }} />
          </Button>
        </Grid>

        <Grid item md={6} xs={8}>
          <img src={photo} alt="photo" className="bio-img" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
