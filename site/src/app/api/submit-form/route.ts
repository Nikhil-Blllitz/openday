import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Initialize PostgreSQL client
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Render
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Create table if it doesn't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS form_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert form data into the table
    const query = `
      INSERT INTO form_submissions (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [name, email, message];
    const result = await pool.query(query, values);

    return NextResponse.json({ success: true, data: result.rows[0] }, { status: 200 });
  } catch (error) {
    console.error('Error saving form data:', error);
    return NextResponse.json({ success: false, error: 'Failed to save data' }, { status: 500 });
  }
}