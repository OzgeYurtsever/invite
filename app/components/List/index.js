import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const List = props => (
  <div>
    <ol>
      {props.data.map(invitee => (
        <ListItem key={invitee.id}>{invitee.name}</ListItem>
      ))}
    </ol>
  </div>
);

List.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default List;
