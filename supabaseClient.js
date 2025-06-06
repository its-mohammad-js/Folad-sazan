// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://bjxgvdfybersxdluzhbo.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqeGd2ZGZ5YmVyc3hkbHV6aGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwOTI5NjcsImV4cCI6MjA2MzY2ODk2N30.juGpLwlA__NUQu-HCpi8xNo_nKUK12KiSq8bQzDVU3s";

// export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bjxgvdfybersxdluzhbo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqeGd2ZGZ5YmVyc3hkbHV6aGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwOTI5NjcsImV4cCI6MjA2MzY2ODk2N30.juGpLwlA__NUQu-HCpi8xNo_nKUK12KiSq8bQzDVU3s";

export const supabase = createClient(supabaseUrl, supabaseKey);
