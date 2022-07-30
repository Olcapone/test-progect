import React from 'react'
import styled from 'styled-components'
import exit from './exit.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.p`
  margin: 0;
  color: #BDBDBD;
  font-size: 18px;
  line-height: 1.5;
  padding-right: 12px;
`

const Logout = styled.button`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 2px 12px;
  color: #BDBDBD;
  background-color: unset;
  border: none;
  border-left: 1px solid #BDBDBD;
  font-size: 18px;
  line-height: 1.47;
  cursor: pointer;
`

const IconWrap = styled.div`
  width: 18px;
  height: 18px;
  padding-right: 8px;
`
const LogoutText = styled.p`
  padding: 0;
  margin: 0;
  display: none;

    @media (min-width: 768px) {
      display: block;
    };
`

const AccountSection = () => {
// const userName = useSelector(authSelectors.getUserName)

  return (
    <Wrapper>
      <Title>{'Name'}</Title>
      <Logout>
        <IconWrap>
          <img src={exit} width="100%" height="100%" />
        </IconWrap>
        <LogoutText>Exit</LogoutText>
      </Logout>
    </Wrapper>
  )
}

export default AccountSection
