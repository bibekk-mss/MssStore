import * as yup from "yup";

// export const ValidationSchema = {
//   registerSchema: yup.object().shape({
//     userName: yup
//       .string()
//       .trim()
//       .matches(/^[aA-zZ\s]+$/, "User name is invalid")
//       .required("User name is required"),

//     fullName: yup
//       .string()
//       .trim()
//       .matches(/^[aA-zZ\s]+$/, "Full name is invalid")
//       .required("Full name is required"),
//     email: yup
//       .string()
//       .matches(
//         /^[a-zA-Z0-9][a-zA-Z0-9-_\.]+@([a-zA-Z]|[a-zA-Z0-9]?[a-zA-Z0-9-]+[a-zA-Z0-9])\.[a-zA-Z0-9]{2,10}(?:\.[a-zA-Z]{2,10})?$/,
//         "Email is invalid"
//       )
//       .required("Email is required"),
//     phoneNo: yup
//       .string()
//       .min(6, "Phone no is invalid")
//       .max(11, "Phone no is invalid")
//       .required("Phone no is required"),
//     password: yup
//       .string()
//       .matches(/\w*[a-z]\w*/, "Password is invalid")
//       .matches(/\w*[A-Z]\w*/, "Password is invalid")
//       .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password is invalid")
//       .matches(/\d/, "Password is invalid")
//       .min(6, ({ min }) => "Password is invalid")
//       .required("Password is required"),
//   })
// };


const loginSchema = yup.object().shape({
  userName: yup
    .string()
    .trim()
    .matches(/^[aA-zZ\s]+$/, "User name is invalid")
    .required("User name is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password is invalid")
    .matches(/\w*[A-Z]\w*/, "Password is invalid")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password is invalid")
    .matches(/\d/, "Password is invalid")
    .min(6, ({ min }) => "Password is invalid")
    .required("Password is required")
});


const registerSchema = yup.object().shape({
  userName: yup
    .string()
    .trim()
    .matches(/^[aA-zZ\s]+$/, "User name is invalid")
    .required("User name is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password is invalid")
    .matches(/\w*[A-Z]\w*/, "Password is invalid")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password is invalid")
    .matches(/\d/, "Password is invalid")
    .min(6, ({ min }) => "Password is invalid")
    .required("Password is required"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9][a-zA-Z0-9-_\.]+@([a-zA-Z]|[a-zA-Z0-9]?[a-zA-Z0-9-]+[a-zA-Z0-9])\.[a-zA-Z0-9]{2,10}(?:\.[a-zA-Z]{2,10})?$/,
      "Email is invalid"
    )
    .required("Email is required"),
  firstName: yup
    .string()
    .trim()
    .matches(/^[aA-zZ\s]+$/, "First Name name is invalid")
    .required("First Name name is required"),
  lastName: yup
    .string()
    .trim()
    .matches(/^[aA-zZ\s]+$/, "Last Name name is invalid")
    .required("Last Name name is required"),
});