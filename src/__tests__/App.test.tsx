import { render, screen } from '@testing-library/react'
import React from 'react'

import App from '../App'

describe('App page', () => {
  test('renders page', () => {
    render(<App />)

    expect(screen.getByTestId('app-page')).toBeTruthy()
  })
})
