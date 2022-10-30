import styled from "styled-components";
// import { size } from "../../utils/size.utils";

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4px;
  cursor: pointer;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: ${({ variant }) =>
    variant === "primary" ? "white" : "palevioletred"};
  background: ${({ variant }) =>
    variant === "primary" ? "palevioletred" : "white"};
 

  ${({ disabled }) => {
    return `
        ${
          disabled &&
          ` opacity: 0.4;
            cursor: not-allowed;
          `
        }
    `;
  }}
`;

