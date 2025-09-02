import yup from "yup";

const personneSchema = yup.object().shape({
  nom: yup
    .string()
    .required()
    .matches(/^[A-Z][a-zA-Z]{1,19}$/),
  prenom: yup
    .string()
    .min(3)
    .max(20, "Ce champ doit contenir au moins 3 caractères"),
  age: yup.number().required().positive(),
});

const personnes = [
  { id: 1, nom: "Wick", prenom: "John", age: 45 },
  { id: 2, nom: "Dalton", prenom: "Jack", age: 55 },
  { id: 3, nom: "Maggio", prenom: "Sophie", age: 33 },
];

const showPersonnes = (req, res, next) => {
  res.render("personne", {
    personnes,
    erreurs: null,
  });
};
const addPersonne = (req, res, next) => {
  personneSchema
    .validate(req.body, { abortEarly: false })
    .then(() => {
      personnes.push(req.body);
      req.session.firstname = req.body.prenom;
      res.redirect("/personne");
    })
    .catch((err) => {
      res.render("personne", {
        erreurs: err.errors,
        personnes,
      });
    });
};
const deletePersonne = (req, res, next) => {
  const id = req.params.id;
  const index = personnes.findIndex((p) => p.id == id);
  if (index != -1) {
    personnes.splice(index, 1);
  } else {
    alert("Suppression impossible !");
  }
  res.redirect("/personne");
};

export default { showPersonnes, addPersonne, deletePersonne };
