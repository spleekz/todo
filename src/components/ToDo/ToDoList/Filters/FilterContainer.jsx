import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../../../redux/reducers/ToDoReducer';
import Filters from './Filters';

class FilterContainer extends React.Component {
  render() {
    return (
      <Filters {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    filters: state.toDo.filtersList,
    tasks: state.toDo.tasks,
  }
}
export default connect(mapStateToProps, { setFilter })(FilterContainer)