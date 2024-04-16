import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4 d-flex justify-content-center align-items-center" style={{ height: '60px' }}> {/* Adjust height as needed */}
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Suvika
        </a>
        <span className="ms-1">&copy; 2024 Suvika Studio.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)