// eslint-disable-next-line react/prop-types
const Todos = ({todos}) => {
  return (
    <div>
        {todos.map((todo) => {
            return (
                <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "Completes" : "Mark as Completed"}</button>
                </div>
            )
        })}
    </div>
  )
}

export default Todos