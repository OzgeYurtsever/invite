import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from './Link';
import Navbar from './Navbar';
import messages from './messages';

const Navigation = () => (
  <Navbar>
    <Link className="navigation" to="/">
      <FormattedMessage {...messages.home} />
    </Link>
    <Link className="navigation" to="/invitees">
      <FormattedMessage {...messages.list} />
    </Link>
  </Navbar>
);

export default Navigation;
