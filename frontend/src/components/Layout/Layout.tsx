import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: FC = () => (
  <div className='container'>
    <header>
      <h1>Driva Loan Application</h1>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
)
