import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import { auth } from "../components/Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Grid from "@mui/material/Grid";

function Cover() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault(); // Prevent the form from automatically submitting

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle sign-up success
        const user = userCredential.user;
        // You can use 'user' for further actions, like sending a welcome email or adding to your database
        console.log("Signed up successfully:", user);
        // Optional: Redirect the user or show a success message
      })
      .catch((error) => {
        // Handle sign-up errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up:", errorCode, errorMessage);
        // Optional: Show an error message to the user
      });
  };

  return (
    <DashboardLayout>
      <MDBox mt={{ xs: 20, lg: 18 }} px={1} width="calc(100% - 2rem)" mx="auto">
        <Grid container justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="success"
                mx={2}
                mt={-3}
                p={3}
                mb={1}
                textAlign="center"
              >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign Up
                </MDTypography>
                <MDTypography display="block" variant="button" color="white" my={1}>
                  Enter your email and password to register
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form" onSubmit={handleSignUp}>
                  <MDBox mb={2}>
                    <MDInput
                      type="email"
                      label="Email"
                      variant="standard"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      type="password"
                      label="Password"
                      variant="standard"
                      fullWidth
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </MDBox>
                  <MDBox display="flex" alignItems="center" ml={-1}>
                    <Checkbox />
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;I agree to the&nbsp;
                    </MDTypography>
                    <MDTypography
                      component="a"
                      href="#"
                      variant="button"
                      fontWeight="bold"
                      color="info"
                      textGradient
                    >
                      Terms and Conditions
                    </MDTypography>
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth type="submit">
                      Register
                    </MDButton>
                  </MDBox>
                  <MDBox mt={3} mb={1} textAlign="center">
                    <MDTypography variant="button" color="text">
                      Already have an account?{" "}
                      <MDTypography
                        component={Link}
                        to="/authentication/sign-in"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign In
                      </MDTypography>
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Cover;
