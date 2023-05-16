import React, { Fragment } from 'react'
import Navbar from '../Navbars/Navbar'
import Footer from '../Footer/Footer'

const Container = (props) => {
  return (
    <Fragment>
            <Navbar/>
            {props.children}
        <Footer/>
    </Fragment>
  )
}

export default Container