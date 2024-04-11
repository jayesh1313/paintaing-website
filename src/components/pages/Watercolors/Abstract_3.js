import React from 'react';
import './ProductItem.css';
import Abstract_3 from '../../../images/Website_Photos/Abstract_3.JPG'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  
        <div className="image-container">
            <a href={Abstract_3} target="_blank">
            <Image src={Abstract_3} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container">
                <h2>Abstract 3</h2>
            <p>$150</p>
                <p>Dimensions: 18x24</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Abstract3&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{' '}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Abstract 3</h2>
                <p>$150</p>
                <p>Dimensions: 18x24</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Abstract3&amp;body=Hello%20Tony,&amp;">
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