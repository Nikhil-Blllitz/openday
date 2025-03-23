import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

console.log('DATABASE_URL:', process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(request: NextRequest) {
  try {
    const {
      registrationType,
      name,
      email,
      phoneNumber,
      state,
      city,
      interest,
      accompaniedBy,
    } = await request.json();

    console.log('Received form data:', {
      registrationType,
      name,
      email,
      phoneNumber,
      state,
      city,
      interest,
      accompaniedBy,
    });

    const testConnection = await pool.query('SELECT NOW()');
    console.log('Database connection test:', testConnection.rows[0]);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS registrations (
        id SERIAL PRIMARY KEY,
        registration_type VARCHAR(50) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20),
        state VARCHAR(100),
        city VARCHAR(100) NOT NULL,
        interest VARCHAR(100),
        accompanied_by VARCHAR(10),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const query = `
      INSERT INTO registrations (registration_type, name, email, phone_number, state, city, interest, accompanied_by)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `;
    const values = [
      registrationType,
      name,
      email,
      phoneNumber,
      state,
      city,
      interest === 'Select Your Interest' ? null : interest,
      accompaniedBy === 'Accompanied By (Including you)' ? null : accompaniedBy,
    ];

    const result = await pool.query(query, values);
    return NextResponse.json({ success: true, data: result.rows[0] }, { status: 200 });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM registrations');
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}