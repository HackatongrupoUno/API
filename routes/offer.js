module.exports = (app) =>{
    const createoffer =require('../controllers/offer')
    app.post('/offer/create',createoffer.create)
    app.put('/offer/update/:id',createoffer.update)
    app.get('/offer/getAll', createoffer.getAll)
}