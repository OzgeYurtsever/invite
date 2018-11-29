/*
 * InviteeList Messages
 *
 * This contains all the text for the InviteeList container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.InviteeList';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Your Invitee List!',
  },

  subHeader: {
    id: `${scope}.subHeader`,
    defaultMessage: 'Total Number of Invitee: ',
  },

  emptyList: {
    id: `${scope}.InviteeListEmptyList`,
    defaultMessage: "You haven't add anyone to the invitee list yet!",
  },

  loading: {
    id: `${scope}.InviteeListLoading`,
    defaultMessage: 'Loading the list',
  },

  error: {
    id: `${scope}.InviteeListError`,
    defaultMessage: 'Something went wrong, please try again!',
  },
});
