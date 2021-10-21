import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import IndexPage from './index'

it('renders buttons', () => {
  render(<IndexPage />)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})
