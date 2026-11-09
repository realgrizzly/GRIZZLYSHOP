const SUPABASE_URL = "https://ptzicrqikiuyleqoxjpf.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZG1BsU930aVjtntE99ad3w_ooGSR45M";

const { createClient } = supabase;

const sb = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

window.sb = sb;

console.log("GrizzlyShop connected to Supabase!");
