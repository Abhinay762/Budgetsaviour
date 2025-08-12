"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Wallet } from "lucide-react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function CashDenominationCalculatorPage() {
  // Denominations for Indian Rupee (notes and common coins)
  const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1].sort((a, b) => b - a)

  const [counts, setCounts] = useState<{ [key: number]: number }>(Object.fromEntries(denominations.map((d) => [d, 0])))
  const [totalAmount, setTotalAmount] = useState<number>(0)

  useEffect(() => {
    calculateTotal() // Recalculate total whenever counts change
  }, [counts])

  const handleCountChange = (denomination: number, value: string) => {
    const numValue = Number.parseInt(value)
    setCounts((prevCounts) => ({
      ...prevCounts,
      [denomination]: isNaN(numValue) || numValue < 0 ? 0 : numValue,
    }))
  }

  const calculateTotal = () => {
    let sum = 0
    for (const denom of denominations) {
      sum += counts[denom] * denom
    }
    setTotalAmount(sum)
  }

  const resetCalculator = () => {
    setCounts(Object.fromEntries(denominations.map((d) => [d, 0])))
    setTotalAmount(0)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Cash Denomination Calculator</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Quickly count and tally your cash with our Cash Denomination Calculator. Ideal for shopkeepers, bankers,
              and anyone handling cash daily.
            </p>

            <Card className="mb-8 p-6 calculator-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                  <Wallet className="w-6 h-6 mr-2 text-yellow-600" />
                  Tally Your Cash
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {denominations.map((denom) => (
                    <div key={denom} className="form-group">
                      <Label htmlFor={`denom-${denom}`} className="form-label">
                        ₹{denom >= 1 ? denom : denom * 100 + " Paise"}
                      </Label>
                      <Input
                        id={`denom-${denom}`}
                        type="number"
                        placeholder="0"
                        value={counts[denom] === 0 ? "" : counts[denom]}
                        onChange={(e) => handleCountChange(denom, e.target.value)}
                        min="0"
                        className="form-input"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button onClick={calculateTotal} className="btn-primary flex-grow">
                    Calculate Total
                  </Button>
                  <Button onClick={resetCalculator} variant="outline" className="flex-grow bg-transparent">
                    Reset
                  </Button>
                </div>

                {totalAmount > 0 && (
                  <div className="result-highlight mt-8">
                    <h3 className="text-xl font-semibold mb-2">Total Cash Amount:</h3>
                    <p className="text-4xl font-bold text-primary-yellow">
                      ₹{totalAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>



            <Card className="p-6 calculator-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">About the Cash Denomination Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The Cash Denomination Calculator is a practical tool designed for anyone who needs to quickly count
                  and verify cash amounts. It allows users to input the number of notes and coins for each denomination,
                  and it instantly provides the total sum.
                </p>
                <p className="text-gray-700">
                  This calculator is particularly useful for shopkeepers, cashiers, bank tellers, and individuals
                  managing daily cash transactions, ensuring accuracy and saving time during cash reconciliation.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">How to Use This Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Enter the quantity of each note or coin denomination you have.</li>
                  <li>Click <strong>Calculate Total</strong> to get the total cash value instantly.</li>
                  <li>Use the <strong>Reset</strong> button to clear all inputs and start again.</li>
                  <li>The total amount is shown in Indian Rupees with two decimal places for accuracy.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Tips for Accurate Counting</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Count notes of the same denomination together before entering the quantity.</li>
                  <li>Separate damaged or torn notes to avoid confusion.</li>
                  <li>For coins, group them into rolls or small pouches to speed up counting.</li>
                  <li>Always double-check high-value denominations like ₹2000 and ₹500.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">1. Can this calculator work with foreign currency?</h4>
                  <p className="text-gray-700">
                    This version is designed for Indian Rupee denominations. For other currencies, you would need to adjust the denomination list.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">2. Does it support paise coins?</h4>
                  <p className="text-gray-700">
                    Yes, it supports ₹1 coins and smaller paise coins like ₹0.50, ₹0.25, and ₹0.10.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">3. Is my data saved?</h4>
                  <p className="text-gray-700">
                    No, the calculator runs entirely in your browser and does not store any data.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
