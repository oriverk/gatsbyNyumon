import React from 'react'
import '../styles/footer.css'

export default function footer() {
  return (
    <footer className='footer'>
      ⓒ {new Date().getFullYear()} Dev Blog
    </footer>
  )
}
