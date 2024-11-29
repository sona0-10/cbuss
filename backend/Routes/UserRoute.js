const express =require('express');
const router = express.Router();
const User = require('../Model/User');

router.use(express.json());

//signup
// router.post('/post',async(req,res)=>{
//     try{
//          const data = req.body;
//          console.log(data)
//          await user(data).save();
//          res.status(200).json({message:"data added"})
//     } catch (error) {
//        console.log(error);
//        res.status(400).json({message:"Unable to register"})
//     }
// })
router.post('/post', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Create a new user document
        const newUser = new User({
            name,
            email,
            password,
        });

        // Save the user to the database
        await newUser.save();

        // Respond with a success message
        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error registering user' });
    }
});
//login
router.post('/login',async(req,res)=>{
    let u = req.body.name;
    let p = req.body.password;
    console.log("ghhg")
    const person = await User.findOne({name:u})
    if(!person){
        res.json({message:"user not found"});
    }
    try {
        if(person.password==p){
            res.status(200).json({message:"Log in successfully",person})
        }else{
            res.json({message:"Login failed"})
        }
    }catch(error){
        console.log(error)
    }
})
router.get('/Viewmypro/:id',async(req,res)=>{
    console.log(req.params.id);
    let userId =  req.params.id;
    try{
        const item = await user.find({_id:userId});
        res.status(200).json(item)
    }catch (error){
    console.log(error)
}
})



module.exports=router;