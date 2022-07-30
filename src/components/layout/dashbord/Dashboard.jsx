import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavBar from './navbar'
import Sidebar from './sidebar'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const BlurBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

    @media (min-width: 768px) {
      min-height: 1024px;
      filter: blur(50px);  
      background:
        linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)),
        url(images/ellipse_pink.png) top right no-repeat,
        url(images/ellipse_blue.png) bottom left  no-repeat;
    };

    @media (min-width: 1280px) {
      min-height:100%;
    };
`

const MainSection = styled.div`
  width: 100%;
  height: 100%;

    @media (min-width: 768px) {
      display: flex;
    };
`

const MainContent = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 100%;

    @media (min-width: 1280px) {
      width: auto;
    };
`

const Dashboard = ({children}) => (
  <Wrapper>
    <NavBar/>
    <MainSection>
      <Sidebar/>
      <MainContent>
        {children}
      </MainContent>
    </MainSection>
    <BlurBackground/>
  </Wrapper>
)

Dashboard.propTypes = {
  children: PropTypes.element,
}

export default Dashboard
