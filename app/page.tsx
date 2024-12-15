'use client';

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleCalculateClick = () => {
    router.push('/calculate');
  };

  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Welcome to GreenPiece
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Track and calculate your personal contribution to reducing CO2 emissions
      </p>
      <button 
        onClick={handleCalculateClick}
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        Start Calculating
      </button>
    </div>
  )
}
