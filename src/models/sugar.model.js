const getSugar="SELECT * FROM sugar_info";
const getSugarById="SELECT * FROM sugar_info WHERE patient_id= $1";
const checkTimeExists="SELECT s from sugar_info s WHERE s.time=$1";
const addSugar="INSERT INTO sugar_info (sugar_value,month,date,time) VALUES($1,$2,$3,$4)";
const removeSugar="DELETE FROM sugar_info WHERE patient_id=$1";
const updateSugar="UPDATE sugar_info SET sugar_value=$1 WHERE patient_id=$2";
module.exports={
    getSugar,
    getSugarById,
    checkTimeExists,
    addSugar,
    removeSugar,
    updateSugar,
};