import React from 'react';
import './ProductItem.css';
import Sunset from '../../../images/Website_Photos/Sunset.jpg'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Sunset} target="_blank">
            <Image src={Sunset} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container text-center">
                <h2>Sunset</h2>
                <p>$250</p>
                <p>Dimensions: 22x30</p>    
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Sunset&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{''}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Sunset</h2>
                <p>$250</p>
                <p>Dimensions: 22x30</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Sunset&amp;body=Hello%20Tony,&amp;">
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