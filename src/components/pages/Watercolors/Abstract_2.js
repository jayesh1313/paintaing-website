import React from 'react';
import './ProductItem.css';
import Abstract_2 from '../../../images/Website_Photos/Abstract_2.JPG'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

function ProductItem() {
    return (
    <>  
        {/* <div className="container mt-4 text-center">
        <Alert variant="dark">Click the image to enlarge!</Alert>
        </div> */}
        <div className="image-container">
            <a href={Abstract_2} target="_blank">
            <Image src={Abstract_2} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container">
                <h2>Abstract 2</h2>
                <p>$200</p>
                <p>Dimensions: 18x24</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Abstract2&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{' '}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Abstract 2</h2>
                <p>$200</p>
                <p>Dimensions: 18x24</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Abstract2&amp;body=Hello%20Tony,&amp;">
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