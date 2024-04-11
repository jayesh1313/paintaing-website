import React from 'react';
import './ProductItem.css';
import Asbury_3 from '../../../images/Website_Photos/ASBURY_CH_3.jpg'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Asbury_3} target="_blank">
            <Image src={Asbury_3} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container text-center">
                <h2>Asbury 3</h2>
                <p>$250</p>
                <p>Dimensions: 14x20</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Asbury_3&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{' '}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Asbury 3</h2>
                <p>$250</p>
                <p>Dimensions: 14x20</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%Asbury_3&amp;body=Hello%20Tony,&amp;">
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