import React, { Component } from 'react';
import slika6 from '../../Img/slider-image-6.jpg';
import slika7 from '../../Img/slider-image-7.jpg';
import slika8 from '../../Img/slider-image-8.jpg';
import slika9 from '../../Img/slider-image-9.jpg';
class secondRowImage extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
    }
    render() {
        return (
            <ul className="secondRow">
                    {(this.props.articles.length>0)?
                        
              //  this.state.articles.slice(0, Math.round(this.state.articleLength/2)).map(article => (
              //   <FirstRowImage 
              //     ref="firstRow"
              //     articles={this.state.articles}
              //     key={article.title}
              //   />
              //  ))
                        //console.log(this.props.articles)
                        //console.log(this.props.articles)
                        this.props.articles.map((article, index) => (
                             <li><img src={this.props.articles[index].urlToImage}/></li>
                            //console.log(this.props.article)
                          ))
                        // <li><img src={this.props.articles[0].urlToImage}/></li>
                        // <li><img src={this.props.articles[1].urlToImage}/></li>
                        // <li><img src={this.props.articles[2].urlToImage}/></li>
                        // <li><img src={this.props.articles[3].urlToImage}/></li>
                        // <li><img src={this.props.articles[4].urlToImage}/></li>
                        :
                        <li><img src={slika6}/></li>

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

export default secondRowImage;