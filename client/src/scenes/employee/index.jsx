import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid ,GridToolbar} from "@mui/x-data-grid";
import React, { useState, useEffect } from 'react';
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import {  Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Employee = () => {
  const build = (useSelector((state) => state.user));
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/employee?buildingcode='+build.buildingcode);
        if (response.ok) {
          const jsonData = await response.json();
          const formattedData = jsonData.map((item, index) => ({ ...item, id: index + 1 }));
          setData(formattedData);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate=useNavigate();
  const handleChange = () => {
    navigate("/employee/addemployee");
  };
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "firstname",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "employeeid",
      headerName: "EmployeeID",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "joindate",
      headerName: "Joined Date",
      flex: 1,
    },
    {
      field: "position",
      headerName: "Position",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center"></Box>
      <Header title="Employee"  />
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            position : "absolute",
            right : 20,
            top : 100,
          }}
          onClick={handleChange}
        >
          <AddIcon sx={{ mr: "10px" }} />
          ADD
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={data} columns={columns} components={{ Toolbar: GridToolbar }}/>
      </Box>
    </Box>
  );
};

export default Employee;
