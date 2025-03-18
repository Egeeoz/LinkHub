import { cookies } from 'next/headers';

export async function POST(request) {
  const { token, email, companyName, organizationNumber } =
    await request.json();

  const cookieStore = await cookies();
  const sessionData = JSON.stringify({
    token,
    email,
    companyName,
    organizationNumber,
  });
  cookieStore.set('session', sessionData, {
    httpOnly: true,
    path: '/',
  });

  return Response.json({ status: 'success' });
}
