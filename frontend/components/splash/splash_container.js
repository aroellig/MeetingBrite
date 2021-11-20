import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions'
import Splash from './splash'


const mapStateToProps = state => ({
    restaurants: Object.values(state.entities.users)
  });

const mapDispatchToProps = dispatch => {
    return {
      fetchRestaurants: (filters) => dispatch(fetchRestaurants(filters)),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Splash);