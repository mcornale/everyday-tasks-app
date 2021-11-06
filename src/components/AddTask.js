import Card from './UI/Card';
import Row from './UI/Row';
import Button from './UI/Button';
import Input from './UI/Input';
import Form from './UI/Form';

const AddTask = () => {
  return (
    <Row>
      <h4>Add task</h4>
      <Card width='full' color='light-blue' padding='small'>
        <Form>
          <Input label='Name' type='text' placeholder='Insert name' />
          <Input label='Date' type='date' placeholder='Insert name' />
          <Button>Add</Button>
        </Form>
      </Card>
    </Row>
  );
};

export default AddTask;
