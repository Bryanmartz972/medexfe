import React from 'react'
import './Page.css'

export const Page = ({header: headerComponent, footer: footerComponent, children}) => {
  const hasHeader = headerComponent && true;
  const hasFooter = footerComponent && true;
  let pageClassNames = ['page_container']
  !hasHeader && pageClassNames.push('no_header')
  !hasFooter && pageClassNames.push('no_footer')
  return (
    <section className={pageClassNames.join(' ')}>
      {hasHeader && <header className='page_header' >
         {headerComponent}
      </header>}
      <main>
        {children}
      </main>
      {hasFooter && <footer className='page_footer'>
        {footerComponent}
      </footer>}
    </section>
  )
}

