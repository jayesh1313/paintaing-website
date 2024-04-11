import React from 'react';
import './ProductItem.css';
import Zodiac_2 from '../../../images/Website_Photos/Zodiac_2.JPG'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Zodiac_2} target="_blank">
            <Image src={Zodiac_2} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container text-center">
                <h2>Zodiac 2</h2>
                <p>$50</p>
                <p>Dimensions: 16x16</p>    
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Zodiac2&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{''}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Zodiac 2</h2>
                <p>$50</p>
                <p>Dimensions: 16x16</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Zodiac2&amp;body=Hello%20Tony,&amp;">
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