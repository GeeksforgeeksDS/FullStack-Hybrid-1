import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';

const ProductList = (props)=> {
  return (
    <Box sx={{ flexGrow: 1, width:'70vw', margin:'2rem auto' }}>
          <Grid container spacing={2}>
              {
                  props.products.map((product) => {
                      return (
                          <Grid key={product.id} size={{ xs: 12, md: 6, lg: 4 }}>
                              <Product
                                  title={product.title}
                                  price={product.price}
                                  image={product.image}
                              />
                          </Grid>
                      )
                  })
              }
      </Grid>
    </Box>
  );
}

export default ProductList
