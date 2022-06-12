import React from "react";

import { Box, Grid, Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{ flexGrow: 1, mt: "5rem" }}
      >
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  padding: "5rem",
                  fontSize: "0.9rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                <Box>
                
                  <p>Emergency Dental Care</p>
                  <p>Check up</p>
                  <p>Treatment of Personal Dieases</p>
                  <p>Tooth Extraction</p>
                  <p>Check up</p>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  padding: "2rem",
                  fontSize: "0.9rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                <Box>
                    <Typography variant="h5" sx={{color:"#68F8FC"}}>Services</Typography>
                  
                  <p>Emergency Dental Care</p>
                  <p>Check up</p>
                  <p>Treatment of Personal Dieases</p>
                  <p>Tooth Extraction</p>
                  <p>Check up</p>
                  <p>Check up</p>
                  <p>Check up</p>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  padding: "2rem",
                  fontSize: "0.9rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                <Box>
                <Typography variant="h5" sx={{color:"#68F8FC"}}>Oral Health</Typography>

                  <p>Emergency Dental Care</p>
                  <p>Check up</p>
                  <p>Treatment of Personal Dieases</p>
                  <p>Check up</p>
                  <p>Tooth Extraction</p>
                  <p>Check up</p>
                  <p>Check up</p>
                  <p>Check up</p>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  padding: "2rem",
                  fontSize: "0.9rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                <Box>
                <Typography variant="h5" sx={{color:"#68F8FC"}}>Our Addresses</Typography>

                  
                  <p>New York-10000 hardson Yards</p>
                  <FacebookIcon
                    sx={{
                      border: "1px solid aqua",
                      borderRadius: "1rem",
                      color: "aqua",
                      padding: "0.2rem",
                      marginRight: "1rem",
                    }}
                  />
                  <TwitterIcon
                    sx={{
                      border: "1px solid aqua",
                      borderRadius: "1rem",
                      color: "aqua",
                      padding: "0.2rem",
                      marginRight: "1rem",
                    }}
                  />
                  <GoogleIcon
                    sx={{
                      border: "1px solid aqua",
                      borderRadius: "1rem",
                      color: "aqua",
                      padding: "0.2rem",
                    }}
                  />
                  <p>Call Now</p>
                  <Button variant="contained" className="button">
                    +181818871
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                md={12}
                sx={{ textAlign: "center", mb: "2rem" }}
              >
                CopyRight {new Date().getFullYear()} All Right
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;