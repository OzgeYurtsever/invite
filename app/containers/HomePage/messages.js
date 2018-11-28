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

  button: {
    id: `${scope}.inviteButton`,
    defaultMessage: 'Invite',
  },

  header: {
    id: `${scope}.homePageHaader`,
    defaultMessage: 'Start planning your event, who is coming?',
  },

  subHeader: {
    id: `${scope}.homePageSubHaader`,
    defaultMessage: 'Create your invitee list!',
  },

  saving: {
    id: `${scope}.homePageSave`,
    defaultMessage: 'Saving the name to the list!',
  },

  error: {
    id: `${scope}.homePageErro`,
    defaultMessage: 'Something went wrong, please try again!',
  },
});
