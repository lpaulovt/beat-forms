import * as React from 'react';

import {Container, Label} from './styles';
const Button = ({label, onpress, ...rest}) => {
  return (
    <Container onPress={() => onpress()} {...rest}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
