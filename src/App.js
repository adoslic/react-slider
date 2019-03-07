import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import {Container, Row, Col} from 'react-bootstrap';
import './App.scss';
import slika1 from './Img/slider-image-1.jpg';
import slika2 from './Img/slider-image-2.jpg';
import slika3 from './Img/slider-image-3.jpg';
import slika4 from './Img/slider-image-4.jpg';
import slika5 from './Img/slider-image-5.jpg';
import slika6 from './Img/slider-image-6.jpg';
import slika7 from './Img/slider-image-7.jpg';
import slika8 from './Img/slider-image-8.jpg';
import slika9 from './Img/slider-image-9.jpg';
//import Dstrelica from './Img/arrow-gray-right.png';
//import Lstrelica from './Img/arrow-gray-left.png';

import FirstRowImage from './Components/firstRowImage';
import SecondRowImage from './Components/secondRowImage';
//const firstRow = ['../../Img/slider-image-1.jpg', '../../Img/slider-image-2.jpg', '../../Img/slider-image-3.jpg', '../../Img/slider-image-4.jpg', '../../Img/slider-image-5.jpg'];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
      articleLength: 0
    }
  }
  componentWillMount() {
    let url = "https://newsapi.org/v2/top-headlines?q=&country=us&category=&apiKey=f100b3cb4ed147d192f5237f42e0970c";
    //console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.articles,
            articleLength: result.articles.length
          });
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
    
  rightClick = () =>{
    //console.log("desno");
    let x= ReactDOM.findDOMNode(this.refs.firstRow).firstChild;
    //this.refs.firstRow.firstChild;

    ReactDOM.findDOMNode(this.refs.firstRow).append(x);
    /*this.refs.firstRow.append(x);;*/

    /*let y= this.refs.secondRow.firstChild;
    this.refs.secondRow.append(y)*/
    let y= ReactDOM.findDOMNode(this.refs.secondRow).firstChild;
    ReactDOM.findDOMNode(this.refs.secondRow).append(y);
  }
  leftClick = () =>{
    //console.log("lijevo");
    //let x= this.refs.firstRow.lastChild;
    let x= ReactDOM.findDOMNode(this.refs.firstRow).lastChild;
    //this.refs.firstRow.prepend(x);
    ReactDOM.findDOMNode(this.refs.firstRow).prepend(x);

    /*let y= this.refs.secondRow.lastChild;
    this.refs.secondRow.prepend(y);*/

    let y= ReactDOM.findDOMNode(this.refs.secondRow).lastChild;
    ReactDOM.findDOMNode(this.refs.secondRow).prepend(y);
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="left">
            <div>
              
              <FirstRowImage
                ref="firstRow"
                articles={this.state.articles.slice(0, 5)}
                //length={this.state.articleLength}
              />

              <ul className="arrows">
                <li className="Dstrelica"
                  onClick={this.rightClick}>
                  <div className="img"></div>
                </li>
                <li className="Lstrelica"
                  onClick={this.leftClick}>
                  <div className="img"></div>
                </li>
              </ul>

              <SecondRowImage
                 ref="secondRow"
                 articles={this.state.articles.slice(5, 10)}
                 //length={this.state.articleLength}
              />
            </div>
          </div>
          <div className="right">
            <h2>Lorem ipsum dolor sit amet consectetur adipiscing elit</h2>
            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
