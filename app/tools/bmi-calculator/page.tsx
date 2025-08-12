"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Scale } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BmiCalculatorPage() {
  const [weight, setWeight] = useState<number | string>("")
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg")
  const [heightCm, setHeightCm] = useState<number | string>("")
  const [heightFeet, setHeightFeet] = useState<number | string>("")
  const [heightInches, setHeightInches] = useState<number | string>("")
  const [heightUnit, setHeightUnit] = useState<"cm" | "feet">("cm")
  const [bmi, setBmi] = useState<number | null>(null)
  const [bmiCategory, setBmiCategory] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const calculateBmi = () => {
    let finalWeight: number | null = null
    let finalHeightMeters: number | null = null

    // Convert weight to kg
    const w = Number(weight)
    if (isNaN(w) || w <= 0) {
      setErrorMessage("Please enter a valid positive weight.")
      setBmi(null)
      setBmiCategory(null)
      return
    }
    finalWeight = weightUnit === "kg" ? w : w * 0.45359237 // lbs to kg (exact conversion)

    // Convert height to meters
    if (heightUnit === "cm") {
      const hCm = Number(heightCm)
      if (isNaN(hCm) || hCm <= 0) {
        setErrorMessage("Please enter a valid positive height in cm.")
        setBmi(null)
        setBmiCategory(null)
        return
      }
      finalHeightMeters = hCm / 100 // cm to meters
    } else {
      const hFeet = Number(heightFeet)
      const hInches = Number(heightInches)
      if (isNaN(hFeet) || hFeet < 0 || isNaN(hInches) || hInches < 0 || (hFeet === 0 && hInches === 0)) {
        setErrorMessage("Please enter valid positive height in feet and inches.")
        setBmi(null)
        setBmiCategory(null)
        return
      }
      const totalInches = hFeet * 12 + hInches
      finalHeightMeters = totalInches * 0.0254 // inches to meters (exact conversion)
    }

    if (finalWeight === null || finalHeightMeters === null || finalHeightMeters === 0) {
      setErrorMessage("Please ensure all height and weight values are valid.")
      setBmi(null)
      setBmiCategory(null)
      return
    }

    setErrorMessage(null)
    const calculatedBmi = finalWeight / (finalHeightMeters * finalHeightMeters)
    setBmi(calculatedBmi)

    let category = ""
    if (calculatedBmi < 18.5) {
      category = "Underweight"
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
      category = "Normal weight"
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
      category = "Overweight"
    } else {
      category = "Obesity"
    }
    setBmiCategory(category)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">BMI Calculator</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Calculate your Body Mass Index (BMI) to assess your weight status.
            </p>

            <Card className="mb-8 p-6 calculator-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                  <Scale className="w-6 h-6 mr-2 text-blue-600" />
                  Calculate Your BMI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <Label htmlFor="weight" className="form-label">
                      Weight
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="weight"
                        type="number"
                        placeholder="e.g., 70"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="form-input flex-grow"
                      />
                      <Select value={weightUnit} onValueChange={(value: "kg" | "lbs") => setWeightUnit(value)}>
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">kg</SelectItem>
                          <SelectItem value="lbs">lbs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="height" className="form-label">
                      Height
                    </Label>
                    <Select value={heightUnit} onValueChange={(value: "cm" | "feet") => setHeightUnit(value)}>
                      <SelectTrigger className="w-full mb-2">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cm">Centimeters (cm)</SelectItem>
                        <SelectItem value="feet">Feet & Inches</SelectItem>
                      </SelectContent>
                    </Select>
                    {heightUnit === "cm" ? (
                      <Input
                        id="heightCm"
                        type="number"
                        placeholder="e.g., 175"
                        value={heightCm}
                        onChange={(e) => setHeightCm(e.target.value)}
                        className="form-input w-full"
                      />
                    ) : (
                      <div className="flex space-x-2">
                        <Input
                          id="heightFeet"
                          type="number"
                          placeholder="Feet (e.g., 5)"
                          value={heightFeet}
                          onChange={(e) => setHeightFeet(e.target.value)}
                          className="form-input flex-grow"
                        />
                        <Input
                          id="heightInches"
                          type="number"
                          placeholder="Inches (e.g., 9)"
                          value={heightInches}
                          onChange={(e) => setHeightInches(e.target.value)}
                          className="form-input flex-grow"
                        />
                      </div>
                    )}
                  </div>
                </div>
                {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                <Button onClick={calculateBmi} className="btn-primary mt-6 w-full md:w-auto">
                  Calculate BMI
                </Button>

                {bmi !== null && (
                  <div className="result-highlight mt-8">
                    <h3 className="text-xl font-semibold mb-2">Your BMI:</h3>
                    <p className="text-3xl font-bold mb-2">{bmi.toFixed(2)}</p>
                    <p className="text-xl">
                      Category: <span className="font-semibold">{bmiCategory}</span>
                    </p>
                    <p className="text-xs text-white/80 mt-4">
                      <strong className="font-semibold">BMI Categories:</strong>
                      <br />
                      Underweight: {"< 18.5"}
                      <br />
                      Normal weight: {"18.5 - 24.9"}
                      <br />
                      Overweight: {"25 - 29.9"}
                      <br />
                      Obesity: {"30 >"}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>



            <Card className="p-6 calculator-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">About the BMI Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is
                  BMI = kg/m², where kg is a person's weight in kilograms and m² is their height in meters squared.
                </p>
                <p className="text-gray-700">
                  BMI is a screening tool that can indicate whether a person is underweight, a healthy weight,
                  overweight, or obese. While it's a useful general indicator, it doesn't account for muscle mass, bone
                  density, overall body composition, or ethnic differences, so it should be used as a guide rather than
                  a definitive health assessment.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">BMI Classification and Health Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Your BMI can give a general idea about your health risks related to weight. Here’s a breakdown of categories:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Underweight (BMI &lt; 18.5):</strong> May indicate nutritional deficiencies or other health issues.</li>
                  <li><strong>Normal weight (18.5 - 24.9):</strong> Generally considered healthy for most adults.</li>
                  <li><strong>Overweight (25 - 29.9):</strong> Increased risk of heart disease, diabetes, and other health problems.</li>
                  <li><strong>Obesity (BMI ≥ 30):</strong> Higher risk of serious conditions such as heart disease, type 2 diabetes, and certain cancers.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Always consult with a healthcare professional for a full health evaluation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">How to Use This Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Enter your <strong>weight</strong> and select the correct unit (kg or lbs).</li>
                  <li>Enter your <strong>height</strong> in either centimeters or feet/inches.</li>
                  <li>Click <strong>Calculate BMI</strong> to see your BMI and category.</li>
                  <li>Compare it with the table above to understand your weight status.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">1. Is BMI an accurate health measure?</h4>
                  <p className="text-gray-700">
                    BMI is a good screening tool but does not measure body fat directly. Athletes may have high BMI due to muscle mass.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">2. Can children use this calculator?</h4>
                  <p className="text-gray-700">
                    This calculator is designed for adults. For children and teens, BMI is interpreted differently using growth charts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">3. How can I lower my BMI?</h4>
                  <p className="text-gray-700">
                    A balanced diet, regular physical activity, and healthy lifestyle choices can help. Consult a doctor before making major changes.
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
