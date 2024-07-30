import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




function View( ) {
  const { id } = useParams();
  const [student, setStudent] = useState([]);

  const getStudent = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/students/${id}`);
      setStudent(response.data);
      console.log("response.data", response.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getStudent();
  }, [getStudent]);
console.log(student.id);

 
  return (
    <>
      <Box
        textAlign={"center"}
        p={1}
        style={{ background: "yellow", marginleft: "5px" }}
      >
        <Typography variant="h4">Student List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "616161" }}>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell align="center">{student.id}</TableCell>
              <TableCell align="center">{student.stuname}</TableCell>
              <TableCell align="center">{student.email}  </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box margin="10px">
      <Link to={`/`}>
        <Button variant="outlined" fullWidth color="primary">
          Back To Home
        </Button>
        </Link>
      </Box>
    </>
  );
}
export default View;
