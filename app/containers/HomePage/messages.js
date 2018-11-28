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
  header: {
    id: `${scope}.homePageHaader`,
    defaultMessage: 'Plan your event, who is coming?',
  },
  subHeader: {
    id: `${scope}.homePageSubHaader`,
    defaultMessage: 'Create your invitee list!',
  },
});
