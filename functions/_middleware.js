// Serve the participant guide at the subdomain root without changing the main site.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'hackathon.codexparatodos.com' && url.pathname === '/') {
    url.pathname = '/hackathon/';
    return context.env.ASSETS.fetch(new Request(url, context.request));
  }
  return context.next();
}
