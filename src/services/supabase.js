import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://udnzblzgnvlsirkenjqm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkbnpibHpnbnZsc2lya2VuanFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NzMwOTIsImV4cCI6MjA5MDA0OTA5Mn0.380j-15N5Fic81htpnP_hp4yMd8W7j_wa3SZfDKVqFo"
const supabase = createClient(supabaseUrl, supabaseKey);

//Exporting supabase
export default supabase;