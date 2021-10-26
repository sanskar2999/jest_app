import React from 'react';
import { render, screen ,cleanup} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

// test('should render hello world',()=>{
//   render(<App/>);
//   const element=screen.getByTestId('hello-1');
//   expect(element).toBeInTheDocument();
// });
