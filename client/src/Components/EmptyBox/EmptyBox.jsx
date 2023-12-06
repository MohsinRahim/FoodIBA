// FileUpload.js

import React from 'react';
import { Card, CardContent } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styles from './EmptyBox.module.css'; // Adjust the path to your CSS module

export default function Emptiness({ image }) {
  return (
    <div className={styles.uploadContainer}>
      <Card variant="outlined" className={styles.uploadCard}>
        {image && <img src={image} alt="Uploaded" className={styles.imageDisplay} />}
      </Card>
    </div>
  );
}
