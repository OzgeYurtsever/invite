import React from 'react';
import PropTypes from 'prop-types';
import P from '../P';
import H3 from '../H3';
import ListItem from '../ListItem';
import DIV from '../Div';

const List = props => (
  <div>
    {props.data.length === 0 ? (
      <H3>There is nothing to show here yet!</H3>
    ) : (
      <ul>
        {props.data.map((invitee, index) => (
          <ListItem key={invitee.id}>
            <DIV>
              <input
                checked={invitee.hasConfirmed}
                type="checkbox"
                onChange={props.onChange}
                id={invitee.id}
                className={index}
              />
              <P>{invitee.name}</P>
            </DIV>
          </ListItem>
        ))}
      </ul>
    )}
  </div>
);

List.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func,
};

export default List;
