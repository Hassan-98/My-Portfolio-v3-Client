import { render, screen } from '@testing-library/react';
//= Component
import ScrollLine from './';

it('test_render_with_valid_data', () => {
  const data = {
    emailAddress: 'test@test.com',
    phoneNumber: '1234567890',
    github: 'https://github.com/test',
    linkedin: 'https://linkedin.com/test',
    twitter: 'https://twitter.com/test'
  }
  const { container } = render(<ScrollLine data={data} />)
  expect(screen.getByTitle('GitHub')).toBeInTheDocument()
  expect(screen.getByTitle('LinkedIn')).toBeInTheDocument()
  expect(screen.getByTitle('Twitter')).toBeInTheDocument()
  expect(screen.getByTitle('My Email')).toBeInTheDocument()

  expect(container.querySelector(`a[href*="${data.github}"]`)).toBeInTheDocument();
  expect(container.querySelector(`a[href*="${data.linkedin}"]`)).toBeInTheDocument();
  expect(container.querySelector(`a[href*="${data.twitter}"]`)).toBeInTheDocument();
  expect(container.querySelector(`a[href*="mailto:${data.emailAddress}"]`)).toBeInTheDocument();
});
