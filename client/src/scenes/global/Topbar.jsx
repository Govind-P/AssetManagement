import * as React from 'react';
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, IconButton, TextField, Typography, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { setLogin } from "../../state";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import KeyIcon from '@mui/icons-material/Key';
import { useSelector } from "react-redux";

const Topbar = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const titles=useSelector((state) => state.user);
  

  const handleLogout = () => {
    dispatch(setLogin({ user: null, token: null }));
    navigate("/"); 
  };



  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex" 
        borderRadius="3px"
      >
        <Typography variant="h2" color={colors.redAccent[700]} fontWeight="bold" component="div" >
            {titles}
        </Typography>
        {/*<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>*/}
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <KeyIcon />
        </IconButton>
        <IconButton onClick={()=>{
          dispatch(setLogin({ user: null, token: null }));
          navigate("/"); 
        }}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
