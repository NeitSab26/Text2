const User = require('../models/user.model')
exports.getAllUsers = async (req, res) => {
    User.findAll().then(users => {
        console.log('Utilisateurs trouvés', users);
        res.status(200).json({ message: 'Utilisateurs trouvés', user: users });
    }
    ).catch(err => {
        console.error('Erreur lors de la récupération des l\'utilisateurs :', err);
        res.status(404).json({ message: 'Erreur lors de la récupération des l\'utilisateurs par pseudo', error: err });  
    });
};
exports.getUsersPseudo = async (req, res) => {
    User.findAll({
        attributes:[
            'pseudo_uti',
            'id_uti'
        ]
    }).then(users => {
        console.log('Utilisateur(s) trouvé(es)', users);
        res.status(200).json({ message: 'Utilisateur(s) trouvé(es)', user: users });
    }
    ).catch(err => {
      console.error('Erreur lors de la récupération des l\'utilisateurs par pseudo :', err);
      res.status(404).json({ message: 'Erreur lors de la récupération des l\'utilisateurs par pseudo', error: err });

    });
};
exports.putUser = async (req,res)=>{
    const {id_uti,nom_uti,prenom_uti,pseudo_uti,avatar_uti} = req.body;
    User.update({
        nom_uti: nom_uti,
        prenom_uti: prenom_uti,
        pseudo_uti: pseudo_uti,
        avatar_uti: avatar_uti
    }, {
        where: {
            id_uti: id_uti
        }
    }).then(user => {
        console.log('Utilisateur(s) modifié(es)', user);
        res.status(200).json({ message: 'Utilisateur(s) modifié(es)', user: user });
    }
    ).catch(err => {
      console.error('Erreur lors de la modification de l\'utilisateur :', err);
      res.status(404).json({ message: 'Erreur lors de la modification de l\'utilisateur', error: err });

    });
};
exports.getUserById = async(req,res)=> {
    const{id_uti}= req.body;
    User.findOne({
        where: {
            id_uti:id_uti
        },
        attributes: ['id_uti','pseudo_uti', 'avatar_uti']
    }).then(user => {
        console.log('Utilisateur trouvé(e)', user);
        res.status(200).json({ message: 'Utilisateur trouvé(e)', user: user });
    }
    ).catch(err => {
      console.error('Erreur utilisateur introuvable:', err);
      res.status(404).json({ message: 'Erreur utilisateur introuvable', error: err });

    });
};
exports.putUserPseudo = async (req,res)=>{
    const {pseudo_uti,id_uti} = req.body;
    User.update({
        pseudo_uti: pseudo_uti,
    }, {
        where: {
            id_uti: id_uti
        }
    }).then(user => {
        console.log('Utilisateur(s) modifié(es)', user);
        res.status(200).json({ message: 'Utilisateur(s) modifié(es)', user: user });
    }
    ).catch(err => {
      console.error('Erreur lors de la modification de l\'utilisateur :', err);
      res.status(404).json({ message: 'Erreur lors de la modification de l\'utilisateur', error: err });

    });
};