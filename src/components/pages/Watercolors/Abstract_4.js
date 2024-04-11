import React from 'react';
import './ProductItem.css';
import Abstract_4 from '../../../images/Website_Photos/Abstract_4.jpg'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Abstract_4} target="_blank">
            <Image src={Abstract_4} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container">
                <h2>Abstract 4</h2>
                <p>$350</p>
                <p>Dimensions: 21x21</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Abstract4&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{' '}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Abstract 4</h2>
                <p>$350</p>
                <p>Dimensions: 21x21</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Abstract4&amp;body=Hello%20Tony,&amp;">
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