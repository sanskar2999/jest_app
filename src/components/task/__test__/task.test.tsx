import React from 'react';
import { render, screen ,cleanup} from '@testing-library/react';
import Task from '../task';
import renderer from 'react-test-renderer';
afterEach(cleanup);

test('should render task',()=>{
    const tasks= { id:1,title:'wash dishes',completed:false};
  render(<Task task={tasks}/>);
  const element=screen.getByTestId('task-1');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent('wash dishes');
});

test('should render task',()=>{
    const tasks= { id:2,title:'make dinner',completed:true};
  render(<Task task={tasks}/>);
  const element=screen.getByTestId('task-2');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent('make dinner');
  expect(element).not.toContainHTML('<h6>');
});

test ('match snapshot',()=>{
    const tasks= { id:1,title:'wash dishes',completed:false};
    const tree =renderer.create(<Task task={tasks}/>).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();

})