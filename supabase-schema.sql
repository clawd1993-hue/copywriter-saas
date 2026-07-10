-- Copywriter AI — database schema for Supabase
-- Run this in Supabase → SQL Editor once the project exists.
-- Gives every logged-in user their own private projects + chat messages.

-- PROJECTS: one row per project, owned by the logged-in user
create table if not exists public.projects (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title       text not null default 'Untitled Project',
  created_at  timestamptz not null default now()
);

-- MESSAGES: one row per chat message, tied to a project
create table if not exists public.messages (
  id          uuid primary key default gen_random_uuid(),
  project_id  uuid not null references public.projects(id) on delete cascade,
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  role        text not null check (role in ('user','assistant')),
  content     text not null,
  created_at  timestamptz not null default now()
);

-- Turn on Row-Level Security (the "everyone only sees their own stuff" rule)
alter table public.projects enable row level security;
alter table public.messages enable row level security;

-- Policies: a user can only touch rows where user_id = their own id
create policy "own projects - select" on public.projects for select using (auth.uid() = user_id);
create policy "own projects - insert" on public.projects for insert with check (auth.uid() = user_id);
create policy "own projects - update" on public.projects for update using (auth.uid() = user_id);
create policy "own projects - delete" on public.projects for delete using (auth.uid() = user_id);

create policy "own messages - select" on public.messages for select using (auth.uid() = user_id);
create policy "own messages - insert" on public.messages for insert with check (auth.uid() = user_id);
create policy "own messages - delete" on public.messages for delete using (auth.uid() = user_id);
