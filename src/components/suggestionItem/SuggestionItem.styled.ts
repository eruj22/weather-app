import styled from "@emotion/styled";

const Wrapper = styled.article`
  border: 1px solid #1d3557;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 1.5rem;
`;

const Temp = styled.span`
  margin-top: 10px;
  font-size: 1.5rem;
`;

const Date = styled.span`
  font-size: 0.85rem;
  font-style: italic;
`;

export default {
  Date,
  Temp,
  Title,
  Wrapper,
};
