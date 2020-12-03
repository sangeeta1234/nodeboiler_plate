const express = require("express");

module.exports = {
     funtest : async(req,res)=>{
        //console.log("hii");
        try{
            await getsum();
        }catch(error){
            console.log(error)
        }
        
        res.send("hii");
    },
   
}