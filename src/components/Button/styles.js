import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: #29bc64;
  width: ${(props) => props.width + '%'};
  padding: 10px;
  margin-top: ${(props) => props.marginTop + 'px'};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
