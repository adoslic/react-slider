import React, { Component } from 'react';
import slika1 from '../../Img/slider-image-1.jpg';
import slika2 from '../../Img/slider-image-2.jpg';
import slika3 from '../../Img/slider-image-3.jpg';
import slika4 from '../../Img/slider-image-4.jpg';
import slika5 from '../../Img/slider-image-5.jpg';
const array = [slika1, slika2, slika3, slika4, slika5];
class firstRowImage extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
    }
    
    render() {
        return (
                
                <ul className="firstRow">
                    {(this.props.articles.length>0)?
                        
              //  this.state.articles.slice(0, Math.round(this.state.articleLength/2)).map(article => (
              //   <FirstRowImage 
              //     ref="firstRow"
              //     articles={this.state.articles}
              //     key={article.title}
              //   />
              //  ))

              //Math.round(this.props.length/2)
                        //console.log(this.props.articles)
                        this.props.articles.map((article, index) => (
                             <li><img src={this.props.articles[index].urlToImage}/></li>
                            
                        ))
                        // <li><img src={this.props.articles[0].urlToImage}/></li>
                        // <li><img src={this.props.articles[1].urlToImage}/></li>
                        // <li><img src={this.props.articles[2].urlToImage}/></li>
                        // <li><img src={this.props.articles[3].urlToImage}/></li>
                        // <li><img src={this.props.articles[4].urlToImage}/></li>
                        :
                        <li><img src={slika1}/></li>

                        // <li><img src={slika1}/></li>
                        // <li><img src={slika2}/></li>
                        // <li><img src={slika3}/></li>
                        // <li><img src={slika4}/></li>
                        // <li><img src={slika5}/></li> 
                    }
                </ul>
                
        );
      }
}

export default firstRowImage;