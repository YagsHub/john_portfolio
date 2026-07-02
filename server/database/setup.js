import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function setupDatabase() {
  const reset = process.argv.includes('--reset');
  const client = await pool.connect();
  try {
    const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await client.query(schema);
    console.log('✓ Schema created successfully');

    if (reset) {
      await client.query(
        'TRUNCATE profile, skills, projects, certifications, experience RESTART IDENTITY'
      );
      console.log('✓ Cleared existing portfolio data (contact messages kept)');
    }

    const profileCount = await client.query('SELECT COUNT(*) FROM profile');
    if (reset || parseInt(profileCount.rows[0].count) === 0) {
      const seed = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');
      await client.query(seed);
      console.log('✓ Seed data inserted successfully');
    } else {
      console.log('✓ Database already has data, skipping seed (use --reset to replace)');
    }
  } catch (error) {
    console.error('Database setup failed:', error.message);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

setupDatabase();
