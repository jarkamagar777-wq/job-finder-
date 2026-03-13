import React from 'react'
import { plans } from './data'
import PlanCard from './PlanCard'

const PricingCards = ({billing}) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-16">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} billing={billing} />
            ))}
          </div>
  )
}

export default PricingCards