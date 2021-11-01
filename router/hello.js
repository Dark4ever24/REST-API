const express = require("express")
const User = require ("../modules/Contact")

const router = express.Router() ; 



//CRUD ops


router.get ("/",async(req,res)=> {
    try {
    const findUser= await User.find();
   
     res.status(200).send({findUser,msg:" all Users"});
    }
     catch (error) { 
    res.status(400).send({msg: "can not get",error});

    }
});


// post  create
  router.post("/", async (res,req) => {
    try {
 
    const newUser= new User({... req.body});
   await newUser.save ();

   res.status(200).send({ msg: "added", newUser });
      }
    catch (error) {
    res.status(400).send({msg: "can't save",error});
    }
});


// update 

router.put ("/:id",async(req,res)=> {
    try {
    const {id}= req.params;
     await User.updateOne({_id:id },{ $set:{... req.body} });

     res.status(200).send({msg:"updated ",findUserID});
     } catch (error) { 

    res.status(400).send({msg: "can not update",error});

     }
 }); 


// delete 

router.delete("/:id ", async (req,res)=> { 
    try { 
        const { id }= req.params;
        await  User.deleteOne({_id});
        res.status(200).send({msg: "deleted"});

        
    }catch (error) { 
        res.status(400).send({msg:"can't delete"});

    }
});

module.exports = router
