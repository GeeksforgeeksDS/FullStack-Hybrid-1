import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

const Product = (props) => {
    return (
        <Card sx={{ maxWidth: 345, mb:5 }}>
            <CardMedia
                sx={{ height: 190 }}
                image={props.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    ${props.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={`/products/${props.id}`} variant="contained">Share</Button>
            </CardActions>
        </Card>
    );
}
export default Product;
