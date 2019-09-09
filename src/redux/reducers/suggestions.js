const defaultState = [{
    id: 2, text: 'test',
}]

function reducer(state = defaultState, {type, payload}) {
    switch (type) {
        case 'findSuggestions': {
            return [
                {
                    id: 1, text: 'findSuggestions',
                }
            ]
        }

        default:
            return state
    }
}

export default reducer