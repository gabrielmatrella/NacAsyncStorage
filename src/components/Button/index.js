import React from 'react';
import * as S from './styles';

const Button = ({children, width, marginTop, onPress}) => {
  console.log(width);
  return (
    <S.Button width={width} marginTop={marginTop} onPress={onPress}>
      {children}
    </S.Button>
  );
};

export default Button;
