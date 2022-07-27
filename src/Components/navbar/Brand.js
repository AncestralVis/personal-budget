import React from 'react'
import styled from "styled-components";

import logo from "../../logo.svg";

const Brand = () => {
  return (
    <Image src={logo} alt="Company Logo" link='localhost:3000' />
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;