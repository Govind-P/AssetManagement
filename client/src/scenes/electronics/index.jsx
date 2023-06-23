import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataAutomotive } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import {  Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
const   Electronic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate=useNavigate();
  const handleChange = () => {
    navigate("/electronics/addelectronics");
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.01 },
    { field: "dcode", headerName: "Device Code",flex:1 },
    {
      field: "dtype",
      headerName: "Device Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "brandname",
      headerName: "Brand Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "modelname",
      headerName: "Model Name",
      headerAlign: "left",
      align: "left",
      flex:1,
    },
    {
      field: "installeddate",
      headerName: "Installed Date",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      headerAlign: "left",
      align: "left",
      flex:1,
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "left",
      align: "left",
      flex:1,
    },
  ];

  return (
    <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center"></Box>
      <Header
        title="ELECTRONIC"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataAutomotive}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Electronic;
