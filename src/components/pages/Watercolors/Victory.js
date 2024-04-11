import React from 'react';
import './ProductItem.css';
import Victory from '../../../images/Website_Photos/Victory.JPG'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Victory} target="_blank">
            <Image src={Victory} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container">
                <h2>Victory</h2>
                <p>SOLD</p>
                {/* <p>Dimensions: 12x16</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Abstract6&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{' '}   
                </a>     
                </div> */}
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Victory</h2>
                <p>SOLD</p>
                {/* <p>Dimensions: 12x16</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Abstract6&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{' '}   
                </a> 
                </div> */}
            </div>
        </div>

        <div className="whitespace-container"></div>
    </>
    
    );

  }
  

  
  export default ProductItem;