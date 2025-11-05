import { createClient } from '@supabase/supabase-js'

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Environment check:', {
  url: supabaseUrl ? 'Present' : 'Missing',
  key: supabaseKey ? 'Present' : 'Missing',
  keyLength: supabaseKey ? supabaseKey.length : 0
})

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials. Check environment variables.')
  throw new Error('Supabase not configured properly')
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Waitlist service functions
export const waitlistService = {
  // Add a new waitlist signup
  async addSignup(data) {
    try {
      // Check if Supabase is properly configured
      if (!supabaseUrl || !supabaseKey) {
        throw new Error('Service configuration error')
      }

      const { data: result, error } = await supabase
        .from('waitlist')
        .insert({
          name: data.name || 'Website User',
          email: data.email
        })
        .select()
      
      if (error) {
        console.error('Supabase error details:', error)
        
        // Handle specific error types
        if (error.message.includes('Authorization header')) {
          throw new Error('Authentication error: Service not properly configured')
        } else if (error.code === 'PGRST301') {
          throw new Error('Database access denied: Check permissions')
        } else {
          throw new Error(`Database error: ${error.message}`)
        }
      }
      
      return { success: true, data: result }
    } catch (err) {
      throw err
    }
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
    try {
      const { data, error, count } = await supabase
        .from('waitlist')
        .select('email', { count: 'exact' })
        .eq('email', email)
      
      if (error) {
        // If there's an error checking, assume it doesn't exist to avoid blocking
        return false
      }
      
      const exists = count > 0
      return exists
    } catch (err) {
      return false
    }
  }
}