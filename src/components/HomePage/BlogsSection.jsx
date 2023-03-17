import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function BlogsSection() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='bg-[#EAF8F9] p-20'>
       <h1 className='text-5xl uppercase font-medium pb-20'>Recent Blogs</h1>
       <Carousel 
       responsive={responsive}
       >
       <img src="./slides.png" alt="slide" />
       <img src="./slides.png" alt="slide" />
       <img src="./slides.png" alt="slide" />
       <img src="./slides.png" alt="slide" />
       <img src="./slides.png" alt="slide" />
       <img src="./slides.png" alt="slide" />
       <img src="./slides.png" alt="slide" />
    </Carousel>
    </section>
  )
}

export default BlogsSection