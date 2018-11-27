/**
 *
 * InviteeList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import List from 'components/List';
import { makeSelectData } from './selectors';
import { getInvitees } from './actions';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class InviteeList extends React.Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>InviteeList</title>
          <meta name="description" content="Description of InviteeList" />
        </Helmet>
        <List data={this.props.data} />
      </div>
    );
  }
}

InviteeList.propTypes = {
  getList: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

function mapDispatchToProps(dispatch) {
  return {
    getList: () => dispatch(getInvitees()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'inviteeList', reducer });
const withSaga = injectSaga({ key: 'inviteeList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(InviteeList);
