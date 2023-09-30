import { render, screen } from '@testing-library/react';
//= Component
import Header from './index';
//= Style Classes
import classes from './header.module.scss'

// Tests that the header component renders with valid data
test('test_render_with_valid_data', () => {
  const data = {
    jobTitle: 'Software Engineer',
    descriptionText: 'Lorem ipsum dolor sit amet',
    pictureUrl: 'https://example.com/picture.jpg'
  }
  const { container } = render(<Header data={data} />)
  expect(screen.getByText('Hi,')).toBeInTheDocument();
  expect(screen.getByText('I am')).toBeInTheDocument();
  expect(screen.getByText('Hassan Ali')).toBeInTheDocument();
  expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
  expect(container.querySelector(`.${classes.bg}`)).toBeInTheDocument();
  expect(container.querySelector(`.${classes.bg}`)).toHaveStyle(`background-image: url(https://example.com/picture.jpg)`);
  expect(container.querySelector(`a[href*="/works"]`)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Check out my works!/i })).toBeInTheDocument();
})



// Tests that the header component renders with empty data
test('test_render_with_empty_data', () => {
  const data = {
    jobTitle: '',
    descriptionText: '',
    pictureUrl: ''
  }
  const { container } = render(<Header data={data} />)
  expect(container.querySelector('h2')).toBeEmptyDOMElement();
  expect(container.querySelector('h2+p')).toBeEmptyDOMElement();
  expect(container.querySelector(`.${classes.bg}`)).toHaveStyle(`background-image: url()`);
})


