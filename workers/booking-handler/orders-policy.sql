alter table public.orders enable row level security;

grant usage on schema public to anon, authenticated, public;
grant insert on table public.orders to anon, authenticated, public;

drop policy if exists "Enable insert access for anyone" on public.orders;
drop policy if exists "Enable read access for authenticated admins only" on public.orders;
drop policy if exists "anon can insert pending bookings" on public.orders;
drop policy if exists "public can insert pending bookings" on public.orders;

create policy "Enable insert access for anyone"
on public.orders
for insert
with check (true);

create policy "Enable read access for authenticated admins only"
on public.orders
for select
to authenticated
using (true);

alter table public.orders
  add column if not exists traveler_count integer,
  add column if not exists tour_name text;

notify pgrst, 'reload schema';
