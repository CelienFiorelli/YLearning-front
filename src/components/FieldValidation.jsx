import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  login: yup.string().required("le mail est obligatoire"),
  password: yup.string().required("Le mot de passe est obligatoire"),
});