import React from "react";
import Modal from './components/Modal';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false,
            variant: "bottom"
        }
    }

    

    handleClick = () => {
        this.setState({modalOpen: true});
    }

    closeModal = () => {
        this.setState({modalOpen: false});
    }
   

    render () {
        return <div>
                    <button style={{background:"aqua",borderRadius:"5px",padding:"5px",margin:"20px auto",display:"block"}} onClick={this.handleClick}>Click for cards!</button>
                    { this.state.modalOpen && 
                    <Modal isOpen={this.state.modalOpen}
                           variant={this.state.variant}
                           closeModal={this.closeModal}

                    />
                    } 
                </div> 
    }

}

export default App;

