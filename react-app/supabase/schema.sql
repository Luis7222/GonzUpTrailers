-- Apply in the Supabase SQL editor after creating your project.
create table if not exists public.trailers (
  id text primary key,
  status text not null check (status in ('available','rented','in_service')),
  updated_at timestamptz not null default now()
);
insert into public.trailers(id,status) values
('trailer1','available'),('trailer2','rented'),('trailer3','available'),
('trailer4','available'),('trailer5','rented'),('trailer6','available'),
('trailer7','available'),('trailer8','rented'),('trailer9','available')
on conflict (id) do nothing;
create table if not exists public.owner_accounts (
  user_id uuid primary key references auth.users(id) on delete cascade
);
alter table public.trailers enable row level security;
alter table public.owner_accounts enable row level security;
create policy "Anyone can read trailer status" on public.trailers for select to anon,authenticated using (true);
create policy "Owners can read own membership" on public.owner_accounts for select to authenticated using (user_id = (select auth.uid()));
create policy "Owner can update trailer status" on public.trailers for update to authenticated using (exists (select 1 from public.owner_accounts where user_id = (select auth.uid()))) with check (exists (select 1 from public.owner_accounts where user_id = (select auth.uid())));
-- After signing in for the first time, insert YOUR user UUID using the SQL editor:
-- insert into public.owner_accounts(user_id) values ('YOUR_AUTH_USER_UUID');
-- Never put service_role keys or private registration data in frontend code.
