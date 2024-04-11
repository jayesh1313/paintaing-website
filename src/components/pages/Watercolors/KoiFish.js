import React from 'react';
import './ProductItem.css';
import KoiFish from '../../../images/Website_Photos/Koi_1.JPG'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={KoiFish} target="_blank">
            <Image src={KoiFish} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container text-center">
                <h2>Koi Fish</h2>
                <p>$50</p>
                <p>Dimensions: 9x9</p>    
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20KoiFish&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{''}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Koi Fish</h2>
                <p>$50</p>
                <p>Dimensions: 9x9</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20KoiFish&amp;body=Hello%20Tony,&amp;">
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