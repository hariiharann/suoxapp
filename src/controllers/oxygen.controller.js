const pool = require("../config/dbconfig");
const queries=require("../models/oxygen.model");

const getOxygen=(req,res)=>{
   
    pool.query(queries.getOxygen,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getOxygenById=(req,res)=>{
    const id=req.params.patient_id;
    pool.query(queries.getOxygenById,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);

    });
};

const addOxygen=(req,res)=>{
    const {oxygen_value,month,date,bpm,time}=req.body;
    //check if time exists
    // pool.query(queries.checkTimeExists,[time],(error,results)=>{
        // if(results.rows){
        //     console.log(results.rows.length);
        //     res.send("Time already exists");
        // if(error) throw error;
        // res.status(200).json(results.rows);
        //}
        //add oxygen info to db
        pool.query(queries.addOxygen,[oxygen_value,month,date,bpm,time],(error,results)=>{
            if(error)throw error;
           
            res.status(201).send("Oxygen information created successfully!");
        // });
        
    });  
};

const removeOxygen=(req,res)=>{
    const id=req.params.patient_id;

    pool.query(queries.getOxygenById,[id],(error,results)=>{
        const noOxygenFound=!results.rows.length;
        if(noOxygenFound){
        res.send("Oxygen information doesnt exists in db couldnt remove");
    }
    pool.query(queries.removeOxygen,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).send("oxygen information removed successfully");

    });

    });
};

const updateOxygen=(req,res)=>{
    const id=req.params.patient_id;
    const {oxygen_value} =req.body;
pool.query(queries.getOxygenById,[id],(error,results)=>{
    const noOxygenFound=!results.rows.length;
    if(noOxygenFound){
    res.send("Oxygen information doesnt exists in db couldnt remove");
    }
    pool.query(queries.updateOxygen,[oxygen_value,id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("oxygen information updated successfully");
    });

});
}
module.exports={
    getOxygen,
    getOxygenById,
    addOxygen,
    removeOxygen,
    updateOxygen,
};

