export const type = 'findCurrentItem'

const findCurrentItem = itemId => {
    return {
        type,
        payload: +itemId,
    }
}

export default findCurrentItem