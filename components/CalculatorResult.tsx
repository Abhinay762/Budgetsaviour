"use client"

import { TrendingUp, DollarSign, Calendar, Percent } from "lucide-react"
import type { CalculatorData } from "./CalculatorForm"

interface CalculatorResultProps {
  data: CalculatorData
}

export default function CalculatorResult({ data }: CalculatorResultProps) {
  // Simplified calculation logic for Jeevan Saral Maturity Plan
  const calculateMaturityValue = () => {
    const totalPremiumPaid = data.premiumAmount * data.premiumPayingTerm
    const bonusRate = 0.045 // Approximate bonus rate
    const loyaltyAddition = 0.02 // Loyalty addition

    // Basic maturity calculation
    const basicMaturityAmount = data.sumAssured
    const bonusAmount = data.sumAssured * bonusRate * data.policyTerm
    const loyaltyAmount = (basicMaturityAmount + bonusAmount) * loyaltyAddition

    const totalMaturityValue = basicMaturityAmount + bonusAmount + loyaltyAmount
    const totalReturns = totalMaturityValue - totalPremiumPaid
    const returnPercentage = (totalReturns / totalPremiumPaid) * 100

    return {
      totalMaturityValue: Math.round(totalMaturityValue),
      totalPremiumPaid: Math.round(totalPremiumPaid),
      totalReturns: Math.round(totalReturns),
      returnPercentage: Math.round(returnPercentage * 100) / 100,
      bonusAmount: Math.round(bonusAmount),
      loyaltyAmount: Math.round(loyaltyAmount),
    }
  }

  const results = calculateMaturityValue()

  return (
    <div className="calculator-card">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Maturity Calculation Results</h3>

      <div className="result-highlight mb-6">
        <h4 className="text-xl font-semibold mb-2">Total Maturity Value</h4>
        <p className="text-3xl font-bold">₹{results.totalMaturityValue.toLocaleString("en-IN")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <h5 className="font-semibold text-gray-700">Premium Paid</h5>
          <p className="text-xl font-bold text-blue-600">₹{results.totalPremiumPaid.toLocaleString("en-IN")}</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg text-center">
          <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <h5 className="font-semibold text-gray-700">Total Returns</h5>
          <p className="text-xl font-bold text-green-600">₹{results.totalReturns.toLocaleString("en-IN")}</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <Percent className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <h5 className="font-semibold text-gray-700">Return %</h5>
          <p className="text-xl font-bold text-purple-600">{results.returnPercentage}%</p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg text-center">
          <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
          <h5 className="font-semibold text-gray-700">Policy Term</h5>
          <p className="text-xl font-bold text-orange-600">{data.policyTerm} Years</p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Breakdown of Maturity Amount</h4>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Sum Assured:</span>
            <span className="font-semibold">₹{data.sumAssured.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between">
            <span>Bonus Amount:</span>
            <span className="font-semibold">₹{results.bonusAmount.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between">
            <span>Loyalty Addition:</span>
            <span className="font-semibold">₹{results.loyaltyAmount.toLocaleString("en-IN")}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total Maturity Value:</span>
            <span>₹{results.totalMaturityValue.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> This is an approximate calculation based on current bonus rates. Actual maturity
          value may vary based on LIC's declared bonus rates and policy terms.
        </p>
      </div>
    </div>
  )
}
