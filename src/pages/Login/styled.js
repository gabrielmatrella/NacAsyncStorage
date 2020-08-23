import styled from 'styled-components';
import Button from '../../components/Button';

export const SubmitWrapper = styled.View`
  flex-flow: column;
  align-items: center;
  width: 80%;
  margin: 40px auto;
`;

export const Option = styled(Button)``;

export const Title = styled.Text`
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  margin-top: 50px;
  background-color: #d5dfdc;
  padding: 10px;
  margin: 5px auto 5px;
`;
