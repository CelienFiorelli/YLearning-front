import React, { useState, useEffect, useContext } from "react";
import { TextField } from "../components/TextField";
import { useFormik } from "formik";
import { getDomains } from "../services/GetUsers";
import { signUpValidationSchema } from "../components/validation/FieldValidation";
import Select from "react-select";
import Button from "../components/Button";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Base } from "./unauthentificate/Base";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [domains, setDomains] = useState([{}]);
  const [view, setView] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [role, setRole] = useState(2);
  const navigate = useNavigate();
  const { token, register } = useContext(AuthContext);
  const showToastMessage = (mail) => {
    toast.success(" Votre compte a bien été créer !")
    toast.success(`verification requise pour ${mail}!`)
  };
  useEffect(() => {
    setRole(isChecked ? 1 : 2);
    fetchDomains();
  }, [view, isChecked]);

  if (token) {
    navigate("/dashboard");
  }

  const fetchDomains = async () => {
    const options = await getDomains();
    setDomains(
      options.map((domain) => {
        return {
          label: domain.name,
          value: domain.id,
        };
      })
    );
  };

  const handleSelectChange = (domain) => {
    setSelectedDomain(domain.value);
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      username: "",
      email: "",
      phone: "",
      role: 1,
      domain: 1,
    },
    validationSchemas: signUpValidationSchema,
    validateOnChange: false,
    onSubmit: async (values) => {
      values.domain = selectedDomain;
      values.role = role;
      (await register(values)) && showToastMessage (values.email) && navigate('/');
    },
  });

  return (
    <Base>
      <Navbar>
        <Button
          label={"Se connecter"}
          onClick={() => navigate("/auth/login")}
          customClass="w-32 hover:bg-lime-600 hover:border-lime-400"
        />
      </Navbar>
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
                  {view === 1 && (
                    <div className="w-96">
                      <label
                        htmlFor="email"
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
                  )}
                  {view === 2 && (
                    <div className="w-96">
                      <label
                        htmlFor="firstname"
                        className="text-gray-900 dark:text-white"
                      >
                        Prénom
                        <TextField
                          type="text"
                          name="firstname"
                          error={formik.errors.firstname}
                          placeholder="Jean"
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                        />
                      </label>
                      <label
                        htmlFor="lastname"
                        className="text-gray-900 dark:text-white"
                      >
                        Nom
                        <TextField
                          type="text"
                          name="lastname"
                          error={formik.errors.lastname}
                          placeholder="DUPONT"
                          value={formik.values.lastname}
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
                    </div>
                  )}
                  {view === 3 && (
                    <div>
                      <div className="w-96">
                        <label
                          htmlFor=""
                          className="text-gray-900 dark:text-white"
                        >
                          Domaine
                        </label>
                        <Select
                          onChange={handleSelectChange}
                          options={domains}
                          name="domain"
                          placeholder="Sélectionnez une option"
                          className="outline-none"
                        />
                      </div>
                      <div className="flex justify-center checkbox-wrapper">
                        <label className="inline-flex items-center cursor-pointer my-3 mr-9">
                          <input
                            type="checkbox"
                            name="role"
                            className="sr-only peer"
                            onChange={() => setIsChecked((prev) => !prev)}
                            checked={isChecked}
                          />
                          <span
                            className={`mr-2.5 mt-2 text-xl font-medium text-white-900 dark:text-gray-300 ${
                              !isChecked
                                ? "text-red-900 dark:text-green-400"
                                : "line-through"
                            }`}
                          >
                            {"Etudiant"}
                          </span>
                          <div className="w-15 mt-3 relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 bg-green-600"></div>
                          <span
                            className={`ms-2.5 mt-2 text-xl font-medium text-white-900 dark:text-gray-300 ${
                              isChecked
                                ? "text-red-900 dark:text-green-400"
                                : "line-through"
                            }`}
                          >
                            {"Mentor"}
                          </span>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-base font-bold mt-5 text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-bgreenlue-700 dark:focus:ring-green-800"
                      >
                        S'inscrire
                      </button>
                    </div>
                  )}
                </form>
                <div className="flex flex-row space-x-12 my-4 justify-center">
                  {view > 1 && (
                    <div className="">
                      <Button
                        label="Précédent"
                        onClick={() => setView(view > 1 ? view - 1 : view)}
                        customClass={"w-32"}
                      />
                    </div>
                  )}
                  {view <= 2 && (
                    <div className="">
                      <Button
                        label="Suivant"
                        onClick={() => setView(view < 3 ? view + 1 : view)}
                        customClass={"w-32"}
                      />
                    </div>
                  )}
                </div>
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
