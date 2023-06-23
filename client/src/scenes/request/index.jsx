import { Box } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mockTransactions } from "../../data/mockData";
import AddIcon from "@mui/icons-material/Add";

const Request = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/request/addrequest");
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center"></Box>
      <Header title="REQUEST" />
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
            NEW REQUEST
          </Button>
        </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        colors={colors.grey[100]}
        p="15px"
      >
        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
          Notifications
        </Typography>
      </Box>
      <Box
        maxHeight="400px" 
        overflow="auto"
      >
        {mockTransactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.txId}
              </Typography>
              <Typography color={colors.grey[100]}>{transaction.user}</Typography>
            </Box>
            <Box color={colors.grey[100]}>{transaction.date}</Box>
            <Box color={colors.grey[100]}>{transaction.data}</Box>
            <Box
              backgroundColor={colors.greenAccent[500]}
              p="5px 10px"
              borderRadius="4px"
            >
              ${transaction.cost}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Request;
