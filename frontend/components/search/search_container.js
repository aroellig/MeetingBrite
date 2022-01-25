import { connect } from "react-redux";
import { fetchEvents } from "../../actions/event_action";
import Search from "./search";
import { withRouter } from "react-router";
const mapStateToProps = (state) => {
  return {
    events: Object.values(state.events),
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
