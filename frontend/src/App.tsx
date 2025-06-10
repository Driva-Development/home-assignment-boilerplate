import type { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ErrorFallback } from './components/ErrorFallback/ErrorFallback'
import { Layout } from './components/Layout/Layout'
import { LoanDetails } from './pages/LoanDetails/LoanDetails'

export const App: FC = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/loanDetails' element={<LoanDetails />} />
          <Route path='*' element={<Navigate to='/loanDetails' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
)
