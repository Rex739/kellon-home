// Location detection utility
export const getVisitorLocation = async () => {
  try {
    // Try to get location from IP geolocation API
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    
    if (data && data.country_name) {
      return {
        country: data.country_name,
        countryCode: data.country_code,
        region: data.region,
        city: data.city
      }
    }
  } catch (error) {
    console.warn('Failed to fetch location from ipapi.co:', error)
  }

  // Fallback: Try another service
  try {
    const response = await fetch('https://api.country.is/')
    const data = await response.json()
    
    if (data && data.country) {
      return {
        country: getCountryName(data.country),
        countryCode: data.country,
        region: null,
        city: null
      }
    }
  } catch (error) {
    console.warn('Failed to fetch location from country.is:', error)
  }

  // Final fallback: Default location
  return {
    country: "United Kingdom",
    countryCode: "GB",
    region: null,
    city: null
  }
}

// Helper function to convert country codes to names
const getCountryName = (countryCode) => {
  const countryNames = {
    'US': 'United States',
    'GB': 'United Kingdom',
    'CA': 'Canada',
    'AU': 'Australia',
    'DE': 'Germany',
    'FR': 'France',
    'JP': 'Japan',
    'SG': 'Singapore',
    'CH': 'Switzerland',
    'NL': 'Netherlands',
    'IE': 'Ireland',
    'LU': 'Luxembourg',
    'MT': 'Malta',
    'CY': 'Cyprus',
    'EE': 'Estonia',
    'LT': 'Lithuania',
    'LV': 'Latvia',
    // Add more as needed
  }
  
  return countryNames[countryCode] || countryCode
}

// Get appropriate legal jurisdiction based on country
export const getLegalJurisdiction = (countryCode) => {
  // Define jurisdictions for different regions
  const jurisdictions = {
    // EU countries - use Malta as crypto-friendly jurisdiction
    'MT': 'Malta',
    'DE': 'Malta',
    'FR': 'Malta', 
    'IT': 'Malta',
    'ES': 'Malta',
    'NL': 'Malta',
    'BE': 'Malta',
    'AT': 'Malta',
    'IE': 'Malta',
    'LU': 'Malta',
    'CY': 'Malta',
    'EE': 'Malta',
    'LT': 'Malta',
    'LV': 'Malta',
    'FI': 'Malta',
    'SE': 'Malta',
    'DK': 'Malta',
    'PL': 'Malta',
    'CZ': 'Malta',
    'SK': 'Malta',
    'HU': 'Malta',
    'RO': 'Malta',
    'BG': 'Malta',
    'HR': 'Malta',
    'SI': 'Malta',
    'GR': 'Malta',
    'PT': 'Malta',
    
    // English-speaking countries
    'US': 'Delaware, United States',
    'CA': 'Ontario, Canada',
    'AU': 'New South Wales, Australia',
    'NZ': 'New Zealand',
    'GB': 'England and Wales',
    
    // Crypto-friendly jurisdictions
    'SG': 'Singapore',
    'CH': 'Switzerland',
    'JP': 'Japan',
    'KR': 'South Korea',
    'HK': 'Hong Kong',
    
    // Default fallback
    'DEFAULT': 'Malta'
  }
  
  return jurisdictions[countryCode] || jurisdictions['DEFAULT']
}