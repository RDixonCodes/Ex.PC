const PirateController = require('../controllers/pirate.controller');
const { authenticate } = require("../config/jwt.config");
module.exports = function(app){
    app.post('/api/pirates/new', PirateController.createPirate);
    app.get('/api/pirates', PirateController.getAllPirates);
    app.get('/api/pirates/:id', PirateController.getPirate);
    app.put('/api/pirates/:id/edit', PirateController.updatePirate);
    app.delete('/api/pirates/:id/delete', authenticate, PirateController.deletePirate);
}