import { cookies } from 'next/headers';

export async function POST(request) {
  const { token, email, data } = await request.json();

  const cookieStore = await cookies();
  const sessionData = JSON.stringify({
    token,
    email,
    data,
  });
  cookieStore.set('session', sessionData, {
    httpOnly: true,
    path: '/',
  });

  return Response.json({ status: 'success' });
}
