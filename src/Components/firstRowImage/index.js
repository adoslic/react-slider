import React, { Component } from 'react';
import slika1 from '../../Img/slider-image-1.jpg';
//import slika2 from '../../Img/slider-image-2.jpg';
//import slika3 from '../../Img/slider-image-3.jpg';
//import slika4 from '../../Img/slider-image-4.jpg';
//import slika5 from '../../Img/slider-image-5.jpg';
//const array = [slika1, slika2, slika3, slika4, slika5];

class firstRowImage extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
    }
    
    render() {
        return (
                <ul className="firstRow">
                    {(this.props.articles.length>0)?
                        this.props.articles.map((article, index) => (
                            (index==0)?
                            <li /*className="Opacity"*/
                                key={index}>
                                <img src={this.props.articles[index].urlToImage}/>
                            </li>
                            :
                            <li key={index}>
                                <img src={this.props.articles[index].urlToImage}/>
                            </li>
                        ))
                        :
                        <li><img src={slika1}/></li>
                    }
                    {
                        // (img.classList.contains("Opacity"))?{
                        //     this.classList.add
                        // }
                        // :{
                        //     //
                        // }
                    }
                </ul>
        );
      }
}

export default firstRowImage;