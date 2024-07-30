import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
 

function List() {
  
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudent();
  },[students]);

  async function getAllStudent() {
    try {
      const response = await axios.get("http://localhost:3000/students");
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  }



  async function handleDelete(id) {

    try {
      const response = await axios.delete(
        `http://localhost:3000/students/${id}` 
      );
      console.log(response.data)
      var newstudent = students.filter((item) => {
        return item.id !== id;
       })
       setStudents(newstudent);
    } catch (error) {
      console.log("error on Home");
    }
    
  }

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
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map((student,i) => (
              <TableRow key={i}>
                <TableCell align="center">{student.id}</TableCell>
                <TableCell align="center">{student.stuname}</TableCell>
                <TableCell align="center">{student.email}</TableCell>
                <TableCell align="center">
                  <Tooltip title="View">
                    <IconButton>
                      <Link to={`/view/${student.id}`} >
                        <VisibilityIcon color="primary" />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton>
                      <Link to={`/edit/${student.id}`}>
                        <EditIcon />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={()=>handleDelete(student.id)}>
                      <Link  >
                        <DeleteIcon />
                      </Link>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default List;
