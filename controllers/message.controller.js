const { Op } = require("sequelize");
const Message = require('../models/message.model')
exports.postMessage = async (req, res) => {
    const { contenu, id_envoie_uti, id_res_uti } = req.body;
    Message.create({
        contenu_mess: contenu,
        id_envoie_uti: id_envoie_uti,
        id_res_uti: id_res_uti
    }).then(message => {
        console.log('message envoyé :', message);
        res.status(201).json({ message: 'Message envoyé avec succès', message: message });
    }).catch(err => {
        console.error('Erreur lors de la création du message :', err);
        res.status(500).json({ message: 'Erreur lors de la création du message', error: err });
    });
};
exports.delMessage = async (req, res) => {
    const { id_message } = req.body;
    Message.destroy({
        where: {
            id_mess: id_message
        }
    }).then(message => {
        console.log('message supprimé :', message);
        res.status(204).json({ message: 'Message suprrimé avec succès', message: message });
    }).catch(err => {
        console.error('Erreur lors de la suppression du message :', err);
        res.status(500).json({ message: 'Erreur lors de la suppression du message', error: err });
    });
};
exports.putMessage = async (req, res) => {
    const { id_message, contenu_message, } = req.body;
    Message.update({
        contenu_mess: contenu_message
    }, {
        where: {
            id_mess: id_message
        }
    }).then((message) => {
        console.log('message modifier :', message);
        res.status(200).json({ message: 'Message modifié avec succès', message: message });

    }).catch((err) => {
        console.error('Erreur lors de la modification du message :', err);
        res.status(500).json({ message: 'Erreur lors de la modification du message', error: err });
    });
};
exports.getConversation = async (req, res) => {
    const { id_envoie_uti, id_res_uti } = req.body;
    Message.findAll({
        where: {
            [Op.or]: [
                {
                    id_envoie_uti: id_envoie_uti
                },
                { id_res_uti: id_res_uti }
            ]

        }
    })
        .then((message) => {
            console.log('affichage de leurs conversation est  :', message);
            res.status(200).json({ message: 'affichage de leurs conversation', message: message });
        })
        .catch((err) => {
            console.error('Erreur lors l\'affichage de la conversation :', err);
            res.status(404).json({ message: 'Erreur lors l\'affichage de la conversation', error: err });
        });
}
