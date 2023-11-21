import React from 'react'
import ReactDOM from 'react-dom/client'
import { SelectComponent } from './SelectComponent'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <SelectComponent />
  </React.StrictMode>,
)
