import { Typography, Box, Grid, Button, TextField } from "@mui/material";
import List from "./students/List";

import { useRef, useState } from "react";
import axios from "axios";
 
function Home() {

  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });

  function onTextChange(event) {
    setStudent({ ...student, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/students",
        student
      );
      console.log(response.data);
      setStudent({
        stuname: "",
        email: "",
      });
    } catch (error) {
      console.log("error on Home");
    }
    Ref.current.reset();
  }

 

const Ref =  useRef();

  return (
    <>
      <Box style={{ background: "#673AB7", padding: "10px" }}>
        <Typography>React CRUD with Api Call</Typography>
      </Box>

      <Grid container spacing="10" style={{ justifyContent: "center" }}>
        <Grid item md={6} xs={12}>
          <Box
            textAlign={"center"}
            p={1}
            mb={2}
            style={{ background: "green" }}
          >
            <Typography variant="h4">Add Student</Typography>
          </Box>

          <form noValidate onSubmit={(event) => handleSubmit(event)} ref={Ref}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  onChange={onTextChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  onChange={onTextChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  fullWidth
                  id="button"
                  color="primary"
                  onClick={(event) => handleSubmit(event)}
                  type="submit"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
}
export default Home;
