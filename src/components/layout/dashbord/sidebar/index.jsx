import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

    @media (min-width: 768px) {
      width: 480px;
    }
`

const Sidebar = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

Sidebar.propTypes = {
  children: PropTypes.element,
}

export default Sidebar
