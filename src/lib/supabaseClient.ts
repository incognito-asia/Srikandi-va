

import { createBrowserClient } from '@supabase/ssr'

// Fungsi ini akan membuat instance client Supabase yang bisa digunakan di sisi browser (client-side)
export function createClient() {
  // Ambil environment variables yang sudah kita definisikan di .env.local
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  // Buat dan kembalikan Supabase client
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}