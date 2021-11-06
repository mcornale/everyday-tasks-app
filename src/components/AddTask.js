import Card from './UI/Card';
import Row from './UI/Row';
import Button from './UI/Button';
import Input from './UI/Input';
import Form from './UI/Form';
import { useContext, useRef } from 'react';
import TasksContext from '../context/TasksContext';
import capitalFirst from '../helpers/capitalFirst';

const AddTask = () => {
  const tasksContext = useContext(TasksContext);
  const nameInputRef = useRef();
  const categoryInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const category = categoryInputRef.current.value;

    if (name === '' || category === '') return;

    tasksContext.addNewTask(capitalFirst(name), capitalFirst(category));
    clearInputFields();
  };

  const clearInputFields = () => {
    nameInputRef.current.value = '';
    categoryInputRef.current.value = '';
  };

  return (
    <Row>
      <h4>Add task</h4>
      <Card width='full' color='light-blue' padding='medium'>
        <Form onSubmit={onSubmitHandler}>
          <Input
            label='Name'
            type='text'
            placeholder='Insert name'
            ref={nameInputRef}
          />
          <Input
            label='Category'
            type='text'
            placeholder='Insert category'
            ref={categoryInputRef}
          />
          <Button>Add</Button>
        </Form>
      </Card>
    </Row>
  );
};

export default AddTask;
