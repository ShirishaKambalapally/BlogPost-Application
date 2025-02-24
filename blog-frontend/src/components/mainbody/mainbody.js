import React, { useEffect, useState } from "react";
import './mainbody.css';
import axios from "axios";


const Mainbody = () => {
    const [blogpost, setblogpost] = useState([])
    useEffect(() => {

        fetchdata();

    }, [])

    const fetchdata = async () => {
        let config = {
            url: "http://localhost:3001/api/fetchPosts",
            method: "GET"
        }
        let response = await axios.request(config);
        console.log(response.data);
        setblogpost(response.data);
    }

    return (

        <div className="mainbody-container">
            <h1>All Blogs</h1>
            {
                blogpost.length > 0 && blogpost.map((post) => {
                    return (
                        <div className="post">{post.title}</div>
                    )
                })
            }
        </div>

    );
};

export default Mainbody;