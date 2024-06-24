import React from 'react';

interface Props {
  person: string;
}

export const SayHello: React.FC<Props> = (props) => {
  const { person } = props;
  return <h1>Hello {person}</h1>;
};
