import { Pool, PoolClient } from "pg";

class Model {
  private pool: Pool;

  constructor() {
    const connectionString = process.env.SUPABASE_DB_URL;

    if (!connectionString) {
      throw new Error("Database connection string missing");
    }

    this.pool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
    });
  }

  async query<T extends Record<string, unknown>>(
    text: string,
    params: unknown[] = [],
  ): Promise<T[]> {
    const result = await this.pool.query<T>(text, params);
    return result.rows;
  }

  async queryOne<T extends Record<string, unknown>>(
    text: string,
    params: unknown[] = [],
  ): Promise<T | null> {
    const result = await this.pool.query<T>(text, params);
    return result.rows[0] ?? null;
  }

  async transaction<T>(
    callback: (client: PoolClient) => Promise<T>,
  ): Promise<T> {
    const client = await this.pool.connect();

    try {
      await client.query("BEGIN");
      const result = await callback(client);
      await client.query("COMMIT");
      return result;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }
}

const model = new Model();

export default model;
