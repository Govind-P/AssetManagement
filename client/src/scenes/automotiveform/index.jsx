import { Box, Button, TextField,useTheme,Typography } from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import FormControlLabel from '@mui/material/FormControlLabel';
import Header from "../../components/Header";
import Switch from '@mui/material/Switch';
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React,{ useState} from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';


const AutomotiveForm = () => {
  const theme = useTheme();
  const { palette } = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const colors = tokens(theme.palette.mode);
  const navigate=useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (values) => {
    navigate("/automotive");
  };
 
  return (
    <Box m="20px">
      <Header title="ADD AUTOMOTIVE" />

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          setFieldValue,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Vehicle No"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vehicleno}
                name="vehicleno"
                error={!!touched.vehicleno && !!errors.vehicleno}
                helperText={touched.vehicleno && errors.vehicleno}
                sx={{ gridColumn: "span 1" }}
            />
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Vehicle Model"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.model}
                name="model"
                error={!!touched.model && !!errors.model}
                helperText={touched.model && errors.model}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Chassis Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cno}
                name="cno"
                error={!!touched.cno && !!errors.cno}
                helperText={touched.cno && errors.cno}
                sx={{ gridColumn: "span 1" }}
            />
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Vehicle Color"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.color}
                name="color"
                error={!!touched.color && !!errors.color}
                helperText={touched.color && errors.color}
                sx={{ gridColumn: "span 1" }}
            />
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Fuel Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fueltype}
                name="fueltype"
                error={!!touched.fueltype && !!errors.fueltype}
                helperText={touched.fueltype && errors.fueltype}
                sx={{ gridColumn: "span 1" }}
            />
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Expense"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.expense}
                name="expense"
                error={!!touched.expense && !!errors.expense}
                helperText={touched.expense && errors.expense}
                sx={{ gridColumn: "span 1" }}
            />
         <LocalizationProvider dateAdapter={AdapterDayjs} dayjs={dayjs}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={handleDateChange}
              />
              </LocalizationProvider>
            
            </Box>
            <Box
              gridColumn="span 4"
              border={`1px solid ${palette.neutral.any}`}
              borderRadius="5px"
              p="1rem"
            >
              <Dropzone
                acceptedFiles=".jpg,.jpeg,.png"
                multiple={false}
                onDrop={(acceptedFiles) =>
                  setFieldValue("bill", acceptedFiles[0])
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <Box
                    {...getRootProps()}
                    border={`2px dashed ${palette.secondary.main}`}
                    p="1rem"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <input {...getInputProps()} />
                    {!values.bill ? (
                      <p>Upload Purchase invoice</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{values.bill.name}</Typography>
                        <EditOutlinedIcon />
                      </FlexBetween>
                    )}
                  </Box>
                )}
              </Dropzone>
            </Box>
            <Box
              gridColumn="span 4"
              border={`1px solid ${palette.neutral.any}`}
              borderRadius="5px"
              p="1rem"
            >
              <Dropzone
                acceptedFiles=".jpg,.jpeg,.png,.pdf,.doc"
                multiple={false}
                onDrop={(acceptedFiles) =>
                  setFieldValue("picture", acceptedFiles[0])
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <Box
                    {...getRootProps()}
                    border={`2px dashed ${palette.secondary.main}`}
                    p="1rem"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <input {...getInputProps()} />
                    {!values.picture ? (
                      <p>Upload Automotive Image with Vehicle number visible</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{values.picture.name}</Typography>
                        <EditOutlinedIcon />
                      </FlexBetween>
                    )}
                  </Box>
                )}
              </Dropzone>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
            
              <Button type="submit" color="secondary" variant="contained">
                ADD
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  vehicleno: yup.string().required("required"),
  model: yup.string().required("required"),
  cno: yup.string().required("required"),
  fueltype: yup.string().required("required"),
  color: yup.string().required("required"),
  idate: yup.string().required("required"),
  expense: yup.string().required("required"),
});
const initialValues = {
  vehicleno: "",
  model:"",
  fueltype: "",
  cno:"",
  color: "",
  idate: "",
  status:"",
  expense: "",
};

export default AutomotiveForm;
