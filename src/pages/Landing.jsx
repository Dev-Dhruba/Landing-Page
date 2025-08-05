import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Testimonial from '../components/Testimonial'

const Landing = () => {
  return (
    <>
      <Navbar/>
      <section id="home">
        <Hero/>
      </section>
      <section id="ai-tools">
        <Feature/>
      </section>
      <section id="testimonials">
        <Testimonial/>
      </section>
      <section id="blogs">
      </section>
      <section id="pricing">
      </section>
      <Footer/>
    </>
  )
}

export default Landing