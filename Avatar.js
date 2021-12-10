import React from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name => dispatch({
      type: "UPDATE_NAME",
      name: name
    })
  }
}

class Avatar extends React.Component {
  state = {
    photo: "https://share.getcloudapp.com/P8u8JlpB"
  };

  componentDidMount () {
    fetch("https://uifaces.co/api", {
	method: 'GET',
	headers: new Headers({
	  "X-API-KEY": [f92B1e3B5cd444a1a67bbece7d526648],
	 // "Accept": 'application/json',
	 // "Cache-Control": 'no-cache'
	})
})
    .then(response => response.json())
    .then(response => {
      console.log(response);
      
      this.setState({
        photo: response[0].photo
      });

      this.props.updateName(response[0].name)
    });
  }

  render () {
    return <Image source={{ uri: this.state.photo }} />;
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;