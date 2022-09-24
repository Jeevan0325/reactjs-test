import React from   'react';
import Navbar from './Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Testimonal.css'


const Testimonal = () => {
    return(
        <div>
            <Navbar />
            <div className="testimonal">
                
            
    
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                    >
                        <div>
                        <h1>Teatimoials</h1>
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png" alt='' />
                        <div className="myCarousel">
                            <h3>Shirley Fultz</h3>
                            <h4>Designer</h4>
                            <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                            </p>
                        </div>
                        </div>

                        <div>
                        <h1>Teatimoials</h1>
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png" alt=''/>
                        <div className="myCarousel">
                            <h3>Daniel Keystone</h3>
                            <h4>Designer</h4>
                            <p>
                            The simple and intuitive design makes it easy for me use. I highly
                            recommend Fetch to my peers.
                            </p>
                        </div>
                        </div>

                        <div>
                        <h1>Teatimoials</h1>
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png" alt='' />
                        <div className="myCarousel">
                            <h3>Theo Sorel</h3>
                            <h4>Designer</h4>
                            <p>
                            I enjoy catching up with Fetch on my laptop, or on my phone when
                            I'm on the go!
                            </p>
                        </div>
                        </div>
                </Carousel>

            </div>
        </div>
    )
}
export default Testimonal;