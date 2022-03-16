import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/img/LATASF.png'

class ImageGallery extends React.Component {
    render() {
        return (
            <div>
                
                <Carousel autoPlay interval="5000" transitionTime="1000">
                    <div>
                        <img src={img1} style={{ maxHeight: '35rem' }} alt="..." />
                        {/* <p className="legend">Foto 1</p> */}
                    </div>
                    <div>
                    <img src={img1} style={{ maxHeight: '35rem' }} alt="..."/>
                        {/* <p className="legend">Foto 2</p> */}
                    </div>
                    <div>
                    <img src={img1} style={{ maxHeight: '35rem' }} alt="..." />
                        {/* <p className="legend">Foto 3</p> */}
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGallery;