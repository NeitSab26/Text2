const Liker = require('../models/liker.model');
const liker = require('../models/liker.model');

exports.createLike = async (req, res) => {
  const {id_post, id_uti } = req.body;
  liker.create({
    id_post: id_post,
    id_uti:id_uti
  }).then(like => {
    console.log('like enregistré :', like);
    res.status(201).json({ message: 'like enregistré', like: like });
  }).catch(err => {
    console.error('Erreur lors de l\'enregistrement du like :', err);
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement du like', error: err });
  });
};
exports.delLike = async (req, res) => {
  const { id_util, id_post } = req.body;
  liker.destroy({
    where: {
      id_uti: id_util,
      id_post: id_post
    }
  }).then(like => {
    console.log('like supprimé :', like);
    res.status(204).json({ user: 'like suprrimé avec succès', like: like });
  }).catch(err => {
    console.error('Erreur lors de la suppression du like :', err);
    res.status(500).json({ user: 'Erreur lors de la suppression du like', error: err });
  });
}
exports.getLike = async (req,res) => {
  const {  id_post } = req.body;
  Liker.count({
    where:{
      id_post: id_post
    }
  })
  .then(arg => {
      console.log('like trouvé(s) :', arg);
      res.status(201).json({ nbs: 'like(s) trouvé(s) avec succès', nb: arg });
    }).catch(err => {
      console.error('Erreur lors de la recherche du commentaire :', err);
      res.status(500).json({ user: 'Erreur lors de la recherche du commentaire', error: err });
    });
}