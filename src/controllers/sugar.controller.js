const pool = require("../config/dbconfig");
const queries=require("../models/sugar.model");

const getSugar=(req,res)=>{
   
    pool.query(queries.getSugar,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getSugarById=(req,res)=>{
    const id=req.params.patient_id;
    pool.query(queries.getSugarById,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);

    });
};

const addSugar=(req,res)=>{
    const {sugar_value,month,date,time}=req.body;
    //check if time exists
    // pool.query(queries.checkTimeExists,[time],(error,results)=>{
        // if(results.rows){
        //     console.log(results.rows.length);
        //     res.send("Time already exists");
        // if(error) throw error;
        // res.status(200).json(results.rows);
        //}
        //add oxygen info to db
        pool.query(queries.addSugar,[sugar_value,month,date,time],(error,results)=>{
            if(error)throw error;
           res.status(201).send("Sugar information created successfully!");
        // });
        
    });  
};

const removeSugar=(req,res)=>{
    const id=req.params.patient_id;

    pool.query(queries.getSugarById,[id],(error,results)=>{
        const noSugarFound=!results.rows.length;
        if(noSugarFound){
        res.send("Sugar information doesnt exists in db couldnt remove");
    }
    pool.query(queries.removeSugar,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).send("sugar information removed successfully");

    });

    });
};

const updateSugar=(req,res)=>{
    const id=req.params.patient_id;
    const {sugar_value} =req.body;
pool.query(queries.getSugarById,[id],(error,results)=>{
    const noSugarFound=!results.rows.length;
    if(noSugarFound){
    res.send("Sugar information doesnt exists in db couldnt remove");
    }
    pool.query(queries.updateSugar,[sugar_value,id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("sugar information updated successfully");
    });

});
}
module.exports={
    getSugar,
    getSugarById,
    addSugar,
    removeSugar,
    updateSugar,
};

