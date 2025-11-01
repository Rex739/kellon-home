import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase project credentials
// Get them from: https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api
const supabaseUrl = 'YOUR_SUPABASE_URL' // e.g., 'https://xyzcompany.supabase.co'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY' // Your anon/public key

export const supabase = createClient(supabaseUrl, supabaseKey)

// Waitlist service functions
export const waitlistService = {
  // Add a new waitlist signup
  async addSignup(data) {
    const { error } = await supabase
      .from('waitlist')
      .insert([
        {
          name: data.name,
          email: data.email,
          created_at: new Date().toISOString(),
          source: 'website'
        }
      ])
    
    if (error) {
      throw new Error(error.message)
    }
    
    return { success: true }
  },

  // Get all waitlist signups (for admin use)
  async getAllSignups() {
    const { data, error } = await supabase
      .from('waitlist')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      throw new Error(error.message)
    }
    
    return data
  },

  // Check if email already exists
  async checkEmailExists(email) {
    const { data, error } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single()
    
    return !error && data !== null
  }
}