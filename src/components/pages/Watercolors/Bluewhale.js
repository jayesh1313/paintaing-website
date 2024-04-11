import React from 'react';
import './ProductItem.css';
import Bluewhale from '../../../images/Website_Photos/Bluewhale_1.jpg'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Bluewhale} target="_blank">
            <Image src={Bluewhale} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container text-center">
                <h2>Bluewhale</h2>
                <p>$75</p>
                <p>Dimensions: 9x12</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Bluewhale&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{''}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Bluewhale</h2>
                <p>$75</p>
                <p>Dimensions: 9x12</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Bluewhale&amp;body=Hello%20Tony,&amp;">
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