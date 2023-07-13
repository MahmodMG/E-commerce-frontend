import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function Register() {
  let validationSchema = Yup.object({
    name: Yup.string().min(3).max(15).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9@#$%]{6,}$/, "password must match the pattern")
      .required(),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "password and rePassword not match")
      .required(),
  });
  // let validate = (values) => {
  //   let errors = {};
  //   if (!values.name) {
  //     errors.name = "name is required.";
  //   } else if (values.name.length > 14) {
  //     errors.name = "name is too long";
  //   }
  //   if (!values.password) {
  //     errors.password = "password is required.";
  //   } else if (values.password.length > 14) {
  //     errors.password = "password is too long";
  //   }
  //   if (!values.rePassword) {
  //     errors.rePassword = "rePassword is required.";
  //   } else if (values.password.length > 14) {
  //     errors.rePassword = "rePassword is too long";
  //   }
  //   if (!values.email) {
  //     errors.email = "email is required.";
  //   }
  //   return errors;
  // };

  let registerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // console.log(values);
      // send to api
    },
  });
  // console.log(registerFormik.errors);
  return (
    <>
      <div className="w-50 m-auto my-5">
        <h2>Register Now</h2>
        <form onSubmit={registerFormik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.name}
            onChange={registerFormik.handleChange}
            type="text"
            className="form-control my-3"
            id="name"
            name="name"
          />
          {registerFormik.errors.name && registerFormik.touched.name ? (
            <div className="alert alert-danger">
              {registerFormik.errors.name}
            </div>
          ) : (
            ""
          )}
          <label htmlFor="email">Email</label>
          <input
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.email}
            onChange={registerFormik.handleChange}
            type="email"
            className="form-control my-3"
            id="email"
            name="email"
          />{" "}
          {registerFormik.errors.email && registerFormik.touched.email ? (
            <div className="alert alert-danger">
              {registerFormik.errors.email}
            </div>
          ) : (
            ""
          )}
          <label htmlFor="Password">Password</label>
          <input
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.password}
            onChange={registerFormik.handleChange}
            type="password"
            className="form-control my-3"
            id="password"
            name="password"
          />{" "}
          {registerFormik.errors.password && registerFormik.touched.password ? (
            <div className="alert alert-danger">
              {registerFormik.errors.password}
            </div>
          ) : (
            ""
          )}
          <label htmlFor="rePassword">rePassword</label>
          <input
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.rePassword}
            onChange={registerFormik.handleChange}
            type="password"
            className="form-control my-3"
            id="rePassword"
            name="rePassword"
          />{" "}
          {registerFormik.errors.rePassword &&
          registerFormik.touched.rePassword ? (
            <div className="alert alert-danger">
              {registerFormik.errors.rePassword}
            </div>
          ) : (
            ""
          )}
          <button type="submit" className="btn bg-main text-white">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
