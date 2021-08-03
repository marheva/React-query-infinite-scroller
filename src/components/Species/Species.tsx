import React from "react";

function Species({ name, language, averageLifespan }: SpeciesPropsTypes) {
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifespan}</li>
      </ul>
    </li>
  );
}
export default Species