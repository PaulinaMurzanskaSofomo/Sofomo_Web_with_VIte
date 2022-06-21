import styled from "styled-components";

interface IStyledArrow {
  backgroundColor?: string;
  width?: string;
  color?: string;
}

export const StyledDottedArrow = styled.div<IStyledArrow>`
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  padding: 20px;
  &.left {
    transform: rotate(-180deg);
  }
  &.up {
    transform: rotate(-90deg);
  }
  &.down {
    transform: rotate(90deg);
  }
  svg {
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    rect {
      fill: ${({ color }) => color};
    }
  }
`;
