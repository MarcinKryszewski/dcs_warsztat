const express = require("express")
const router = express.Router()
const PartsStatusActions = require('./partsstatuses.api')

router.get('/all', PartsStatusActions.AllPartsStatuss);
router.get('/:id', PartsStatusActions.GetPartsStatus);
router.post('/add', PartsStatusActions.AddPartsStatus);
router.put('/:id', PartsStatusActions.UpdatePartsStatus);
router.delete('/:id', PartsStatusActions.DeletePartsStatus);

module.exports = router;