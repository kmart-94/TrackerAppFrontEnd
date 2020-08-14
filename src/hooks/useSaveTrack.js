import {useContext} from "react";
import {Context as TrackContext} from "../context/TrackContext";
import {Context as LocationContext} from "../context/LocationContext";

export default () => {
  const {createTrack} = useContext(TrackContext);
  const {state: {name, locations}, reset} = useContext(LocationContext);

  const saveTrack = async () => {
    //you could put await ahead of createTrack to
    //ensure it is made before we reset the form
      createTrack(name, locations);
      reset();
  };

  return [saveTrack];
};
