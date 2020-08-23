import React from 'react';
import * as S from './styles';

const Button = ({children, onPress}) => {
  return (
    <S.Button 
      onPress={onPress}
    >
      {children}
    </S.Button>
  );
};

export default Button;
