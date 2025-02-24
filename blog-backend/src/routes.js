import express from 'express';
import {
    createBlogPost,
    modifyPost,
    removePost,
    getAllBlogPosts,
    getBlogPostById
} from './controllers/blogController.js';

const router = express.Router();

// Route for creating a new blog post
router.post('/create', createBlogPost);
router.put('/update/:id', modifyPost);
router.delete('/delete/:id', removePost);
router.get('/fetchPosts', getAllBlogPosts);
router.get('/fetchPost/:id', getBlogPostById);

export default router; // Default export
