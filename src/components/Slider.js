import React from "react";
import Card from './Card';
import '../css/slider.css';

class Slider extends React.Component {
   constructor(props) {
  	super(props);
    this.state = {
    }
   }
   
  render () {
        const cards = this.props.cards;
        return <div className="cardContainer">
                {Object.keys(cards).map((key) => <Card key={key} 
                                                       cardTag={cards[key].card_tag}
                                                       offerLabel={cards[key].offer_label}
                                                       offerDesc={cards[key].offer_desc}
                                                       tnc={cards[key].tnc}
                                                       conditionLimit={cards[key].cond_limit}
                                                       campaignEndDate={cards[key].campaign_end_date}
                                                       goalAchievement={cards[key].goal_achievement}
                                                       cardColor={cards[key].card_bg}
                                                       cardTagColor={cards[key].card_tag_bg}
                                                       progressBarColor={cards[key].progress_bar_bg}
                                                       progress={cards[key].progress}
                                                       />
                                                 )}
                </div> 
  }
}

export default Slider;