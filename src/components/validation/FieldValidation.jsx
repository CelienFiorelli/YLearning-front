import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  username: yup.string().required("l'identifiant est obligatoire"),
  password: yup.string().required("Le mot de passe est obligatoire"),
});

export const signUpValidationSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(3, ({ min }) => `Le nom doit contenir minimum ${min} caractères`)
    .required("Le prénom utilisateur est obligatoire"),
  lastname: yup
    .string()
    .min(3, ({ min }) => `Le nom doit contenir minimum ${min} caractères`)
    .required("Le nom utilisateur est obligatoire"),
  username: yup
    .string()
    .min(3, ({ min }) => `Le nom doit contenir minimum ${min} caractères`)
    .required("Le pseudo utilisateur est obligatoire"),
  email: yup
    .string()
    .email("Format email non valide")
    .matches(/[.]/, "Entrez un format ymentors@mail.fr")
    .required("l'adresse email est obligatoire"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/)
    .required("le téléphone est obligatoire"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "au moin une minuscule")
    .matches(/\w*[A-Z]\w*/, "au moin une majuscule")
    .matches(/\d/, "au moins un chiffre")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>?]/, "au moin un caractere special")
    .min(8, ({ min }) => `au moin ${min} caractères`)
    .required("Le mot de passe est obligatoire"),
});
