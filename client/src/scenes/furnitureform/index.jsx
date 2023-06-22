import { Box, Button, TextField,useTheme,Typography } from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import FormControlLabel from '@mui/material/FormControlLabel';
import Header from "../../components/Header";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


const type = [
  {
    value: 'table',
    label: 'Table',
  },
  {
    value: 'chair',
    label: 'Chair',
  },
  {
    value: 'dusk',
    label: 'Dusk',
  },
  {
    value: 'bench',
    label: 'Bench',
  },
];
const madeof = [
  {
    value: 'wood',
    label: 'Wood',
  },
  {
    value: 'plastic',
    label: 'Plastic',
  },
  {
    value: 'metal',
    label: 'Metal',
  },
  {
    value: 'other',
    label: 'Other',
  },
];


const FurnitureForm = () => {
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
    navigate("/furniture");
  };

  return (
    <Box m="20px">
      <Header title="ADD FURNITURES" />

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
                variant="filled"
                type="text"
                label="Furniture Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fcode}
                name="fcode"
                error={!!touched.fcode && !!errors.fcode}
                helperText={touched.fcode && errors.fcode}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                id="filled-select-currency"
                select
                label="Select"
                defaultValue="table"
                value={values.ftype}
                name="ftype"
                helperText="Please select furniture type"
                variant="filled"
                sx={{ gridColumn: "span 2" }}
              >
                {type.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="filled-select-currency"
                select
                label="Select"
                defaultValue=""
                value={values.madeof}
                name="madeof"
                helperText="Please select furniture material"
                variant="outlined"
                sx={{ gridColumn: "span 2" }}
              >
                {madeof.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))} 
              </TextField>             
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
                      <p>Upload Purchase invoice</p>
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
            <FormControlLabel control={<Switch defaultChecked color="secondary"/>}  label="Active or Not" />
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
  fcode: yup.string().required("required"),
  //ftype: yup.string().required("required"),
  //madeof: yup.string().required("required"),
  idate: yup.string().required("required"),
  expense: yup.string().required("required"),
});
const initialValues = {
  fcode: "",
  ftype: "",
  madeof: "",
  idate: "",
  expense: "",
  picture:""
};

export default FurnitureForm;
