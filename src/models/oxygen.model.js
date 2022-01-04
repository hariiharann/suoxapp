const getOxygen="SELECT * FROM oxygen_info";
const getOxygenById="SELECT * FROM oxygen_info WHERE patient_id= $1";
const checkTimeExists="SELECT o from oxygen_info o WHERE s.time=$1";
const addOxygen="INSERT INTO oxygen_info (oxygen_value,month,date,bpm,time) VALUES($1,$2,$3,$4,$5)";
const removeOxygen="DELETE FROM oxygen_info WHERE patient_id=$1";
const updateOxygen="UPDATE oxygen_info SET oxygen_value=$1 WHERE patient_id=$2";
module.exports={
    getOxygen,
    getOxygenById,
    checkTimeExists,
    addOxygen,
    removeOxygen,
    updateOxygen,
};