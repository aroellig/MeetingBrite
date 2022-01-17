import React from 'react';
import { Link } from "react-router-dom"


const RsvpIndexItem = ({ rsvp,  currentUser, deleteRSVP }) => {
  return (
    <div>
          <button onClick={() => deleteRSVP(rsvp._id)}>
              Delete rsvp
            </button>
    </div>
  );
};
export default RsvpIndexItem
