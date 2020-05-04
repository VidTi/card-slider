import React from 'react';
import Slider from "./Slider";
import "../css/Modal.css";
import offerIcon from "../assets/icons/Offer.svg";
import closeIcon from "../assets/icons/Close.svg";

class Modal extends React.Component {
   constructor(props) {
  	super(props);
    this.state = {
      cards: {}
    }
   }

   componentDidMount() {
      fetch(`http://demo9772522.mockable.io/`)
      .then( (resp) => {
          resp.json().then( (data) => {
              console.log(data);
              this.setState({
                  cards: data.cards
              });
          });
      });
   }

  render () {
        return <div className="modal">
                { this.props.variant==="bottom" && 
                <div className="bottomVariantBg">
                    <div className="bottomVariantHeading">
                      <img className="offerIcon" src={offerIcon}/>
                      More Offers
                      <img className="closeIcon" src={closeIcon} onClick={this.props.closeModal}/>
                    </div>
                    <Slider cards={this.state.cards}/>
                </div>
                }
               </div> 
  }
}

export default Modal;