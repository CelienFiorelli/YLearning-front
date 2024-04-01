import React, { useContext, useState } from "react";
import { TextField } from "../atoms/TextField";
import { useFormik } from "formik";
import { loginValidationSchema } from "../validation/FieldValidation";
import { Base } from "../../views/unauthentificate/Base";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Navbar from "../Navbar";
import CustomModal from "../CustomModal";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, token, errorMessage } = useContext(AuthContext);
  const [viewModal, setViewModal] = useState(false);

  if (token) {
    navigate("/dashboard");
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    validateOnChange: false,
    onSubmit: async (values) => {
      if (await login(values.username, values.password)) {
        navigate("/dashboard")
      }
    },
  });
  return (
    <Base>
      <Navbar>
        <Button
          label={"S'inscrire"}
          onClick={() => navigate("/auth/register")}
          customClass="w-32 hover:bg-lime-600 hover:border-lime-400"
        />
      </Navbar>
        <div className="flex justify-center m-14">
          <div>
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-[#2121217F] rounded-lg shadow backdrop-blur-sm">
                <div className="flex-col items-center justify-between md:p-5 p-0 border-b rounded-t border-white-600">
                  <h3 className="text-3xl text-center font-semibold text-gray-900 dark:text-white">
                    Se connecter
                  </h3>
                  <div className="flex justify-center">
                    {errorMessage && (
                      <span className="text-sm text-center font-semibold text-red-400">
                        Username ou mot de passe incorrect
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <form className="space-y-4" onSubmit={formik.handleSubmit}>
                    <div className="w-96">
                      <label
                        htmlFor="username"
                        className="text-gray-900 dark:text-white"
                      >
                        Nom utilisateur :
                        <TextField
                          type="text"
                          name="username"
                          error={formik.errors.username}
                          placeholder="usernale"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                        />
                      </label>
                    </div>
                    <div className="w-96">
                      <label
                        htmlFor="password"
                        className="text-gray-900 dark:text-white"
                      >
                        Mot de passe :
                        <TextField
                          type="password"
                          name="password"
                          placeholder="Mot de passe"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          error={formik.errors.password}
                        />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-base font-bold text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Se connecter
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Pas de compte ?{" "}
                      <a
                        onClick={() => navigate("/auth/register")}
                        className="text-lime-400 hover:underline cursor-pointer dark:text-lime-500"
                      >
                        Créer un compte
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Base>
  );
};

export default LoginPage;
