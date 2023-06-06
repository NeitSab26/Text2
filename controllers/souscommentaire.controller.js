const SCommentaire = require('../models/souscommentaire.model')
exports.createSCommentaire = async (req, res) => {
  const { id_com, contenu_scom, id_uti } = req.body;
  SCommentaire.create({
    id_com: id_com,
    contenu_scom: contenu_scom,
    id_uti: id_uti
  }).then(scom => {
    console.log('Sous commentaire créé :', scom);
    res.status(201).json({ message: 'Sous commentaire créé avec succès', scoms: scom });
  }).catch(err => {
    console.error('Erreur lors de la création du sous commentaire :', err);
    res.status(500).json({ message: 'Erreur lors de la création du sous commentaire', error: err });
  });
};
exports.delSComm = async (req, res) => {
  const {id_scom} = req.body;
  SCommentaire.destroy({
    where: {
      id_scom: id_scom
    }
  }).then(scom => {
    console.log('Sous commentaire supprimé :', scom);
    res.status(204).json({ scom: 'Sous commentaire suprrimé avec succès', scoms: scom });
  }).catch(err => {
    console.error('Erreur lors de la suppression du sous commentaire :', err);
    res.status(500).json({ errors: 'Erreur lors de la suppression du sous commentaire', error: err });
  });
};
exports.putSComm = async (req, res) => {
    const {id_scom, contenu_scom}= req.body;
    SCommentaire.update({
        contenu_scom: contenu_scom
    }, {
        where: {
            id_scom: id_scom
        }
    }).then(scom => {
        console.log('Sous commentaire modifié :', scom);
        res.status(201).json({ scom: 'Sous commentaire modifié avec succès', scoms: scom });
      }).catch(err => {
        console.error('Erreur lors de la modification du sous commentaire :', err);
        res.status(500).json({ err: 'Erreur lors de la modification du sous commentaire', error: err });
      });
};
exports.getSComByIdCom= async (req,res) =>{
    const {id_com} = req.body;
    SCommentaire.findAll({
        where:{
            id_com : id_com
        },
        order: [
            ['createdAt', 'ASC'],
          ]
    })
    .then(scom => {
        console.log('Sous commentaire trouvé :', scom);
        res.status(201).json({ scom: 'Sous commentaire trouvé avec succès', scoms: scom });
      }).catch(err => {
        console.error('Erreur lors de la recherche du sous commentaire :', err);
        res.status(500).json({ err: 'Erreur lors de la recherche du sous commentaire', error: err });
      });
}