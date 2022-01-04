const {Router} =require('express');
const controller=require("../controllers/sugar.controller");

const router=Router();

// router.get('/',(req,res)=>{
//     res.send("using Api route");
// });

router.get('/',controller.getSugar);
router.get('/:patient_id',controller.getSugarById);
router.post('/',controller.addSugar);
router.delete('/:patient_id',controller.removeSugar);
router.put('/:patient_id',controller.updateSugar);



module.exports=router;