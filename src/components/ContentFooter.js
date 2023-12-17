import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeActiveFiltered, clearCompleted } from '../redux/todos/todosSlice'

function ContentFooter() {
  const items = useSelector(state => state.todos.items)
  const completedItem = items.filter(item => !item.completed).length
  const dispatch = useDispatch()
  const activeFilter = useSelector((state) => state.todos.activeFilter)

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong> {completedItem} </strong>
        item{completedItem > 1 && 's'} left
      </span>
      <ul className="filters">
        <li>
          <a href="#/"
            className={activeFilter === 'all' ? "selected" : ""}
            onClick={() => dispatch(changeActiveFiltered('all'))}>
            All
          </a>
        </li>
        <li>
          <a href="#/"
            className={activeFilter === 'active' ? "selected" : ""}
            onClick={() => dispatch(changeActiveFiltered('active'))} >
            Active
          </a>
        </li>
        <li>
          <a href="#/"
            className={activeFilter === 'completed' ? "selected" : ""}
            onClick={() => dispatch(changeActiveFiltered('completed'))}>
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed"
        onClick={() => dispatch(clearCompleted())}>
        Clear completed
      </button>
    </footer >
  )
}

export default ContentFooter
