const Commentaire = require('../models/commentaire.model')
exports.createCommentaire = async (req, res) => {
  const { id_post, contenu_com, id_uti } = req.body;
  Commentaire.create({
    id_post: id_post,
    contenu_com: contenu_com,
    id_uti: id_uti
  }).then(com => {
    console.log('Commentaire créé :', com);
    res.status(201).json({ message: 'Commentaire créé avec succès', coms: com });
  }).catch(err => {
    console.error('Erreur lors de la création du commentaire :', err);
    res.status(500).json({ message: 'Erreur lors de la création du commentaire', error: err });
  });
};
exports.delComm = async (req, res) => {
  const {id_com} = req.body;
  Commentaire.destroy({
    where: {
      id_com: id_com
    }
  }).then(com => {
    console.log('Commentaire supprimé :', com);
    res.status(204).json({ com: 'Commentaire suprrimé avec succès', coms: com });
  }).catch(err => {
    console.error('Erreur lors de la suppression du commentaire :', err);
    res.status(500).json({ user: 'Erreur lors de la suppression du commentaire', error: err });
  });
};
exports.putComm = async (req, res) => {
    const {id_com, contenu_com}= req.body;
    Commentaire.update({
        contenu_com: contenu_com
    }, {
        where: {
            id_com: id_com
        }
    })
    .then(com => {
        console.log('Commentaire modifié :', com);
        res.status(201).json({ com: 'Commentaire modifié avec succès', coms: com });
      }).catch(err => {
        console.error('Erreur lors de la modification du commentaire :', err);
        res.status(500).json({ user: 'Erreur lors de la modification du commentaire', error: err });
      });
}
exports.getCommsByIdPost = async (req,res) => {
    const {id_post} = req.body;
    Commentaire.findAll({
        where:{
            id_post : id_post
        },
        order: [
            ['createdAt', 'ASC'],
          ]
    })
    .then(com => {
        console.log('Commentaire trouvé :', com);
        res.status(201).json({ com: 'Commentaire trouvé avec succès', coms: com });
      }).catch(err => {
        console.error('Erreur lors de la recherche du commentaire :', err);
        res.status(500).json({ user: 'Erreur lors de la recherche du commentaire', error: err });
      });
}
exports.getCommsPost = async (req,res) => {
  Commentaire.findAll({
      order: [
          ['createdAt', 'DESC'],
        ]
  })
  .then(com => {
      console.log('Commentaire trouvé :', com);
      res.status(201).json({ com: 'Commentaire trouvé avec succès', coms: com });
    }).catch(err => {
      console.error('Erreur lors de la recherche du commentaire :', err);
      res.status(500).json({ user: 'Erreur lors de la recherche du commentaire', error: err });
    });
}