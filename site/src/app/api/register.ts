import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Render PostgreSQL
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, state, city, interest, attendees } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ message: "Name and Email are required" }, { status: 400 });
    }

    const client = await pool.connect();
    await client.query(
      `INSERT INTO registrations (name, email, phone, state, city, interest, attendees, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())`,
      [name, email, phone, state, city, interest, attendees]
    );
    client.release();

    return NextResponse.json({ message: "Registration successful!" }, { status: 201 });

  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
