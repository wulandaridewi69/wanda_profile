"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import styles from '../styles/rating.module.scss';




const BasicRating = (props) => {
    // const [value, setValue] = React.useState(2);

    return (
        <div className={styles.ratingGroup}>
            {props.data.result.map((item) => {
                return <div key={item.id}>
                    <Box className={styles.ratings} sx={{ '& > legend': { mt: item.value } }}>
                        <Typography className={styles.title} component="legend">{item.title}</Typography>
                        <Rating
                            name="simple-controlled"
                            value={item.value}
                        />
                    </Box>
                </div>

            })};
        </div>
    );
}

export default BasicRating;
