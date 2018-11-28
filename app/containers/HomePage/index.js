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
import { getName } from './actions';
import { saveName } from '../App/actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <form
          id="addNameForm"
          onSubmit={e => {
            this.props.onInvite(e, this.props.name);
          }}
        >
          <label htmlFor="name-field">
            <FormattedMessage {...messages.labelName} />
            <input
              type="text"
              name="name"
              id="name-field"
              ref={node => {
                this.input = node;
              }}
              onChange={this.props.getName}
            />
          </label>
          <input type="submit" value="Invite" className="invite-button" />
        </form>
      </div>
    );
  }
}

HomePage.propTypes = {
  name: PropTypes.string,
  getName: PropTypes.func,
  onInvite: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getName: e => {
      dispatch(getName(e.target.value));
    },
    onInvite: (e, name) => {
      e.preventDefault();
      if (!name || !name.trim()) {
        return;
      }
      dispatch(saveName());
      dispatch(getName(''));
      e.target.reset();
    },
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
