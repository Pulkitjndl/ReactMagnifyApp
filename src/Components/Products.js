import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify'

import '../styles/examples.css';

import watchImg687 from '../Images/wristwatch_687.jpg';
import watchImg1200 from '../Images/wristwatch_1200.jpg';
import FoodHub687 from '../Images/foodhub_687.PNG';
import FoodHub1200 from '../Images/foodhub_1200.PNG';

export default class BasicExample extends Component {
    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                  <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: FoodHub687,
                        },
                        largeImage: {
                            src: FoodHub1200,
                            width: 1200,
                            height: 1800
                        }
                    }} />  
                </div>
                
                <div className="fluid__instructions">
                    <h3>Example</h3>
                    <p>
                         implemented a zoom functionality,
                    </p>
                    <p>
                        Please hover the cursor over the image
                    </p>
                    <p>
                       To check result
                    </p>
                    <br/>
                    <footer>
                      Developed by Pulkit
                    </footer>
                </div>
                <div style={{height: '500px'}} />
            </div>
        );
    }
}



