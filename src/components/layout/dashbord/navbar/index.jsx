import React from 'react'
import styled from 'styled-components'
import LogoSection from './LogoSection'
import AccountSection from './AccountSection'

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 32px);
  padding: 20px 16px;
  background-color: #ffffff;

    @media (min-width: 768px) {
      padding: 20px 32px;
      width: calc(100% - 64px);
    };

    @media (min-width: 1200px) {
      padding: 20px 16px;
      width: calc(100% - 32px);
    };
`

const NavBar = () => (
  <Wrapper>
    <LogoSection/>
    <AccountSection/>
  </Wrapper>
)

export default NavBar
