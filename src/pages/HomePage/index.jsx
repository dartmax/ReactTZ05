import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AutocompleteComponent} from "../../components";
import {getData} from "../../redux/actions";
import {dataSelector} from "../../redux/selectors";

const HomePage = ({
  getData,
  list
}) => {
  useEffect(() => {
    getData();
  }, [getData])

  return (
    <div>
      <AutocompleteComponent
        list={list} />
    </div>

  );
}

const mapStateToProps = state => ({
  list: dataSelector(state),
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getData
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage)