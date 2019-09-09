import React, { Fragment } from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import AppBar from '../appBar'
import './styles.css'

function Page(props) {
    return (
        <Fragment>
            <CssBaseLine />

            <AppBar />
        </Fragment>
    )
}

export default Page