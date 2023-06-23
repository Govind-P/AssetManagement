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
import { useSelector } from "react-redux";


const AutomotiveForm = () => {
  const theme = useTheme();
  const { palette } = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const colors = tokens(theme.palette.mode);
  const navigate=useNavigate();
  const build = (useSelector((state) => state.user));
  const [values, setFormData] = useState({
    buildingcode:'',
    vehicleno:'',
    vehiclemodel:'',
    chassisnumber:'',
    vehiclecolor:'',
    fueltype:'',
    expense:'',
    pdate:'',
    status:'',
    invoice:'',
    image:'',
  });
  const handleSubmit = (values) => {
    values.buildingcode = build.buildingcode;
    values.status = 'Active'; 
    const reg=fetch('http://localhost:3001/addautomotive', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.status !== 201)
          throw response;
        return response.json()
      }).then(data => {
        alert("Added successfully");
        navigate("/automotive");
        setFormData({
          vehicleno:'',
          vehiclemodel:'',
          chassisnumber:'',
          vehiclecolor:'',
          fueltype:'',
          expense:'',
          pdate:'',
          invoice:'',
          image:'',
        });
    })
      .catch((error) => {
        alert("Please fill all fields");
        console.error(error);
      });
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    values.installeddate=date;
  };
  const handleChange = (values) => {
    setFormData((prevState) => ({
      ...prevState,
      [values.target.name]: values.target.value,
    }));
  };
  return (
    <Box m="20px">
      <Header title="ADD AUTOMOTIVE" />

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        //validationSchema={checkoutSchema}
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
                value={values.vehiclemodel}
                name="vehiclemodel"
               // error={!!touched.model && !!errors.model}
               // helperText={touched.model && errors.model}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Chassis Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.chassisnumber}
                name="chassisnumber"
                error={!!touched.chassisnumber && !!errors.chassisnumber}
                helperText={touched.chassisnumber && errors.chassisnumber}
                sx={{ gridColumn: "span 1" }}
            />
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Vehicle Color"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vehiclecolor}
                name="vehiclecolor"
                //error={!!touched.color && !!errors.color}
                //helperText={touched.color && errors.color}
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
                //error={!!touched.fueltype && !!errors.fueltype}
                //helperText={touched.fueltype && errors.fueltype}
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
                onChange={(value) => {setFieldValue("pdate", value.format("YYYY-MM-DD").toString(), true);
                }}
                name="pdate"
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
                  setFieldValue("invoice", acceptedFiles[0])
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
                    {!values.invoice ? (
                      <p>Upload Purchase invoice</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{values.invoice.name}</Typography>
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
                  setFieldValue("image", acceptedFiles[0])
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
                    {!values.image ? (
                      <p>Upload Automotive Image with Vehicle number visible</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{values.image.name}</Typography>
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
  fueltype: yup.string().required("required"),
  expense: yup.string().required("required"),
});
const initialValues = {
  vehicleno:'',
  vehiclemodel:'',
  chassisnumber:'',
  vehiclecolor:'',
  fueltype:'',
  expense:'',
  pdate:'',
  invoice:'',
  image:'',
};

export default AutomotiveForm;
