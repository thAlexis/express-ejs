const personnes = [
  { id: 1, nom: "Wick", prenom: "John", age: 45 },
  { id: 2, nom: "Dalton", prenom: "Jack", age: 55 },
  { id: 3, nom: "Maggio", prenom: "Sophie", age: 33 },
];

const showPersonnes = (req, res, next) => {
  res.render("personne", { personnes });
};

const addPersonne = (req, res, next) => {
  console.log(req.body);
  const { nom, prenom, age } = req.body;
  const newId = personnes.length + 1;
  const p = { id: newId, nom: nom, prenom: prenom };
  console.log(p);
  personnes.push(p);
  req.session.firstname = prenom;
  res.redirect("/personne");
};

const deletePersonne = (req, res, next) => {
  const idToDelete = req.params.id;
  const index = personnes.findIndex((p) => p.id == idToDelete);
  if (index != -1) {
    personnes.splice(index, 1);
  } else {
    alert("Suppression impossible");
  }
  console.log(idToDelete);
  res.redirect("/personne");
};

export default { showPersonnes, addPersonne, deletePersonne };
