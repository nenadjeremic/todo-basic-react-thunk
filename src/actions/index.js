import { ADD_ITEM, DELETE_ITEM } from '../constants';

// export function addItem(payload) {
//     return {
//         type: ADD_ITEM,
//         payload
//     }    
// }

export function addItem(payload) {
    return (dispatch) => {
        setTimeout(
            () => dispatch({
                    type: ADD_ITEM,
                    payload
                }),
            1000
        )
    };
}

export function deleteItem(payload) {
    return (dispatch) => {
        setTimeout(
            () => dispatch({
                    type: DELETE_ITEM,
                    payload
                }),
            1000
        )
    };
}

// export function getData() {
//     return function(dispatch) {
//       return fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(json => {
//         dispatch({ type: DATA_LOADED, payload: json });
//       });
      
//     }
    
//   }