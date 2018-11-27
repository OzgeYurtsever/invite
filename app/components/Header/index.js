/**
 *
 * Header
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const Header = () => (
  <div>
    <NavLink className="navigation" to="/">
      Home
    </NavLink>
    <NavLink className="navigation" to="/invitees">
      Invitee List
    </NavLink>
  </div>
);

export default Header;
