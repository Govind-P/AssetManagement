
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header1 from "../../components/Header";
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

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
                onBlur={handleBlur}
                onChange={handleChange}
                value="College Of Engineering Trivandrum"
                //value={values.firstName}
                name="buildingname"
               // error={!!touched.buildingname && !!errors.buildingname}
               // helperText={touched.buildingname && errors.buildingname}
                sx={{ gridColumn: "span 4" }} 
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Building Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value="1234"
                //value={values.lastName}
                name="buildingcode"
                sx={{ gridColumn: "span 2" }}
              />
                <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Building Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value="College"
                //value={values.lastName}
                name="buildingtype"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value="cet@gmail.com"
                //value={values.buildingtype}
                name="email"
                helperText={touched.email }
                sx={{ gridColumn: "span 4" }}
              />
             
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="District"
                onBlur={handleBlur}
                onChange={handleChange}
                value="Trivandrum"
               // value={values.district}
                name="district"
               // error={!!touched.district && !!errors.district}
             //   helperText={touched.district && errors.district}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Muncipality/corporation/panchayat"
                onBlur={handleBlur}
                onChange={handleChange}
                value="Sreekaryam"
               // value={values.district}
                name="mcp"
              //  helperText={touched.mcp && errors.mcp}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="PostOffice"
                onBlur={handleBlur}
                onChange={handleChange}
                value="Sreekaryam"
               // value={values.postoffice}
                name="postoffice"
                //error={!!touched.postoffice && !!errors.postoffice}
              //  helperText={touched.postoffice && errors.postoffice}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Pincode"
                onBlur={handleBlur}
                onChange={handleChange}
                value="670621"
                //value={values.pincode}
                name="pincode"
               // error={!!touched.pincode && !!errors.pincode}
              //  helperText={touched.pincode && errors.pincode}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Locality"
                onBlur={handleBlur}
                onChange={handleChange}
                value="Chavadumukku"
                //value={values.locality}
                name="locality"
               // error={!!touched.locality && !!errors.locality}
              //  helperText={touched.locality && errors.locality}
                sx={{ gridColumn: "span 4" }}
              />
                 <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Year"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.year}
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