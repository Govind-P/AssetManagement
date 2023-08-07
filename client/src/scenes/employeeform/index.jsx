import { Box, Button, TextField,useTheme,Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers";
import React,{ useState} from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSelector } from "react-redux";
import dayjs from 'dayjs';
const EmployeeForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate=useNavigate();
  const { palette } = useTheme();

  const build = (useSelector((state) => state.user));
  const [values, setFormData] = useState({
    profilepass:'',
    buildingcode:'',
    firstname:'',
    lastname:'',
    employeeid:'',
    dob:'',
    age:'',
    email:'',
    phone:'',
    address:'',
    joindate:'',
    position:'',
    idproof:'',
    photo:'',
  });
  const handleSubmit = (values) => {
    values.buildingcode = build.buildingcode;
    values.status = 'Active'; 
    const reg=fetch('http://localhost:3001/addemployee', {
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
        navigate("/employee");
        setFormData({
            profilepass:'',
            buildingcode:'',
            firstname:'',
            lastname:'',
            employeeid:'',
            dob:'',
            age:'',
            email:'',
            phone:'',
            address:'',
            joindate:'',
            position:'',
            idproof:'',
            photo:'',
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
      <Header title="NEW EMPLOYEE" subtitle="Create a New Employee Profile" />

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
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstname}
                name="firstname"
                //error={!!touched.firstName && !!errors.firstName}
                //helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastname}
                name="lastname"
                //error={!!touched.lastName && !!errors.lastName}
                //helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Employee ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.employeeid}
                name="employeeid"
                //error={!!touched.dob && !!errors.dob}
                //helperText={touched.dob && errors.dob}
                sx={{ gridColumn: "span 1" }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs} dayjs={dayjs}>
              <DatePicker
                label="DOB(DD/MM/YYYY)"
                value={values.dob}
                onChange={(value) => {setFieldValue("dob", value.format("YYYY-MM-DD").toString(), true);
                }}
                name="dob"
                
              />
              </LocalizationProvider>
            
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                name="age"
                //error={!!touched.age && !!errors.age}
                //helperText={touched.age && errors.age}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                //error={!!touched.address1 && !!errors.address1}
                //helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                label="Profile Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.profilepass}
                name="profilepass"
                //error={!!touched.profilepassword && !!errors.profilepassword}
                //helperText={touched.profilepassword && errors.profilepassword}
                sx={{ gridColumn: "span 2" }}
              />
              {/*<TextField
                fullWidth
                variant="outlined"
                type="password"
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpassword}
                name="cpassword"
                //error={!!touched.cpassword && !!errors.cpassword}
                //helperText={touched.cpassword && errors.cpassword}
                sx={{ gridColumn: "span 1" }}
              />*/}
              <LocalizationProvider dateAdapter={AdapterDayjs} dayjs={dayjs}>
              <DatePicker
                label="Joining Date"
                value={selectedDate}
                onChange={(value) => {setFieldValue("joindate", value.format("YYYY-MM-DD").toString(), true);
                }}
                name="joindate"
              />
              </LocalizationProvider>
            
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Position"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.position}
                name="position"
                error={!!touched.position && !!errors.position}
                helperText={touched.position && errors.position}
                sx={{ gridColumn: "span 1" }}
              />
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
                  setFieldValue("photo", acceptedFiles[0])
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
                    {!values.photo ? (
                      <p>Add Employee Photo</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{values.photo.name}</Typography>
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
                acceptedFiles=".jpg,.jpeg,.png,.pdf"
                multiple={false}
                onDrop={(acceptedFiles) =>
                  setFieldValue("idproof", acceptedFiles[0])
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
                    {!values.idproof ? (
                      <p>Upload ID Proof</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{values.idproof.name}</Typography>
                        <EditOutlinedIcon />
                      </FlexBetween>
                    )}
                  </Box>
                )}
              </Dropzone>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                ADD EMPLOYEE
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const emailveri=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  age: yup.string().required("required"),
  eid: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  joindate: yup.string().required("required"),
  position: yup.string().required("required"),
  profilepass: yup.string().required("required"),
  photo: yup.string().required("required"),
  //cpassword: yup.string().required("required"),
  idproof: yup.string().required("required"),
  //salary: yup.string().required("required"),
  dob: yup.string().required("required"),
  
});
const initialValues = {
  profilepass:"",
  buildingcode:"",
  firstname:"",
  lastname:"",
  employeeid:"",
  dob:"",
  age:"",
  email:"",
  phone:"",
  address:"",
  joindate:"",
  position:"",
  idproof:"",
  photo:"",
};

export default EmployeeForm;
