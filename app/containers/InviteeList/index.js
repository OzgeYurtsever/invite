import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import List from 'components/List';
import { makeSelectData, makeSelectError } from './selectors';
import { makeSelectLoading } from '../App/selectors';
import { getInvitees } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import H4 from '../../components/H4';
import H2 from '../../components/H2';

import Section from '../../components/Header';

export class InviteeList extends React.Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Invitee List</title>
        </Helmet>
        <Section>
          <H2>
            <FormattedMessage {...messages.header} />
          </H2>
          {this.props.data.length === 0 ? (
            <H4>
              <FormattedMessage {...messages.emptyList} />
            </H4>
          ) : (
            <List data={this.props.data} />
          )}
          {this.props.error ? <FormattedMessage {...messages.error} /> : null}
        </Section>
      </div>
    );
  }
}

InviteeList.propTypes = {
  getList: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
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
