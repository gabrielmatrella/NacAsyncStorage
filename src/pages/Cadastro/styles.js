import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RegisterInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  margin-top: 5px;
  background-color: #d5dfdc;
  padding: 10px;
`;

export const RegisterText = styled.Text`
  margin-bottom: ${(props) => props.marginb + '%'};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size + 'px'};
`;
