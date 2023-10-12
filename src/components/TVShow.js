import React from "react";

function TVShow(props) {
  // console.log('in TVShow, props: ', props);

  return (
    <div>
      <br />
      <img src={props.show.image.medium} onClick={() => props.selectShow(props.show)} alt="" />
    </div>
  );
}

export default TVShow;