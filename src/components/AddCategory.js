import Card from './UI/Card';
import Row from './UI/Row';
import Button from './UI/Button';
import Input from './UI/Input';
import Form from './UI/Form';
import { useRef, useContext } from 'react';
import TasksContext from '../context/TasksContext';

const AddCategory = () => {
  const tasksContext = useContext(TasksContext);
  const nameInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    tasksContext.addNewCategory(nameInputRef.current.value);
  };

  return (
    <Row>
      <h4>Add category</h4>
      <Card width='full' color='light-blue' padding='small'>
        <Form onSubmit={onSubmitHandler}>
          <Input
            label='Name'
            type='text'
            placeholder='Insert name'
            ref={nameInputRef}
          />
          <Button>Add</Button>
        </Form>
      </Card>
    </Row>
  );
};

export default AddCategory;
