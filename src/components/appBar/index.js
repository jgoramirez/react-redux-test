import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Page from './page'
import findSuggestions from '../../redux/actions/findSuggestions'
import findResults from '../../redux/actions/findResults'

class IAppBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: '',
        }

        this.onChangeSelection = this.onChangeSelection.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
    }

    onChangeText(text) {
        this.setState({ text })
        this.props.findSuggestions(text)
    }

    onChangeSelection(text) {

        const {
            findResults,
            match,
            history,
        } = this.props;

        this.setState({ text })

        findResults(text)

        if (match.path !== '/results') {
            history.push('/results');
        }
    }

    render() {

        const { text } = this.state
        const { suggestions } = this.props

        return (
            <Page
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
    }
}

// No recomendado
// const mapDispatchToProps = (dispatch) => {
//     return {
//         findSuggestions: (text) => dispatch(findSuggestions(text))
//     }
// }

// Recomendado
const mapDispatchToProps = {
    findSuggestions,
    findResults,
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
)