"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Ruler } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MsPipeWeightCalculatorPage() {
  const [outerDiameter, setOuterDiameter] = useState<number | string>("")
  const [wallThickness, setWallThickness] = useState<number | string>("")
  const [length, setLength] = useState<number | string>("")
  const [diameterUnit, setDiameterUnit] = useState<"mm" | "inch">("mm")
  const [lengthUnit, setLengthUnit] = useState<"meter" | "feet">("meter")
  const [pipeWeight, setPipeWeight] = useState<number | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Density of Mild Steel (MS) in kg/m^3
  const MS_DENSITY_KG_PER_CUBIC_METER = 7850

  const calculatePipeWeight = () => {
    let od = Number(outerDiameter)
    let wt = Number(wallThickness)
    let len = Number(length)

    if (isNaN(od) || od <= 0 || isNaN(wt) || wt <= 0 || isNaN(len) || len <= 0) {
      setErrorMessage("Please enter valid positive numbers for all dimensions.")
      setPipeWeight(null)
      return
    }

    // Convert OD and WT to meters
    if (diameterUnit === "inch") {
      od *= 25.4 // inches to mm
      wt *= 25.4 // inches to mm
    }
    od /= 1000 // mm to meters
    wt /= 1000 // mm to meters

    // Convert Length to meters
    if (lengthUnit === "feet") {
      len *= 0.3048 // feet to meters
    }

    if (wt * 2 >= od) {
      setErrorMessage("Wall thickness cannot be greater than or equal to half of the outer diameter.")
      setPipeWeight(null)
      return
    }

    setErrorMessage(null)

    const innerDiameter = od - 2 * wt // in meters

    // Calculate volume of pipe (hollow cylinder) in cubic meters
    // Volume = pi * (Outer_Radius^2 - Inner_Radius^2) * Length
    // Outer_Radius = od / 2
    // Inner_Radius = id / 2
    const outerRadius = od / 2
    const innerRadius = innerDiameter / 2

    const volume = Math.PI * (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2)) * len

    const calculatedWeight = volume * MS_DENSITY_KG_PER_CUBIC_METER
    setPipeWeight(calculatedWeight)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">MS Pipe Weight Calculator</h1>
            <p className="text-lg text-center text-gray-600 mb-10">
              Calculate the weight of Mild Steel (MS) pipes quickly and accurately. Essential for construction and
              fabrication.
            </p>

            <Card className="mb-8 p-6 calculator-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                  <Ruler className="w-6 h-6 mr-2 text-orange-600" />
                  Calculate Pipe Weight
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <Label htmlFor="outerDiameter" className="form-label">
                      Outer Diameter (OD)
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="outerDiameter"
                        type="number"
                        placeholder="e.g., 100"
                        value={outerDiameter}
                        onChange={(e) => setOuterDiameter(e.target.value)}
                        className="form-input flex-grow"
                        min="0"
                      />
                      <Select value={diameterUnit} onValueChange={(value: "mm" | "inch") => setDiameterUnit(value)}>
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mm">mm</SelectItem>
                          <SelectItem value="inch">inch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="wallThickness" className="form-label">
                      Wall Thickness (WT)
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="wallThickness"
                        type="number"
                        placeholder="e.g., 5"
                        value={wallThickness}
                        onChange={(e) => setWallThickness(e.target.value)}
                        className="form-input flex-grow"
                        min="0"
                      />
                      <Select value={diameterUnit} onValueChange={(value: "mm" | "inch") => setDiameterUnit(value)}>
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mm">mm</SelectItem>
                          <SelectItem value="inch">inch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="col-span-full form-group">
                    <Label htmlFor="length" className="form-label">
                      Length
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="length"
                        type="number"
                        placeholder="e.g., 6"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="form-input flex-grow"
                        min="0"
                      />
                      <Select value={lengthUnit} onValueChange={(value: "meter" | "feet") => setLengthUnit(value)}>
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="meter">meter</SelectItem>
                          <SelectItem value="feet">feet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                <Button onClick={calculatePipeWeight} className="btn-primary mt-6 w-full md:w-auto">
                  Calculate Weight
                </Button>

                {pipeWeight !== null && (
                  <div className="result-highlight mt-8">
                    <h3 className="text-xl font-semibold mb-2">Estimated Pipe Weight:</h3>
                    <p className="text-3xl font-bold text-primary-yellow">{pipeWeight.toFixed(2)} kg</p>
                    <p className="text-xs text-white/80 mt-4">
                      <strong className="font-semibold">Note:</strong> This calculation assumes a standard density for
                      Mild Steel (7850 kg/m³) and ideal pipe dimensions. Actual weight may vary slightly due to
                      manufacturing tolerances and material composition.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>



            <Card className="p-6 calculator-card">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">About the MS Pipe Weight Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The MS Pipe Weight Calculator is a specialized tool for professionals in construction, fabrication,
                  and engineering. It allows for quick and accurate calculation of the weight of Mild Steel pipes based
                  on their dimensions (outer diameter, wall thickness, and length).
                </p>
                <p className="text-gray-700">
                  This calculator simplifies material estimation, logistics planning, and cost analysis for projects
                  involving MS pipes, saving time and reducing errors in material procurement.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">How to Use This Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Enter the <strong>Outer Diameter (OD)</strong> of the pipe.</li>
                  <li>Enter the <strong>Wall Thickness (WT)</strong>.</li>
                  <li>Enter the <strong>Length</strong> of the pipe.</li>
                  <li>Select the correct units for diameter and length.</li>
                  <li>Click <strong>Calculate Weight</strong> to see the estimated weight in kilograms.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Supports both <strong>mm</strong> and <strong>inch</strong> measurements for diameter.</li>
                  <li>Supports <strong>meter</strong> and <strong>feet</strong> measurements for length.</li>
                  <li>Uses standard mild steel density of <strong>7850 kg/m³</strong> for accuracy.</li>
                  <li>Ensures realistic dimensions by validating wall thickness against outer diameter.</li>
                  <li>Ideal for construction, fabrication, and industrial material estimation.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 calculator-card mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">1. Is the calculated weight exact?</h4>
                  <p className="text-gray-700">
                    No, this is an estimate based on standard density and perfect dimensions. Actual weight may vary due to
                    manufacturing tolerances and alloy composition.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">2. Can I use this for stainless steel or other metals?</h4>
                  <p className="text-gray-700">
                    This calculator is designed for Mild Steel. Other materials have different densities and will require separate
                    calculations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">3. Why does wall thickness have a limit?</h4>
                  <p className="text-gray-700">
                    For a pipe to be hollow, the wall thickness must be less than half of the outer diameter. This ensures the
                    calculator produces realistic results.
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
