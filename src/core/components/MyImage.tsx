import styled, { css } from 'styled-components'


interface Props {
  primary: boolean
}

export const MyImage = styled.img<Props>`
  /* This renders the buttons above... Edit me! */
  border-radius: 50%;
  margin: 10px;
  width: 100px;
  height: 100px;
  border: 10px solid black;

  &:hover{
    filter: grayscale(100%);
  }

  .placki{
    color: #bada55;
    font-weight:bold;
    font-size:2rem;
  }

  /* The GitHub button is a primary button
  * edit this to target it specifically! */

  ${props => props.primary === true && css`
    background: ${props.theme.primary.background};
    color: ${props.theme.primary.color};
  `}
`
