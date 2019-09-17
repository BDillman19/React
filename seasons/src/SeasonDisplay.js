import React from 'react';

const SeasonDisplay = (props) => {
if (props.errorMessage !== '') {
  return <div>{props.errorMessage}</div>
}

  if (props.lat > 0) {
    return (
    <div>Its chilly <br />
      Latitude: {props.lat}
    </div>
    )
  } else if (props.lat < 0) {  
    return <div>Let's go to the beach</div>
  }

  return <div>Loading!</div>
};

export default SeasonDisplay;