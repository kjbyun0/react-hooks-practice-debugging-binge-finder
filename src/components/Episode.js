import React from "react";

function Episode(props) {
  let { eachEpisode:myEpisode } = props;
  // console.log('in Episode, myEpisode: ', myEpisode);

  return (
    <div>
      Episode {myEpisode.number} - {myEpisode.name}
    </div>
  );
}

export default Episode;
