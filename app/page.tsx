import AboutUs from '@/components/Aboutus'
import AppointmentForm from '@/components/bookappoment'
import AlphabetSearch from '@/components/diseases'
import SpecialDoctors from '@/components/DoctorsCarousel'
import HealthcareServices from '@/components/HealthcareServices'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <HealthcareServices />
      <AboutUs />
      <WhyChooseUs />
      <SpecialDoctors />
      <AlphabetSearch />
    </div>
  )
}

export default page
