import React from 'react';
import './ProductItem.css';
import Pathway from '../../../images/Website_Photos/Pathway.JPG'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Pathway} target="_blank">
            <Image src={Pathway} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container text-center">
                <h2>Pathway</h2>
                <p>$100</p>
                <p>Dimensions: 14x20</p>    
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Pathway&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{''}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Pathway</h2>
                <p>$100</p>
                <p>Dimensions: 14x20</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Pathway&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{''}   
                </a> 
                </div>
            </div>
        </div>

        <div className="whitespace-container"></div>
    </>
    
    );

  }
  

  
  export default ProductItem;