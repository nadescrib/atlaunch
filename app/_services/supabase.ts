import { createClient, SupabaseClient } from "@supabase/supabase-js";

class SupabaseService {
  private client: SupabaseClient;

  constructor() {
    const url = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceKey) {
      throw new Error("Supabase environment variables missing");
    }

    this.client = createClient(url, serviceKey, {
      auth: {
        persistSession: false,
      },
    });
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}

const supabaseService = new SupabaseService();

export default supabaseService;
