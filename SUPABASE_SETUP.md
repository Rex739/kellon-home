# Supabase Setup Guide for Kellon Waitlist

## Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/in with GitHub
3. Click "New Project"
4. Choose organization and set project name: "kellon-waitlist"
5. Set database password (save this!)
6. Choose region (closest to your users)
7. Click "Create new project" (takes ~2 minutes)

## Step 2: Create Waitlist Table
1. Go to your project dashboard
2. Click "SQL Editor" in the left sidebar
3. Run this SQL to create the waitlist table:

```sql
-- Create waitlist table
CREATE TABLE public.waitlist (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    source TEXT DEFAULT 'website'
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for signups)
CREATE POLICY "Enable insert for all users" ON public.waitlist
    FOR INSERT WITH CHECK (true);

-- Create policy to allow read for authenticated users (for admin)
CREATE POLICY "Enable read for authenticated users" ON public.waitlist
    FOR SELECT USING (auth.role() = 'authenticated');
```

## Step 3: Get API Credentials
1. Go to Settings → API
2. Copy your:
   - **Project URL** (looks like: https://xyzabc123.supabase.co)
   - **Anon/Public Key** (starts with: eyJhbGciOiJIUzI1NiIs...)

## Step 4: Update Your Code
1. Open `src/services/supabase.js`
2. Replace:
   - `YOUR_SUPABASE_URL` with your Project URL
   - `YOUR_SUPABASE_ANON_KEY` with your Anon key

```javascript
const supabaseUrl = 'https://your-project-id.supabase.co'
const supabaseKey = 'your-anon-key-here'
```

## Step 5: Environment Variables (Recommended)
1. Create `.env.local` in your project root:
```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

2. Update `supabase.js` to use env vars:
```javascript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
```

3. Add `.env.local` to your `.gitignore`

## Step 6: View Waitlist Data
1. Go to Table Editor → waitlist
2. See all signups in real-time
3. Export data as CSV/JSON

## Free Tier Limits
- 50,000 database rows (plenty for waitlist)
- 2GB database storage
- 50GB bandwidth per month
- No credit card required

## Alternative: Quick Deploy Button
You can also use this SQL to set up everything at once:

```sql
-- Complete waitlist setup
CREATE TABLE public.waitlist (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    source TEXT DEFAULT 'website',
    CONSTRAINT email_valid CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for all users" ON public.waitlist
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users" ON public.waitlist
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_waitlist_email ON public.waitlist(email);
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);
```

That's it! Your waitlist will now save to a real database. 🚀