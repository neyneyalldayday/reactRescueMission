const { Comments, User } = require("../models")



const commentController= {
    async getComments(req,res){
        try{
            const commentData= await Comments.find()
            res.json(commentData)
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    },
    async createComment(req, res){
        try{
            const { commentText, username } = req.body;
            const commentData=await Comments.create({commentText, username})
            const userData = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { comments: commentData._id } },
                { new: true }
              );
        
              if (!userData) {
                return res.status(404).json({ message: 'Thought created but no user with this id!' });
              }
        
              res.json({ message: 'Thought successfully created!' });
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }
}
module.exports= commentController;