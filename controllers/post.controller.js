const Post = require('../models/post.model')
exports.postPost = async (req, res) => {
    const { id_uti, contenu_post } = req.body;
    Post.create({
        contenu_post: contenu_post,
        id_uti: id_uti
    }).then(post => {
        console.log('Post créé :', post);
        res.status(201).json({ message: 'Post créé avec succès', post: post });
    }).catch(err => {
        console.error('Erreur lors de la création du post :', err);
        res.status(500).json({ message: 'Erreur lors de la création du post', error: err });
    });
};
exports.getAllPost = async (req, res) => {
    Post.findAll({ order: [['updatedAt', 'DESC']]})
        .then(post => {
            console.log('Post trouvés :', post);
            res.status(201).json({ message: 'Post trouvés', post: post });
        }).catch(err => {
            console.error('Erreur lors de la recherche des post :', err);
            res.status(500).json({ message: 'Erreur lors de la recherche des post', error: err });
        });
}
exports.getAllPostByIdUti = async (req, res) => {
    const { id_uti } = req.body;
    Post.findAll({
        where: {
            id_uti: id_uti
        }
    })
        .then(post => {
            console.log('Post trouvés :', post);
            res.status(201).json({ message: 'Post trouvés', post: post });
        }).catch(err => {
            console.error('Erreur lors de la recherche des post :', err);
            res.status(500).json({ message: 'Erreur lors de la recherche des post', error: err });
        });
}
exports.delPost = async (req, res) => {
    const { id_post } = req.body;
    Post.destroy({
        where: {
            id_post: id_post
        }
    }).then(post => {
        console.log('Post supprimé :', post);
        res.status(201).json({ message: 'Post supprimé', post: post });
    }).catch(err => {
        console.error('Erreur lors de la suppression des post :', err);
        res.status(500).json({ message: 'Erreur lors de la supression des post', error: err });
    });
};
exports.putPost = async (req, res) => {
    const { id_post, contenu_post } = req.body;
    Post.update(
        {
            contenu_post: contenu_post
        }, {
        where: {
            id_post: id_post
        }
    }
    ).then(post => {
        console.log('Post modifié :', post);
        res.status(201).json({ message: 'Post modifié', post: post });
    }).catch(err => {
        console.error('Erreur lors de la modification du post :', err);
        res.status(500).json({ message: 'Erreur lors de la modification du post', error: err });
    });
}
