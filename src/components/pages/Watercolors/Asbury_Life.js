import React from 'react';
import './ProductItem.css';
import Asbury_Life from '../../../images/Website_Photos/ASBURY_Life.JPG'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Asbury_Life} target="_blank">
            <Image src={Asbury_Life} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container text-center">
                <h2>Asbury Life</h2>
                <p>$150</p>
                <p>Dimensions: 14x20</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Asbury_Life&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{' '}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Asbury Life</h2>
                <p>$150</p>
                <p>Dimensions: 14x20</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%Asbury_Life&amp;body=Hello%20Tony,&amp;">
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