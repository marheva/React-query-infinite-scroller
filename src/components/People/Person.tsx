import React from "react";

function Person({ name = 'NO NAME', hairColor = 'NO HAIR', eyeColor = 'NO EYE' }: PersonPropsTypes): JSX.Element {
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  );
}

export default Person;