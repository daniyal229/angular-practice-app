export var ActiveBookReducer = (state: any = null, action: any) => {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload
        default:
            return state;
    }
}