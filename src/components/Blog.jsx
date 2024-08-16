// src/components/Blog.jsx
import React, { useState } from 'react';
import { Container, Typography, Box, AppBar, Toolbar, Paper, Avatar, Link, Grid, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ApiIcon from '@mui/icons-material/Api';
import NewsletterSubscription from './NewsletterSubscription';
import Footer from './Footer';

// Custom theme to override default typography
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontFamily: 'Arial, sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Georgia, serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Verdana, sans-serif',
    },
    body2: {
      fontFamily: 'Tahoma, sans-serif',
    },
  },
});

// EditorDetails Component
const EditorDetail = ({ name, imageUrl, publicationDate }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
    <Avatar src={imageUrl} sx={{ width: 56, height: 56, marginRight: '10px' }} />
    <Box>
      <Typography variant="caption" display="block">
        Published on {publicationDate}
      </Typography>
      <Typography variant="body2">
        {name}
      </Typography>
    </Box>
  </Box>
);

// RightSideLinks Component
const RightSideLinks = () => (
  <Box sx={{ padding: '20px', backgroundColor: '#FFF', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
    <Typography variant="h6">Related Sources:</Typography>
    <Link href="https://fstoppers.com/education/importance-cropping-7-reasons-why-should-use-crop-672898" target="_blank" rel="noopener" sx={{ display: 'block', marginBottom: '10px' }}>
      Importance of Cropping
    </Link>
    <Link href="https://www.nationalgeographic.com/photography/article/portrait-photography-tips" target="_blank" rel="noopener" sx={{ display: 'block', marginBottom: '10px' }}>
      Advanced Techniques for Portrait Photography
    </Link>
    <Link href="https://greatbigphotographyworld.com/jenifer-bunnett-interview/" target="_blank" rel="noopener" sx={{ display: 'block', marginBottom: '10px' }}>
      Interview with Jenifer Bunnett
    </Link>
    <Link href="https://www.naturephotographers.network/articles/" target="_blank" rel="noopener" sx={{ display: 'block', marginBottom: '10px' }}>
      Art of Nature Photography
    </Link>
    <Link href="https://example.com/article5" target="_blank" rel="noopener" sx={{ display: 'block', marginBottom: '10px' }}>
      The Art of Travel Photography
    </Link>
    <Link href="https://example.com/article6" target="_blank" rel="noopener" sx={{ display: 'block' }}>
      Packing Essentials for Travel Photography
    </Link>
  </Box>
);

const Blog = () => {
  const [expanded, setExpanded] = useState(null);

  const handleReadMore = (index) => {
    setExpanded(index);
  };

  const pageStyles = {
    backgroundColor: '#C4DFE6',
    minHeight: '100vh',
    padding: '40px',
  };

  const appBarStyles = {
    backgroundColor: '#66A5AD',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1100, // Ensure AppBar is above other content
  };

  const blogStyles = {
    padding: '20px',
    backgroundColor: '#FFF',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
  };

  const blogImageStyles = {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '15px',
  };

  const blogContent = [
    {
      title: "The Art of Capturing Moments",
      imageUrl: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D",
      summary: "Photography is not just about taking pictures; it's about capturing the essence of a moment. The art of photography allows us to freeze time and immortalize experiences that might otherwise fade away.",
      fullContent: "Photography is not just about taking pictures; it's about capturing the essence of a moment. The art of photography allows us to freeze time and immortalize experiences that might otherwise fade away. Whether it’s a candid shot of a loved one or a meticulously planned photoshoot, every photograph tells a unique story. Through the lens, we can convey emotions, tell stories, and preserve memories that last a lifetime. In portrait photography, the connection between the photographer and the subject plays a crucial role. Establishing trust and making the subject feel comfortable can lead to more authentic and engaging photos. Techniques such as using natural light and experimenting with different angles can greatly enhance the quality of the images. It’s not just about the technical aspects but also about creating an environment where the subject can truly be themselves. Another important aspect of photography is understanding the technical settings of your camera. Mastering the exposure triangle – aperture, shutter speed, and ISO – can make a significant difference in the outcome of your shots. Additionally, post-processing tools can help bring out the best in your photos and correct any imperfections. Learning to balance technical skill with artistic vision is key to becoming a successful photographer. Photography is an ever-evolving field with new technologies and trends emerging constantly. From digital cameras to smartphone photography, the tools and techniques available to photographers are more diverse than ever. Embracing these changes and continuously learning can help photographers stay at the forefront of their craft. It’s essential to keep exploring and adapting to new styles and innovations. At our photography studio, we are passionate about helping individuals and businesses capture their most important moments. Whether you are looking for professional portraits, event photography, or creative projects, we offer a range of services to meet your needs. Explore our portfolio and discover how we can help you preserve your memories. Our team of skilled photographers is dedicated to delivering exceptional results and making every shoot a memorable experience.",
      author: {
        name: "John Doe",
        imageUrl: "/images/editors/john_doe.jpg",
        publicationDate: "July 15, 2024",
      }
    },
    {
      title: "Tips for Perfect Portrait Photography",
      imageUrl: "https://www.lightstalking.com/wp-content/uploads/Photo-by-Marco-Xu.jpg",
      summary: "Portrait photography requires a blend of technical skill and artistic vision. To capture the perfect portrait, start by understanding the basics of lighting. Natural light is often the most flattering.",
      fullContent: "Portrait photography requires a blend of technical skill and artistic vision. To capture the perfect portrait, start by understanding the basics of lighting. Natural light is often the most flattering, but if you’re shooting indoors, consider using softboxes or diffusers to create a similar effect. Lighting can drastically impact the mood and feel of your portraits, so experimenting with different setups can lead to impressive results. Another key element is composition. Pay attention to the background and ensure it complements the subject rather than distracting from it. Using the rule of thirds can help create a more balanced and visually appealing image. Position the subject slightly off-center and let their gaze lead the viewer’s eye. Proper composition can transform a good portrait into a great one. Posing can make a big difference in how a portrait turns out. Encourage your subject to adopt natural and relaxed poses. Avoid stiff or awkward positions by engaging in conversation and making them feel at ease. Small adjustments, like tilting the head or shifting the weight, can add a more dynamic feel to the portrait. A comfortable subject will often result in more expressive and engaging portraits. Focus on capturing the emotions and personality of your subject. A genuine smile or a thoughtful expression can bring out the true character of the person being photographed. Additionally, consider experimenting with different lenses to achieve various effects, such as a shallow depth of field for a dreamy background. The goal is to capture not just an image, but the essence of the person. Post-processing is also a valuable tool in portrait photography. Use editing software to enhance colors, adjust contrast, and remove blemishes. However, aim for subtle adjustments that maintain the natural look of the portrait. The goal is to enhance the image without altering the authenticity of the subject. At our studio, we specialize in creating stunning portraits that reflect the true essence of each individual. Whether you need professional headshots or creative portraits, our experienced photographers are here to help you achieve your vision. Explore our portfolio and see how we can make your portrait sessions memorable.",
      author: {
        name: "Jane Smith",
        imageUrl: "/images/editors/jane_smith.jpg",
        publicationDate: "July 22, 2024",
      }
    },
 
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={pageStyles}>
        <AppBar position="fixed" sx={appBarStyles}>
          <Toolbar>
              <ApiIcon/>
            <Typography variant="h6" color="inherit">
              Photography Blog
            </Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ paddingTop: '80px' }}> 
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ flex: 3, paddingRight: '20px' }}>
              <Grid container spacing={3}>
                {blogContent.map((blog, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper elevation={3} sx={blogStyles}>
                      <img src={blog.imageUrl} alt={blog.title} style={blogImageStyles} />
                      <Typography variant="h5">{blog.title}</Typography>
                      <Typography variant="body1">{expanded === index ? blog.fullContent : blog.summary}</Typography>
                      <Button onClick={() => handleReadMore(index)}>
                        {expanded === index ? 'Read Less' : 'Read More'}
                      </Button>
                      <EditorDetail {...blog.author} />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <Box sx={{ width: '100%' }}>
                  <NewsletterSubscription />
                </Box>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <RightSideLinks />
            </Box>
          </Box>
        </Container>
      </Box>
        <Footer/>
    </ThemeProvider>
  );
};

export default Blog;
