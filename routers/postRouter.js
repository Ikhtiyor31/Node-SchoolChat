import express from 'express'
import postService from '../services/postService.js'
import commonUtil from '../utils/common.js';
const postRouter = express.Router({mergeParams: true});



postRouter.post('/post', async (req, res ) => {
   
    const {author, title, content } = req.body;
   
    const image = (commonUtil.isNotNull(req.files)) ? req.files.image : null;
     res.json(author + title + content + image);
    const result = await postService.createPost(author, title, content, image);
    if ( result ) {
         res.json(commonUtil.successResult());
    } else {
        res.json(commonUtil.errorResult('POST_UNDEF', 'Error Something'));
    }

});
postRouter.get('/test', async ( req, res ) => {
    res.json("Hello world");
})
export default postRouter;
