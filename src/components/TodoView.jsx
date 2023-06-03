

export const TodoView = (props) => {
    function renderList(list){
        return list.map((task)=>{
            return (
                <List title={task.title} description={task.description}></List>
            )
        })
    }
    return (
        <div>
            <h2>To-Do List</h2>
            {props.list && renderList(props.list)}
        </div>
    )
}


const List = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  )
}
