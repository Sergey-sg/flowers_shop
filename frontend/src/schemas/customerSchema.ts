import * as Yup from "yup";

const phoneRegExp = /^((\+)?(\d{2})?)?(0\d{9})$/;

export const CustomerSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Name must be more than two characters")
    .max(150, "Name must be less than 150 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(3, "Name must be more than two characters")
    .max(150, "Name must be less than 150 characters"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("A phone number is required"),
  email: Yup.string()
    .email()
    .max(320, "Email must be less than 320 characters."),
  address: Yup.string().min(15).max(350).required("Address is required"),
});
