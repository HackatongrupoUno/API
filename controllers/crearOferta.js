const CrarOfertaModel = require('../models/crearOferta');
/**
 * Metodo para almacenal un nuevo usuario 
 * @param {*} req => todo lo que enviamos desde el dody (formulario)
 * @param {*} res => la respuesta que se devolvera 
 */
exports.create = (req, res) => {
    /**
     * El sisgno de admiracion (!) antede de la condicion  significa que estamos negando la condicion
     */

    if (Object.entries(req.body).length == 0) {
        // console.log('esta llegando')
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const crearOferta = new CrarOfertaModel({
        title: req.body.title,
        description: req.body.description,
        cargo: req.body.cargo,
        salary: req.body.salary,
        ubicacion: req.body.ubicacion,
        termTime: req.body.termTime 

    })

    crearOferta.save().then((dataoferta) => {
        res.send(dataoferta)
    }).catch((error) => {
        res.status(500).send({
            message: error.message

        })
    })
}
/**
 * Metodo para actualizar el usuario 
 * @param {*} req =>todo lo que enviamos desde el dody (formulario)
 * @param {*} res =>la respuesta que se devolvera
 */
exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const crearOferta = {
        title: req.body.title,
        description: req.body.description,
        cargo: req.body.cargo,
        salary: req.body.salary,
        ubicacion: req.body.ubicacion,
        termTime: req.body.termTime 

    }
    
    CrarOfertaModel.findByIdAndUpdate(req.params.id, crearOferta)
        .then(
            (ofertaUpdate) => {
                res.send(ofertaUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}


// faltan creo que cuatro  si no estoy mal si 
