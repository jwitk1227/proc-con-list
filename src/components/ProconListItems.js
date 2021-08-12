import React from "react";

const ProconListItems = (props) => {
  return props.items.map((item, index) => {
    return <p key={`${index}${new Date().getTime()}`}>{item}</p>;
  });
};

export default ProconListItems;
