import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
background: #565656;
border: 0;
border-radius: 22px;
position: relative;

color: #FFFFFF;
font: Open Sans;
font-weight: 400;
font-size: 18px;
line-height: 24.51px;
padding: 2px 8px;
margin-right: 16px;
min-width: 120px;
width: 100%;

&:  hover{
  opacity: 0.6;
  cursor: pointer;
}

${({variant}) => variant !== "primary" && css`
  min-width: 167px;
  height: 33px;

  background: #E4105D;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &::after{
    content: '';
    position: absolute;
    border: 1px solid #E4105D;
    top: -5px;
    left: -6px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 22px;
  }
`}
`