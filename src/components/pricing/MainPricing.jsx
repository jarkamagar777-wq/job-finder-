import React from 'react'
import MainPricingSection from './MainPricingSection'
import { Outlet } from 'react-router-dom'

const MainPricing = () => {
  return (
    <>
      <MainPricingSection />
      <Outlet />
    </>
  )
}

export default MainPricing