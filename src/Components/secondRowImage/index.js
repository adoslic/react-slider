import React, { Component } from 'react';
import slika6 from '../../Img/slider-image-6.jpg';
// import slika7 from '../../Img/slider-image-7.jpg';
// import slika8 from '../../Img/slider-image-8.jpg';
// import slika9 from '../../Img/slider-image-9.jpg';
class secondRowImage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
                <ul className="secondRow">
                    {(this.props.articles.length>0)?
                        this.props.articles.map((article, index) => (
                            <li key={index}><img src={this.props.articles[index].urlToImage}/></li>
                        ))
                        :
                        <li><img src={slika6}/></li>
                    }
                </ul>
        );
      }
}

export default secondRowImage;