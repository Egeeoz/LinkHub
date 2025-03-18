import { cookies } from 'next/headers';

export async function POST(request) {
  const { token } = await request.json();

  const cookieStore = await cookies();
  cookieStore.set('session', token, {
    httpOnly: true,
    path: '/',
  });

  return Response.json({ status: 'success' });
}
