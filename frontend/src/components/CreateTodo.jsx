import { useState } from "react"

const CreateTodo = () => {
  const [title, setTitle] = useState("");  
  const [description, setDescription] = useState("");  

  function clickHandler(){
    fetch("http://localhost:5500/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(async function(res){
      const json = await res.json();
      alert("Todo added")
    })
  }

  return (
    <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/> <br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} /> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={clickHandler}>Add Todo</button>
    </div>
  )
}

export default CreateTodo