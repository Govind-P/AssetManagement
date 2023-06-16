import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataElectronic } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Button, IconButton, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Link } from "react-router-dom";
import MyForm from "../electronicform";
const Electronic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.01 },
    { field: "type", headerName: "Type", flex: 1 },
    {
      field: "brand",
      headerName: "Brand Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "model",
      headerName: "Model Name",
      flex: 1,
    },
    {
      field: "installeddate",
      headerName: "Installed Date",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 1,
    },
    {
      field: "status",
      headerName: "status",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      ></Box>
      <Header
        title="ELECTRONICS"
        subtitle="List of Electronics for Future Reference"
      />
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            position: "absolute",
            right: 20,
            top: 150,
          }}
        >
          <Link to="MyForm">
          
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          ADD
          </Link>
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
          rows={mockDataElectronic}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Electronic;
