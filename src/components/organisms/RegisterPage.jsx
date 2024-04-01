import React, { useState, useEffect, useContext } from "react";
import { TextField } from "../atoms/TextField";
import { useFormik } from "formik";
import { signUpValidationSchema } from "../validation/FieldValidation";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { Base } from "../../views/unauthentificate/Base";
import Link from "../atoms/Link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { token, register, login } = useContext(AuthContext);
  const showToastMessage = (username) => {
    toast.success(`Votre compte a bien été créer ${username} !`);
  };
  useEffect(() => {}, []);

  if (token) {
    navigate("/dashboard");
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      phone: "",
      password: "",
    },
    validationSchemas: signUpValidationSchema,
    validateOnChange: false,
    onSubmit: async (values) => {
      (await register(
        values.email,
        values.username,
        values.phone,
        values.password
      )) &&
        showToastMessage(values.username)
    },
  });

  return (
    <Base>
      <div className="flex justify-center m-14">
        <div>
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-[#2121217F] rounded-lg shadow backdrop-blur-sm">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-white-600">
                <h3 className="text-3xl text-center font-semibold text-gray-900 dark:text-white">
                  Nouveau compte
                </h3>
              </div>
              <div className="p-4 md:p-5">
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                  <div className="w-96">
                    <label
                      htmlFor="mail"
                      className="text-gray-900 dark:text-white"
                    >
                      E-mail
                      <TextField
                        type="text"
                        name="email"
                        error={formik.errors.email}
                        placeholder="jeandupont@email.fr"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </label>
                    <label
                      htmlFor="username"
                      className="text-gray-900 dark:text-white"
                    >
                      Pseudo
                      <TextField
                        type="text"
                        name="username"
                        error={formik.errors.username}
                        placeholder="Pseudo"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                      />
                    </label>
                    <label
                      htmlFor="phone"
                      className="text-gray-900 dark:text-white"
                    >
                      Téléphone
                      <TextField
                        type="text"
                        name="phone"
                        error={formik.errors.phone}
                        placeholder="00 00 00 00 00"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                      />
                    </label>
                    <label
                      htmlFor="password"
                      className="text-gray-900 dark:text-white"
                    >
                      Mot de passe
                      <TextField
                        type="password"
                        name="password"
                        placeholder="********"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.errors.password}
                      />
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full text-base font-bold mt-5 text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-bgreenlue-700 dark:focus:ring-green-800"
                    >
                      S'inscrire
                    </button>     
                    <Link text={"Déjà inscrit ? "} link={"Se connecter"} path={"/"} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute">
          <ToastContainer />
        </div>
      </div>
    </Base>
  );
};

export default RegisterPage;
