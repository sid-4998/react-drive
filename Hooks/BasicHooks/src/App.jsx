import Values, { Form, ArtList, MovePointer, UpdateValues} from './components/Hooks'
import { BuggyTodoLists, TodoLists } from './components/UpdatingArrayOfObjectsInState'
import Counter from './useState/Counter';
import TodoList from './useState/TodoList';
import Profile from './useState/Profile';
import ShoppingList from './useState/ShoppingList';

export const App = () => {
  return (
    <>
      <MovePointer />
      <Values />
      <UpdateValues />
      <Form />
      <ArtList />
      <BuggyTodoLists />
      <TodoLists />
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </>
  )
}
