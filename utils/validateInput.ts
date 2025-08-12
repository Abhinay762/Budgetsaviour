export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export function validateSumAssured(sumAssured: number, age: number): ValidationResult {
  const errors: string[] = []

  if (sumAssured < 50000) {
    errors.push("Minimum Sum Assured is ₹50,000")
  }

  // Age-based maximum limits (approximate)
  const maxLimits = {
    30: 2000000,
    40: 1500000,
    50: 1000000,
    60: 750000,
    65: 500000,
  }

  let maxLimit = 500000 // Default for age > 65

  if (age <= 30) maxLimit = maxLimits[30]
  else if (age <= 40) maxLimit = maxLimits[40]
  else if (age <= 50) maxLimit = maxLimits[50]
  else if (age <= 60) maxLimit = maxLimits[60]

  if (sumAssured > maxLimit) {
    errors.push(`Maximum Sum Assured for your age is ₹${maxLimit.toLocaleString("en-IN")}`)
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function validatePremium(premium: number, sumAssured: number): ValidationResult {
  const errors: string[] = []

  if (premium < 1000) {
    errors.push("Minimum premium is ₹1,000")
  }

  // Premium should not exceed 20% of sum assured (rough guideline)
  const maxPremium = sumAssured * 0.2
  if (premium > maxPremium) {
    errors.push(`Premium seems too high for the Sum Assured. Consider reducing premium or increasing Sum Assured.`)
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function validateAge(age: number): ValidationResult {
  const errors: string[] = []

  if (age < 18) {
    errors.push("Minimum age is 18 years")
  }

  if (age > 65) {
    errors.push("Maximum age is 65 years")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function validatePolicyTerms(policyTerm: number, premiumPayingTerm: number, age: number): ValidationResult {
  const errors: string[] = []

  if (policyTerm < 10) {
    errors.push("Minimum policy term is 10 years")
  }

  if (policyTerm > 30) {
    errors.push("Maximum policy term is 30 years")
  }

  if (premiumPayingTerm > policyTerm) {
    errors.push("Premium paying term cannot exceed policy term")
  }

  if (premiumPayingTerm < 5) {
    errors.push("Minimum premium paying term is 5 years")
  }

  // Check if policy will mature before age 75
  const maturityAge = age + policyTerm
  if (maturityAge > 75) {
    errors.push("Policy cannot mature after age 75. Please reduce policy term.")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function validateAllInputs(data: {
  sumAssured: number
  premiumAmount: number
  policyTerm: number
  premiumPayingTerm: number
  age: number
}): ValidationResult {
  const allErrors: string[] = []

  const ageValidation = validateAge(data.age)
  allErrors.push(...ageValidation.errors)

  const sumAssuredValidation = validateSumAssured(data.sumAssured, data.age)
  allErrors.push(...sumAssuredValidation.errors)

  const premiumValidation = validatePremium(data.premiumAmount, data.sumAssured)
  allErrors.push(...premiumValidation.errors)

  const policyTermsValidation = validatePolicyTerms(data.policyTerm, data.premiumPayingTerm, data.age)
  allErrors.push(...policyTermsValidation.errors)

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
  }
}
