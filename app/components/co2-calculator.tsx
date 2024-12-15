"use client"

import { useState } from 'react'

export function CO2Calculator({ onCalculate }: { onCalculate: (total: number) => void }) {
  const [values, setValues] = useState({
    bikeDistance: 0,
    publicTransport: 0,
    vegetarianMeals: 0,
    recycling: 0,
  })
  const [debug, setDebug] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const numValue = parseFloat(value) || 0
    setValues(prev => ({ ...prev, [name]: numValue }))
  }

  const calculateSavings = () => {
    const bikeSavings = values.bikeDistance * 0.2
    const transportSavings = values.publicTransport * 0.1
    const mealSavings = values.vegetarianMeals * 1.5
    const recyclingSavings = values.recycling * 0.5

    const total = bikeSavings + transportSavings + mealSavings + recyclingSavings

    setDebug(`Bike: ${bikeSavings.toFixed(2)}, Transport: ${transportSavings.toFixed(2)}, Meals: ${mealSavings.toFixed(2)}, Recycling: ${recyclingSavings.toFixed(2)}, Total: ${total.toFixed(2)}`)
    
    onCalculate(total)
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="bikeDistance" className="block text-sm font-medium text-gray-700">
          Kilometers biked
        </label>
        <input
          id="bikeDistance"
          name="bikeDistance"
          type="number"
          min="0"
          value={values.bikeDistance}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="publicTransport" className="block text-sm font-medium text-gray-700">
          Kilometers using public transport
        </label>
        <input
          id="publicTransport"
          name="publicTransport"
          type="number"
          min="0"
          value={values.publicTransport}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="vegetarianMeals" className="block text-sm font-medium text-gray-700">
          Number of vegetarian meals
        </label>
        <input
          id="vegetarianMeals"
          name="vegetarianMeals"
          type="number"
          min="0"
          value={values.vegetarianMeals}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="recycling" className="block text-sm font-medium text-gray-700">
          Kilograms of waste recycled
        </label>
        <input
          id="recycling"
          name="recycling"
          type="number"
          min="0"
          value={values.recycling}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
        />
      </div>
      <button 
        onClick={calculateSavings} 
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Calculate CO2 Savings
      </button>
      {debug && (
        <div className="text-xs text-gray-500 mt-2">
          {debug}
        </div>
      )}
    </div>
  )
}
