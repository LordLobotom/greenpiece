export function ResultsDisplay({ totalSavings }: { totalSavings: number }) {
  return (
    <div className="bg-green-100 p-6 rounded-lg text-center">
      <h2 className="text-2xl font-bold text-green-800 mb-2">Your CO2 Savings</h2>
      <p className="text-4xl font-bold text-green-600">{totalSavings.toFixed(2)} kg</p>
      <p className="text-sm text-green-700 mt-2">of CO2 emissions saved!</p>
    </div>
  )
}
