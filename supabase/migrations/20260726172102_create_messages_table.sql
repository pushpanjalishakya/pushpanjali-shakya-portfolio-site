/*
# Create messages table for contact form

1. New Tables
- `messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `message` (text, not null) — the message body
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `messages`.
- This is a no-auth portfolio site (no sign-in screen), so the anon-key
  frontend client must be able to INSERT new messages. Public visitors
  should NOT be able to read or delete other people's messages, so only
  INSERT is opened to anon/authenticated. SELECT/UPDATE/DELETE are left
  without policies, meaning only the service-role key (server side) can
  read or manage them — the portfolio owner retrieves messages via the
  Supabase dashboard or a future authenticated admin view.
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_messages" ON messages;
CREATE POLICY "anon_insert_messages" ON messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);
