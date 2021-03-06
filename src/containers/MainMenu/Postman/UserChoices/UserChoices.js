import React from "react";

// import ActionButtons and ChatBubbles
import ActionButton from "../../../../components/ActionButton/ActionButton";

const UserChoices = (props) => {
  return (
    <>
      {props.response.map((r, id) => {
        return (
          <ActionButton key={r} clicked={() => props.userRespondedWith(id)}>
            {r}
          </ActionButton>
        );
      })}
    </>
  );
};

export default UserChoices;
