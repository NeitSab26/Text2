const { Op } = require("sequelize");
const Abo = require('../models/abonner.model')
exports.getAboById = async (req, res) => {
    const { id_uti } = req.body;
    Abo.findAll({
        where: {  
            [Op.or]: [
                {id_uti: id_uti,id_uti_UTILISATEUR: id_uti},
                {   id_uti: id_uti, },
                { id_uti_UTILISATEUR: id_uti}
              ]
        }
    })
        .then(message => {
            console.log('abonnements affiché avec succès :', message);
            res.status(201).json({ message: 'abonnements affiché avec succès', messages: message });
        }).catch(err => {
            console.error('Erreur lors de la récupération des abonnements :', err);
            res.status(500).json({ message: 'Erreur lors de la récupération des abonnements', error: err });
        });
};
exports.postAboById = async (req, res) => {
    const { id_uti, id_uti_UTILISATEUR } = req.body;
    Abo.create({
        id_uti: id_uti,
        id_uti_UTILISATEUR: id_uti_UTILISATEUR
    })
        .then(message => {
            console.log('abonnement crée avec succès :', message);
            res.status(201).json({ message: 'abonnement crée avec succès', messages: message });
        }).catch(err => {
            console.error('Erreur lors de la récupération de l\'abonnement :', err);
            res.status(500).json({ message: 'Erreur lors de la création de l\'abonnement', error: err });
        });
};
exports.delAbo = async (req, res) => {
    const { id_uti, id_uti_UTILISATEUR } = req.body;
    Abo.destroy({
        where: {
            id_uti: id_uti,
            id_uti_UTILISATEUR: id_uti_UTILISATEUR
        }
    })
        .then(message => {
            console.log('abonnement supprimé avec succès :', message);
            res.status(201).json({ message: 'abonnement supprimé avec succès', messages: message });
        }).catch(err => {
            console.error('Erreur lors de la suppréssion de l\'abonnement :', err);
            res.status(500).json({ message: 'Erreur lors de la suppréssion de l\'abonnement', error: err });
        });
}
