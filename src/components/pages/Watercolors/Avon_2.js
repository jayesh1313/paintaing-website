import React from 'react';
import './ProductItem.css';
import Avon_2 from '../../../images/Website_Photos/Avon_2.JPG'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Avon_2} target="_blank">
            <Image src={Avon_2} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container text-center">
                <h2>Avon 2</h2>
                <p>$50</p>
                <p>Dimensions: 9x12</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Avon_2     &amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{' '}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Avon 2</h2>
                <p>$50</p>
                <p>Dimensions: 9x12</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Avon_2     &amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{' '}   
                </a> 
                </div>
            </div>
        </div>

        <div className="whitespace-container"></div>
    </>
    
    );

  }
  

  
  export default ProductItem;