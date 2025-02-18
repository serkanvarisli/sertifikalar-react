import React from "react";
import Grid from "@mui/material/Grid";
import { Alert } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const Container = () => {
  return (
    <div >
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6} style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "10px"

        }}>
          <ul>
            <li><a href="https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=jK1hKEwzkB"
              target="_blank">BTK Akademi-B1 English</a></li>
            <li><a href="https://www.udemy.com/certificate/UC-f505e917-d891-4bfc-b86c-70203977d463/"
              target="_blank">
              React JS : Uygulamalı React JS -Redux Eğitimi (2024) </a></li>
            <li><a href="https://certificates.techcareer.net/tr/verify/79268378935982?ref=email"
              target="_blank">Techcareer-ASP.Net Core MVC Bootcamp</a></li>
            <li><a href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODE2Y2lkNDcxOTNxaWQxNTFlbmQ="
              target="_blank">Türkcell Geleceği Yazanlar-React 101</a></li>
            <li><a href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODE2Y2lkNDcxOTRxaWQxNTJlbmQ="
              target="_blank">Türkcell Geleceği Yazanlar-React 201</a></li>
            <li><a href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODE2Y2lkNDcxOTVxaWQxNTNlbmQ="
              target="_blank">Türkcell Geleceği Yazanlar-React 301</a></li>
            <li><a href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODE2Y2lkNDcxOTZxaWQxNTRlbmQ="
              target="_blank">Türkcell Geleceği Yazanlar-React 401</a></li>

          </ul>
        </Grid>
        <Grid item xs={12} sm={6} style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "10px"
        }}>

          <ul>
            <li><a href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODE2Y2lkNDgzOTlxaWQxNjdlbmQ="
              target="_blank">Türkcell Geleceği Yazanlar-ASP.Net Core MVC 101</a></li>
            <li><a href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODE2Y2lkNDg0MDBxaWQxNjhlbmQ=="
              target="_blank">Türkcell Geleceği Yazanlar-ASP.Net Core MVC 201</a></li>
            <li><a href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODE2Y2lkMzYwNDBxaWQxMjVlbmQ="
              target="_blank">Türkcell Geleceği Yazanlar-C# ile Algoritma ve Programlama 101</a></li>
            <li><a href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODE2Y2lkMzYwNDFxaWQxMjZlbmQ="
              target="_blank">Türkcell Geleceği Yazanlar-C# ile Algoritma ve Programlama 201</a></li>
            <li><a href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODE2Y2lkNTcxcWlkMTExZW5k"
              target="_blank">Türkcell Geleceği Yazanlar-Javascript</a></li>
            <li><a href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODE2Y2lkNTczcWlkMTE0ZW5k"
              target="_blank">Türkcell Geleceği Yazanlar-Node.js 401</a></li>
            <li><a href="https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODE2Y2lkNDg0MDBxaWQxNjhlbmQ="
              target="_blank">Türkcell Geleceği Yazanlar-ASP.NET</a></li>
          </ul>

        </Grid>
        <Grid item xs={12} sm={12} style={{ marginTop: "10px", textAlign: "center", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Alert severity="info">Sertifikayı görmek için sertifikaya tıklayınız</Alert>
        </Grid>
        <Grid item xs={12} sm={12} style={{ marginTop: "20px", textAlign: "center", fontSize: "20px", gap: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a href="https://www.linkedin.com/in/serkan-varisli/" target="_blank"><LinkedInIcon style={{ marginRight: "10px" }} /> Linkedin</a> <br />
          <a href="https://github.com/serkanvarisli" target="_blank"><GitHubIcon style={{ marginRight: "10px" }} /> Github</a>
          <br></br>
          <a href="serkanvarisli.netlify.app" target="_blank"><LanguageIcon style={{ marginRight: "10px" }} /> Portfolyo</a>
        </Grid>
      </Grid>


    </div>
  );
};

export default Container;
