import allBooks from "../../../fakeData/books.json"
const initialState = {
    readingList:[],
    discoveredList: allBooks,
    finishedList:[]
}

export const bookReducer = (state=initialState,action) => {

    switch(action.type){
        case "ADD_TO_READING_LIST":{
            const newState = {
                ...state,
                readingList:[...state.readingList,action.payload]
            }
        return newState;
    }
    case "REMOVE_FROM_READING_LIST":{
        const newState={
            ...state,
            readingList:state.readingList.filter(book => book.id !== action.payload.id)
        }
        return newState;
    }
    case "ADD_TO_FINISHED_LIST":{
        const newState = {
            ...state,
            readingList:state.readingList.filter(book => book.id !== action.payload.id),
            finishedList:[...state.finishedList, state.readingList.find(book => book.id === action.payload.id)]
        }
        return newState;
    }

   default:{
        return state;
    }
}
}