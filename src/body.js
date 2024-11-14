import React from 'react';
import { Box, Typography, Stack, Paper, Rating } from '@mui/material';


const movies = [
  { title: "RRR", image: "rrr.jpg", rating: 5 },
  { title: "PREMALU", image: "premalu.jpg", rating: 5 },
  { title: "SITA RAMAM", image: "sita ramam.avif", rating: 4 },
  { title: "KGF", image: "KGF.jpg", rating: 5 },
  { title: "SWAG", image: "swag.jpg", rating: 4},
  { title: "THE  BUCKINGHM MURDERS", image: "the.jpg", rating: 5 },
  { title: "DO PATTI", image: "do patti.webp", rating: 5 },
  { title: "VIJAY 69", image: "vijay.jpg", rating: 4 },
  
]


function MoviePage() {
  return (
    <Box sx={{ flex: 1, p: 2, position: 'relative',backgroundColor:'black',marginLeft:'170px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 3,Color:'black' }}>
      </Typography>
      <Stack spacing={1} direction="row" sx={{ justifyContent: 'center', mb: 4,color:'black'}}>
        
      </Stack>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 1,
          color:'black'
        }}
      >
        {movies.map((movie) => (
          <Paper
            key={movie.title}
            elevation={10}
            sx={{
              width: 250,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 2,
              borderRadius: 2,
              backgroundColor:'blue',
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              {movie.title}
            </Typography>
            <Rating name="read-only" value={movie.rating} readOnly />
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default MoviePage;