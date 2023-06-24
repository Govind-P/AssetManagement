
import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header1 from "../../components/Header";
import { useSelector } from "react-redux";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { mockblockdata } from "../../data/mockData";
import { Typography } from "@mui/material";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const titles = useSelector((state) => state.user);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const build = useSelector((state) => state.user);
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const handleChange = () => {
    navigate("/automotive/addautomotive");
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            </Box>
            <Box marginTop="40px" >
              <Header1 title="Additional Details" />

              <Box
                display="grid"
                marginTop="0px"
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
                  label="Year"
                  name="year"
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
            </Box>

            <Box >
              
              <div>
                <Button sx={{ marginTop: "30px",backgroundColor: colors.blueAccent[700], }} 
                variant="outlined" onClick={handleClickOpen}>
                  Add Block Details
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Additional Block Details</DialogTitle>
                  <DialogContent>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={checkoutSchema}
                      onSubmit={(values) => {
                        console.log(values);
                        handleClose();
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                          >
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Block Name"
                              //type="bname"
                              fullWidth
                              variant="standard"
                              name="bname"
                              value={values.bname}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.bname && errors.bname}
                              helperText={touched.bname && errors.bname}
                            />
                               <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Block Id"
                              //type=""
                              fullWidth
                              variant="standard"
                              name="bid"
                              value={values.bid}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.bid && errors.bid}
                              helperText={touched.bid && errors.bid}
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="No of floors"
                              //type=""
                              fullWidth
                              variant="standard"
                              name="numfloor"
                              value={values.umfloor}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.umfloor && errors.umfloor}
                              helperText={touched.umfloor && errors.umfloor}
                            />
                          
                             <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Plinth Area"
                              //type=""
                              fullWidth
                              variant="standard"
                              name="parea"
                              value={values.parea}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.parea && errors.parea}
                              helperText={touched.parea && errors.parea}
                            />
                          </box>
                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Add</Button>
                          </DialogActions>
                        </form>
                      )}
                    </Formik>
                  </DialogContent>
                </Dialog>
              </div>
            </Box>
          </form>
        )}
      </Formik>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        colors={colors.grey[100]}
        p="15px"
      >
        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
          Block Details
        </Typography>
      </Box>
      <Box maxHeight="200px" overflow="auto">
        {mockblockdata.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr 0.25fr"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="10px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.txId}
              </Typography>
              <Typography color={colors.grey[100]}>
                {transaction.bname}
              </Typography>
            </Box>
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.ixId}
              </Typography>
              <Typography color={colors.grey[100]}>
                {transaction.idb}
              </Typography>
            </Box>
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.fxId}
              </Typography>
              <Typography color={colors.grey[100]}>
                {transaction.numfloor}
              </Typography>
            </Box>
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.pxId}
              </Typography>
              <Typography color={colors.grey[100]}>
                {transaction.parea}
              </Typography>
            </Box>
            {/* <Box color={colors.grey[100]}>{transaction.numfloor}</Box>
            <Box color={colors.grey[100]}>{transaction.parea}</Box> */}
            {/* <Box
              backgroundColor={colors.greenAccent[500]}
              p="5px 10px"
              borderRadius="4px"
            >
              ${transaction.cost}
            </Box> */}
          </Box>
        ))}
      </Box>
      <Box
              display="flex"
              justifyContent="end"
              sx={{ marginBottom: "200px" }}
              mt="20px"
             // sx={{ align: "centre" }}
            >
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
              </Box>
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
