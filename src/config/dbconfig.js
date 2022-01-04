
const Pool=require('pg').Pool;

const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"suoxappdb",
    password:"siva2408",
    port:5432,

});
pool.connect((err)=>{

  if(!err){
      console.log("database connection succeeded");
  }else{
      console.log("database connection failed"+err);
  }
});



module.exports=pool;

