const router= require ("express").Router();
const commentRoutes= require ("./comments");
const userRoutes = require ('./user.js')


router.use("/comments",commentRoutes);
router.use('/user', userRoutes);



module.exports=router;