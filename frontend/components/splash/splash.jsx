import React, { Component } from 'react';

class Splash extends React.Component{
  constructor(props){
      super(props)
  }
    componentDidMount() {
        this.props.fetchRestaurants();
      }
    
    render(){
        console.log(this.props)
        const { restaurants, fetchRestaurants } = this.props;
        return(
            <div>
                {/* <img src="https://reservationo-seeds.s3.us-west-1.amazonaws.com/burger.png" /> */}
            </div>
        )
    }
}

export default Splash;