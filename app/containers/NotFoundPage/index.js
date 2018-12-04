import React from 'react';
import { FormattedMessage } from 'react-intl';

import H2 from '../../components/H4';
import messages from './messages';
import Section from '../../components/Header';

const NotFound = () => (
  <Section>
    <H2>
      <FormattedMessage {...messages.header} />
    </H2>
  </Section>
);

export default NotFound;
