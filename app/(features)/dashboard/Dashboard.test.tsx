import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Dashboard from './Dashboard'

describe('Dashboard', () => {
    it('deve renderizar a mensagem', () => {
        render(<Dashboard />)

        expect(
            screen.getByRole('heading', {
                name: 'Testing Tests'
            })
        ).toBeInTheDocument()
    })
})
