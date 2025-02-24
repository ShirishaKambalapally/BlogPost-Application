
import React, { useState } from "react";
import './contentForm.css';
import axios from "axios";

const ContentForm = () => {
    // State to store form values
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        content: ''
    });

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission

    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            console.log("Form Submitted");
            console.log(formData); // Print form data to the console
            const config = {
                url: "http://localhost:3001/api/create",
                data: formData,
                method: "POST",
                headers: {}
            }
            const response = await axios.request(config);

            if (response.status == 200) {
                alert("Blog Created Successfully");
            }
            else {
                alert("something went wrong");
            }
        }
        catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1> Blog Entry Form</h1>

            <div id='id1'>
                <input
                    type="text"
                    placeholder="Enter title"
                    name="title" // Name attribute links this to state
                    value={formData.title} // Controlled input
                    onChange={handleInputChange} // Handle changes
                />
            </div>

            <div id='id2'>
                <input
                    type="text"
                    placeholder="Enter author name"
                    name="author" // Name attribute links this to state
                    value={formData.author} // Controlled input
                    onChange={handleInputChange} // Handle changes
                />
            </div>

            <div id='id3'>
                <textarea
                    title="content"
                    placeholder="Enter content"
                    name="content" // Name attribute links this to state
                    value={formData.content} // Controlled input
                    onChange={handleInputChange} // Handle changes
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default ContentForm;

// import React from "react";
// import './contentForm.css';



// const ContentForm = () => {

//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent default form submission
//         console.log("Form Submitted"); // Log message to console
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h1> Blog Entry Form</h1>

//             <div id='id1'>
//                 <input type="text" placeholder=" Enter title" />
//             </div>

//             <div id='id2' >
//                 <input type="text" placeholder=" Enter author name" />
//             </div>

//             <div id='id3'>
//                 <textarea
//                     title="content"
//                     placeholder="Enter content"
//                 />
//             </div>

//             <button type="submit">Submit</button>
//         </form>

//     );

// }

// export default ContentForm; 