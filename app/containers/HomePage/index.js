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
import { makeSelectError, makeSelectSaving } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getName } from './actions';
import { saveName } from '../App/actions';
import Section from '../../components/Header';
import H4 from '../../components/H4';
import H2 from '../../components/H2';
import Button from './Button';
import Label from './label';
import Input from './input';
import P from './P';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>HomePage</title>
        </Helmet>
        <Section>
          <H2 className="header">
            <FormattedMessage {...messages.header} />
          </H2>
          <H4 className="sub-header">
            <FormattedMessage {...messages.subHeader} />
          </H4>
          <form
            id="addNameForm"
            onSubmit={e => {
              this.props.onInvite(e, this.props.name);
            }}
          >
            <Label htmlFor="name-field">
              <FormattedMessage {...messages.labelName} />
              <Input
                type="text"
                name="name"
                id="name-field"
                ref={node => {
                  this.input = node;
                }}
                onChange={this.props.getName}
              />
            </Label>
            <Button className="invite-button">
              <FormattedMessage {...messages.button} />
            </Button>
          </form>
        </Section>
        <P>
          {this.props.error ? <FormattedMessage {...messages.error} /> : null}
        </P>
      </div>
    );
  }
}

HomePage.propTypes = {
  name: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  saving: PropTypes.bool,
  getName: PropTypes.func,
  onInvite: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
  saving: makeSelectSaving(),
  error: makeSelectError(),
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
