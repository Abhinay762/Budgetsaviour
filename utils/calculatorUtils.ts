export interface PolicyData {
  sumAssured: number
  premiumAmount: number
  policyTerm: number
  premiumPayingTerm: number
  age: number
}

export interface MaturityResult {
  totalMaturityValue: number
  totalPremiumPaid: number
  totalReturns: number
  returnPercentage: number
  bonusAmount: number
  loyaltyAmount: number
  breakdownDetails: {
    sumAssured: number
    bonusAmount: number
    loyaltyAmount: number
  }
}

// Current bonus rates (approximate - these should be updated regularly)
const BONUS_RATES = {
  2024: 0.045, // 4.5% per year
  2023: 0.043,
  2022: 0.041,
  default: 0.045,
}

// Loyalty addition rates based on policy term
const LOYALTY_RATES = {
  10: 0.015, // 1.5%
  15: 0.02, // 2.0%
  20: 0.025, // 2.5%
  25: 0.03, // 3.0%
  30: 0.035, // 3.5%
  default: 0.02,
}

export function calculateJeevanSaralMaturity(data: PolicyData): MaturityResult {
  const { sumAssured, premiumAmount, policyTerm, premiumPayingTerm } = data

  // Calculate total premium paid
  const totalPremiumPaid = premiumAmount * premiumPayingTerm

  // Get bonus rate (using current rate)
  const bonusRate = BONUS_RATES[2024] || BONUS_RATES.default

  // Calculate bonus amount (simple bonus calculation)
  const bonusAmount = sumAssured * bonusRate * policyTerm

  // Get loyalty addition rate based on policy term
  const loyaltyRate = LOYALTY_RATES[policyTerm] || LOYALTY_RATES.default

  // Calculate loyalty addition
  const loyaltyAmount = (sumAssured + bonusAmount) * loyaltyRate

  // Calculate total maturity value
  const totalMaturityValue = sumAssured + bonusAmount + loyaltyAmount

  // Calculate returns
  const totalReturns = totalMaturityValue - totalPremiumPaid
  const returnPercentage = (totalReturns / totalPremiumPaid) * 100

  return {
    totalMaturityValue: Math.round(totalMaturityValue),
    totalPremiumPaid: Math.round(totalPremiumPaid),
    totalReturns: Math.round(totalReturns),
    returnPercentage: Math.round(returnPercentage * 100) / 100,
    bonusAmount: Math.round(bonusAmount),
    loyaltyAmount: Math.round(loyaltyAmount),
    breakdownDetails: {
      sumAssured: Math.round(sumAssured),
      bonusAmount: Math.round(bonusAmount),
      loyaltyAmount: Math.round(loyaltyAmount),
    },
  }
}

export function validatePolicyData(data: PolicyData): string[] {
  const errors: string[] = []

  if (data.sumAssured < 50000) {
    errors.push("Sum Assured must be at least ₹50,000")
  }

  if (data.premiumAmount < 1000) {
    errors.push("Premium amount must be at least ₹1,000")
  }

  if (data.age < 18 || data.age > 65) {
    errors.push("Age must be between 18 and 65 years")
  }

  if (data.premiumPayingTerm > data.policyTerm) {
    errors.push("Premium paying term cannot be greater than policy term")
  }

  if (data.policyTerm < 10 || data.policyTerm > 30) {
    errors.push("Policy term must be between 10 and 30 years")
  }

  return errors
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-IN").format(num)
}
