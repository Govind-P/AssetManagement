import { Box, Button, TextField,useTheme,Typography,Stack} from "@mui/material";
import Item from "@mui/material/Stack";
import { Formik } from "formik";
import { tokens } from "../../theme";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
  

const LoginPage = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
        <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="10px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
              }}
            >
            <Box
            component={"span"}
            backgroundColor={colors.primary[400]}
            >
            <Typography
                variant="h2"
                fontWeight="600"
                align="center"

                sx={{ padding: "50px 30px 50px 30px" }}
            >
                Login
            </Typography>
            <Stack direction="column" spacing={2} >
            <Item alignItems={"center"}>
                <TextField sx={{ m: 1, width: '50ch' }}
                id="user" 
                variant="outlined"
                margin="normal"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                />
            </Item>
            <Item alignItems={"center"}>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            </FormControl>
            </Item>
            <Item>
                <Box display="flex" justifyContent="center" mt="20px">
                    <Button type="submit" color="secondary" variant="contained">
                      Login
                    </Button>
                </Box>
            </Item>
            </Stack>
            <Box height="250px" mt="-140px" maxWidth={600}>
            </Box>
            </Box>
            </Box>   
          
            </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup
    .string()
    .required("required"),
});
const initialValues = {
  email: "",
  password: "",
};

export default LoginPage;
