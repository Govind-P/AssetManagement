import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataAutomotive } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import {  Button, IconButton, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
const Automotive = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.01 },
    { field: "vehicleno", headerName: "Vehicle No",flex:1 },
    {
      field: "vehiclemodel",
      headerName: "Vehicle Model",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "colour",
      headerName: "Colour",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Vehiclestatus",
      headerName: "Vehicle Status",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header
        title="AUTOMOTIVE"
        subtitle="List of Vehicles for Future Reference"
      />
      <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
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

export default Automotive;
