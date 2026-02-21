import Values, { Form, ArtList, MovePointer, UpdateValues} from './components/Hooks'
import { BuggyTodoLists, TodoLists } from './components/UpdatingArrayOfObjectsInState'
import Counter from './useState/Counter';
import TodoList from './useState/TodoList';
import Profile from './useState/Profile';
import ShoppingList from './useState/ShoppingList';
import BasicEffect from './useEffect/BasicEffect';
import FetchDataEffect from './useEffect/FetchDataEffect';
import TimerEffect from './useEffect/TimerEffect';
import { Context, PropDrilling } from './useContext/Context';
import UserProfile from './useContext/UserProfile';
import { UserProvider } from './useContext/UserContext';
import UpdateUser from './useContext/UpdateUser';

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
      <BasicEffect />
      <FetchDataEffect />
      <TimerEffect />
      <PropDrilling />
      <Context />
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </>
  )
}
