import React, { useState } from 'react';
import { uploadFile } from './fetcher';

function UploadFile() {
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        uploadFile(formData)
            .then((payload) => {
                console.log('success', payload);
            })
            .catch((err) => {
                console.log('error', err);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
        </form>
    );
}

export default UploadFile;
