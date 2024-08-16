import React from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Features from './sections/Features'

function App() {
  return (
    <>
      <main className='relative'>
        <Nav/>
        <section>
          <Hero/>
        </section>

        <section>
          <Features/>
        </section>

        <section>
          Yet To Be Added
        </section>
      </main>
    </>
  )
}

export default App