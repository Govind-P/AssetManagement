
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header1 from "../../components/Header";
import { useSelector } from "react-redux";
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const titles=useSelector((state) => state.user);
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header1 title="Building Details" />
      
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
                label="Building Name"
                value={titles.buildingname}
                name="buildingname"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ gridColumn: "span 2" }} 
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Building Code"
                value={titles.buildingcode}
                InputProps={{
                  readOnly: true,
                }}
                name="buildingcode"
                sx={{ gridColumn: "span 1" }}
              />
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                value={titles.buildingtype}
                InputProps={{
                  readOnly: true,
                }}
                label="Building Type"
                name="buildingtype"
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Email"
                value={titles.email}
                InputProps={{
                  readOnly: true,
                }}
                name="email"
                sx={{ gridColumn: "span 2" }}
              />
             
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                value={titles.district}
                InputProps={{
                  readOnly: true,
                }}
                label="District"
                name="district"
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Muncipality/corporation/panchayat"
                value={titles.mpc}
                InputProps={{
                  readOnly: true,
                }}
                name="mcp"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Post Office"
                value={titles.postoffice}
                InputProps={{
                  readOnly: true,
                }}
                name="postoffice"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Pincode"
                name="pincode"
                value={titles.pincode}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Locality"
                value={titles.locality}
                InputProps={{
                  readOnly: true,
                }}
                name="locality"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="integer"
                label="Ward"
                value={titles.ward}
                InputProps={{
                  readOnly: true,
                }}
                name="ward"
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Year"
                name="year"
               // error={!!touched.year && !!errors.year}
              //  helperText={touched.year && errors.year}
                sx={{ gridColumn: "span 2" }}
              />
            
               <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="No of Blocks"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.block}
                name="block"
               // error={!!touched.year && !!errors.year}
              //  helperText={touched.year && errors.year}
                sx={{ gridColumn: "span 2" }}
              />

               <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Plinth Area"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.plinth}
                name="plinth"
               // error={!!touched.year && !!errors.year}
              //  helperText={touched.year && errors.year}
                sx={{ gridColumn: "span 2" }}
              />
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Plot Area"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.plot}
                name="plot"
               // error={!!touched.year && !!errors.year}
              //  helperText={touched.year && errors.year}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Others"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.other}
                name="other"
               // error={!!touched.year && !!errors.year}
              //  helperText={touched.year && errors.year}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Total Estimate amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                name="amount"
               // error={!!touched.year && !!errors.year}
              //  helperText={touched.year && errors.year}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
           
            <Box display="flex" justifyContent="end" mt="20px" sx={{align:"centre"}}>
              <Button type="submit" color="secondary" variant="contained">
                Submit
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

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;