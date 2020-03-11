import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
const add = (a, b)=>{
  return a + b
}
test('something got fired', ()=>{
  console.log('Something was fired')
})

test('Add works correctly', ()=>{
  const result = add(3, 4)
  expect(result).toBe(7)
})
const greeting = (name)=>{
  return `Hello ${name}`
}

test('Greeting renders correctly', ()=>{
  const message = greeting('davis')
  expect(message).toBe(`Hello davis`) 
})
