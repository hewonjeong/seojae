import { createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/database.types'
import {
  NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
} from '@/constants'

const supabase = createClient<Database>(
  NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
)

export default supabase
