import { Box, Button, TextField, useTheme, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React, { useState } from "react";

const categoryOptions = [
  {
    value: "electronic",
    label: "Electronic",
    textFieldLabel: "Device Number",
  },
  {
    value: "furniture",
    label: "Furniture",
    textFieldLabel: "Furniture Code",
  },
  {
    value: "automotive",
    label: "Automotive",
    textFieldLabel: "Vehicle Number",
  },
  {
    value: "building",
    label: "Building",
    textFieldLabel: "Building Code",
  },
];
const itemOptions = {
  electronic: ["Laptop", "Fan", "AC", "Others"],
  furniture: ["Chair", "Table", "Bench", "Dusk", "Others"],
  automotive: ["Car", "Bike", "Bus", "Jeep", "Others"],
  building: ["House", "Office", "Store"],
};

const RequestForm = () => {
  const theme = useTheme();
  const { palette } = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleSubmit = (values) => {
    navigate("/request");
  };

  return (
    <Box m="20px">
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
                id="filled-select-category"
                select
                label="Category"
                defaultValue=""
                value={values.category}
                name="category"
                helperText="Please select a category"
                variant="outlined"
                sx={{ gridColumn: "span 2" }}
                onChange={(e) => {
                  handleChange(e);
                  setSelectedCategory(e.target.value);
                  setSelectedType(""); // Reset the selected type when changing the category
                }}
              >
                {categoryOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {selectedCategory !== "building" && (
                <TextField
                  id="filled-select-currency"
                  select
                  label="Item"
                  defaultValue=""
                  value={values.madeof}
                  name="madeof"
                  helperText="Please select an item"
                  variant="outlined"
                  sx={{ gridColumn: "span 2" }}
                  onChange={handleChange}
                >
                  {itemOptions[selectedCategory]?.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )}
              {selectedCategory !== "building" && selectedCategory && (
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label={
                    categoryOptions.find(
                      (option) => option.value === selectedCategory
                    ).textFieldLabel
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.code}
                  name="code"
                  error={!!touched.code && !!errors.code}
                  helperText={touched.code && errors.code}
                  sx={{ gridColumn: "span 2" }}
                />
              )}

              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Description in breif"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 1" }}
              />

              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Expected Amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.expense}
                name="expense"
                error={!!touched.expense && !!errors.expense}
                helperText={touched.expense && errors.expense}
                sx={{ gridColumn: "span 1" }}
              />
            </Box>

            <Box
              gridColumn="span 4"
              border={`1px solid ${palette.neutral.any}`}
              borderRadius="5px"
              p="1rem"
            ></Box>
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
  category: yup.string().required("Category is required"),
  code: yup.string().required("Code is required"),
  expense: yup.string().required("Expense is required"),
});

const initialValues = {
  category: "",
  code: "",
  expense: "",
  picture: "",
};

export default RequestForm;
