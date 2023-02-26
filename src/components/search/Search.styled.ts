import styled from "@emotion/styled";

const Container = styled.form`
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  padding: 10px 30px;
  width: calc(100% - 60px);
  background-color: #a8dadc;
  font-size: 1.25rem;
  color: inherit;
  border-radius: 6px;
`;

export default {
  Container,
  Input,
};
