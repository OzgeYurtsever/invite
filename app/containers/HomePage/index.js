/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectName } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <form id="addNameForm" onSubmit={this.handleInvite}>
          <label htmlFor="name-field">
            <FormattedMessage {...messages.labelName} />
            <input
              type="text"
              name="name"
              id="name-field"
              // ref={node => {
              //   this.input = node;
              // }}
              // onChange={this.handleNameInput}
            />
          </label>
          <label htmlFor="rsvp-check">
            <FormattedMessage {...messages.labelCheckBox} />
            <input
              type="checkbox"
              name="rsvp"
              id="rsvp-check"
              // ref={node => {
              //   this.checkbox = node;
              // }}
              // onClick={this.handleRSVPCheck}
            />
          </label>
          <input type="submit" value="Invite" className="invite-button" />
        </form>
        {/* <FormattedMessage {...messages.header} /> */}
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectName(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
