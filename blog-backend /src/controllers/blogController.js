import {
    insertBlogPost,
    updateBlogPost,
    deleteBlogPost,
    getAllPosts,
    getBlogPost
} from '../dbHelpers/dbHelper.js'



// Controller for creating a new blog post
export const createBlogPost = async (req, res) => {
    try {
        const { author, title, content } = req.body;

        await insertBlogPost(author, title, content);

        res.status(200).json({ message: 'Blog post created successfully' });
    }
    catch (error) {
        console.log(error.message);

        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const modifyPost = async (req, res) => {
    const { id, title, content } = req.body;
    try {
        const result = await updateBlogPost(id, title, content);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const removePost = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteBlogPost(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllBlogPosts = async (req, res) => {
    try {
        const result = await getAllPosts();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const getBlogPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getBlogPost(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}