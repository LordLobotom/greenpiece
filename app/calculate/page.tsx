"use client"

import { useState } from 'react'
import { CO2Calculator } from '@/app/components/co2-calculator'
import { ResultsDisplay } from '@/app/components/results-display'

export default function Calculate() {
  const [totalSavings, setTotalSavings] = useState(0)

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-800">Calculate Your CO2 Savings</h2>
      <CO2Calculator onCalculate={setTotalSavings} />
      {totalSavings > 0 && (
        <div className="mt-8">
          <ResultsDisplay totalSavings={totalSavings} />
        </div>
      )}
    </div>
  )
}
