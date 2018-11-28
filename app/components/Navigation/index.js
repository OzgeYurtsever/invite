/**
 *
 * Header
 *
 */

import React from 'react';
import Link from './Link';
import Navbar from './Navbar';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const Navigation = () => (
  <Navbar>
    <Link className="navigation" to="/">
      Home
    </Link>
    <Link className="navigation" to="/invitees">
      Invitee List
    </Link>
  </Navbar>
);

export default Navigation;
