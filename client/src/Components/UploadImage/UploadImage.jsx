import React from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { Card, CardContent } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styles from './UploadImage.module.css'; // Ensure this path is correct

export default function UploadImage({ onImageUpload }) {

    const handleFileChange = async (event) => {
        
        const file = event.target.files[0];
        if (file) {
        
          const imageUrl = URL.createObjectURL(file);
            onImageUpload(imageUrl); // This will update the image preview in the UI

            // Prepare the file to be sent in a FormData object
            const formData = new FormData();
            formData.append('file', file);
            
            // Send the image to the FastAPI server
          await axios.post('http://127.0.0.1:8000/process_image/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
              console.log('Server response:', response.data); // Handle or display the response as needed
          })
          .catch(error => {
              console.error('Error uploading image:', error);
          });
        }
    };

    return (
        <div className={styles.uploadContainer}>
            <Card variant="outlined" className={styles.uploadCard}>
                <CardContent className={styles.uploadCardContent}>
                    <input
                        accept="image/*"
                        className={styles.input}
                        id="file-upload"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <label htmlFor="file-upload">
                        <CloudUploadIcon style={{ fontSize: '4rem', cursor: 'pointer' }} color="action" />
                    </label>
                    <p className={styles.uploadText}>Drag and drop file here or click to upload</p>
                    <p className={styles.uploadInstructions}>Size should not exceed 10MB, aspect ratio should be less than 2, and GIF format is not supported</p>
                </CardContent>
            </Card>
        </div>
    );
}
