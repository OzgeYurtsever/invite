/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  labelName: {
    id: `${scope}.nameLabel`,
    defaultMessage: 'Name:',
  },
  labelCheckBox: {
    id: `${scope}.RSVPLabel`,
    defaultMessage: 'RSVP:',
  },
  button: {
    id: `${scope}.inviteButton`,
    defaultMessage: 'Invite',
  },
});
