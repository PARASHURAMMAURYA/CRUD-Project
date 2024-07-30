import { Typography, Box, Grid, Button, TextField } from "@mui/material";
import { useState ,useEffect,useCallback} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const { id } = useParams();
  const [student,setStudent] = useState({
    stuname:'',
    email:''
  });

  const getStudent = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/students/${id}`);
      setStudent(response.data);

    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getStudent();
  }, [getStudent]);



  function onTextChange(event) {
    setStudent({ ...student, [event.target.name]: event.target.value });
  }


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/students/${id}`,
        student
      );
      console.log(response.data);
       
    } catch (error) {
      console.log("error on Home");
    }
    
  }





  return (
    <>
      <Box textAlign={"center"} p={1} mb={2} style={{ background: "green" }}>
        <Typography variant="h4">Edit Student</Typography>
      </Box>

      <form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="id"
              name="id"
              variant="outlined"
              required
              fullWidth
              id="id"
              label="ID"
              disabled
              value={student.id}
             
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="stuname"
              name="stuname"
              variant="outlined"
              required
              fullWidth
              id="stuname"
              label="Name"
              value={student.stuname}
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
              value={student.email}
              onChange={onTextChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="outlined" color="primary" fullWidth onClick={handleSubmit}>
              Update
            </Button>
          </Grid>

          <Grid item xs={12}>
          <Link to={`/`}>
            <Button variant="outlined" color="primary" fullWidth>
              Back to Home
            </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
export default Edit;
