import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'K.siri@2001',
    database: 'BLOGPOST',
    port: 3306,
    connectionLimit: 10,
});

// Promisified version of insertBlogPost
export const insertBlogPost = async (author, title, content) => {
    const query = 'INSERT INTO blog_post (author, title, content) VALUES (?, ?, ?)';

    const [results] = await pool.query(query, [author, title, content]);

    return results;
};

export const updateBlogPost = async (id, title, content) => {
    const query = 'UPDATE blog_post SET title = ?, content = ? WHERE id = ?';

    const [results] = await pool.query(query, [title, content, id]);

    return results;
};

export const deleteBlogPost = async (id) => {
    const query = 'DELETE FROM blog_post WHERE id = ?';

    const [results] = await pool.query(query, [id]);

    return results;
};


export const getAllPosts = async () => {
    const query = 'SELECT * FROM blog_post';

    let [results] = await pool.query(query);
    results = results.map((data) => {
        data.content = data.content.toString('utf-8');
        return data;
    })

    return results;
};

export const getBlogPost = async (id) => {
    const query = 'SELECT * FROM blog_post WHERE id = ?';

    const [results] = await pool.query(query, [id]);

    return results;
}