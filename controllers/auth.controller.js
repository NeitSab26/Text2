const User = require('../models/user.model');
const jwt = require("jsonwebtoken");

const createToken = (id) =>{
   return jwt.sign({userId:id}, process.env.TOKEN_SECRET,{expiresIn: "1h" })
}

exports.createUser = async (req, res) => {
  const { nom, prenom, dateN, mail, mdp_uti } = req.body;
  User.create({
    nom_uti: nom,
    prenom_uti: prenom,
    date_naiss_uti: dateN,
    mail_uti: mail,
    mdp_uti: mdp_uti
  }).then(user => {
    console.log('Utilisateur créé :', user);
    res.status(201).json({ message: 'Utilisateur créé avec succès', user: user });
  }).catch(err => {
    console.error('Erreur lors de la création de l\'utilisateur :', err);
    res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error: err });
  });
};
exports.delUser = async (req, res) => {
  const { id_util } = req.body;
  User.destroy({
    where: {
      id_uti: id_util
    }
  }).then(user => {
    console.log('utilisateur supprimé :', user);
    res.status(204).json({ user: 'Utilisateur suprrimé avec succès', user: user });
  }).catch(err => {
    console.error('Erreur lors de la suppression de utilisateur :', err);
    res.status(500).json({ user: 'Erreur lors de la suppression de l\'utilisateur', error: err });
  });
}
exports.authUser = async (req, res) => {
  const { mail_uti, mdp_uti } = req.body;
  User.findOne({
    where: {
      mail_uti: mail_uti,
      mdp_uti: mdp_uti
    }
  }).then(user => {
    console.log(user);
    const token = createToken(user.id_uti);
    res.cookie('jwt',token, {httpOnly:true, maxAge: 3600000});
    res.status(200).json({user: token,userid: user.id_uti, message: "ça marche"})
  }).catch(err => {
    console.error('erreur: ', err);
    res.status(404).json({ user: 'erreur ', error: err });

  });
}
exports.logoutUser = async (req,res) =>{
  res.cookie('jwt', '', {maxAge: 1});
  res.redirect("/")
}
