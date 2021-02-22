export default function (state, action) {

    switch (action.type) {

        case "ADD":
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ]

        case "TOGGLE":
            return state.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })

        case "DELETE":
            return state.filter(todo => todo.id !== action.payload)

        default:
            return state
    }
}
