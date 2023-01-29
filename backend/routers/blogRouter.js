import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Blog from '../models/blogModel.js';




const blogRouter = express.Router();

blogRouter.get('/',
    expressAsyncHandler(async(req, res) => {
        const blogs = await Blog.find({});
        res.send(blogs);
    })
);


blogRouter.post('/add',
    expressAsyncHandler(async(req, res) => {
        const data = req.body
        const createdBlog = await Blog.insertMany(data.blog);
        res.send({ createdBlog });
    })

);


blogRouter.post('/delete',
    expressAsyncHandler(async(req, res) => {
        const data = req.body
        const deletedBlog = await Blog.deleteOne({ _id: data.id });
        res.send({ deletedBlog });
    })

);


blogRouter.post('/edit',
    expressAsyncHandler(async(req, res) => {
        const data = req.body
        const blog = await Blog.findById(data._id);
        if (blog) {
            blog.name = data.name || blog.name;
            blog.image = data.image || blog.image;
            const updated = await blog.save()
            res.send({ updated });
        }


    })

);


blogRouter.post(
    '/:id',
    expressAsyncHandler(async(req, res) => {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            res.send(blog);
        } else {
            res.status(404).send({ message: 'Blog Not Found' });
        }
    })
);



export default blogRouter;