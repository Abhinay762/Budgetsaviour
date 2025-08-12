"use client"

import type React from "react"

import { useState } from "react"
import { Calculator } from "lucide-react"

interface CalculatorFormProps {
  onCalculate: (data: CalculatorData) => void
}

export interface CalculatorData {
  sumAssured: number
  premiumAmount: number
  policyTerm: number
  premiumPayingTerm: number
  age: number
}

export default function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [formData, setFormData] = useState<CalculatorData>({
    sumAssured: 100000,
    premiumAmount: 5000,
    policyTerm: 20,
    premiumPayingTerm: 15,
    age: 30,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCalculate(formData)
  }

  const handleChange = (field: keyof CalculatorData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Number.parseFloat(value) || 0,
    }))
  }

  return (
    <div className="calculator-card">
      <div className="flex items-center mb-6">
        <Calculator className="w-8 h-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">LIC Jeevan Saral Maturity Calculator</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="form-label">Sum Assured (₹)</label>
            <input
              type="number"
              className="form-input"
              value={formData.sumAssured}
              onChange={(e) => handleChange("sumAssured", e.target.value)}
              min="50000"
              step="1000"
              required
            />
            <small className="text-gray-500">Minimum ₹50,000</small>
          </div>

          <div className="form-group">
            <label className="form-label">Annual Premium (₹)</label>
            <input
              type="number"
              className="form-input"
              value={formData.premiumAmount}
              onChange={(e) => handleChange("premiumAmount", e.target.value)}
              min="1000"
              step="100"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Policy Term (Years)</label>
            <select
              className="form-input"
              value={formData.policyTerm}
              onChange={(e) => handleChange("policyTerm", e.target.value)}
              required
            >
              <option value="10">10 Years</option>
              <option value="15">15 Years</option>
              <option value="20">20 Years</option>
              <option value="25">25 Years</option>
              <option value="30">30 Years</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Premium Paying Term (Years)</label>
            <select
              className="form-input"
              value={formData.premiumPayingTerm}
              onChange={(e) => handleChange("premiumPayingTerm", e.target.value)}
              required
            >
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
              <option value="15">15 Years</option>
              <option value="20">20 Years</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Current Age (Years)</label>
            <input
              type="number"
              className="form-input"
              value={formData.age}
              onChange={(e) => handleChange("age", e.target.value)}
              min="18"
              max="65"
              required
            />
            <small className="text-gray-500">Age 18-65 years</small>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full md:w-auto px-8 py-3 text-lg">
          Calculate Maturity Value
        </button>
      </form>
    </div>
  )
}
