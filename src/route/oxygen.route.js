const {Router} =require('express');
const controller=require("../controllers/oxygen.controller");

const router=Router();

// router.get('/',(req,res)=>{
//     res.send("using Api route");
// });

router.get('/',controller.getOxygen);
router.get('/:patient_id',controller.getOxygenById);
router.post('/',controller.addOxygen);
router.delete('/:patient_id',controller.removeOxygen);
router.put('/:patient_id',controller.updateOxygen);



module.exports=router;