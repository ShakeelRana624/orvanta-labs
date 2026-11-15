import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const oldOrigin = 'https://orvanta-labs.sociableanchovy16.chatgpt.site';
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const supplied = process.env.SITE_URL || (host ? `https://${host}` : 'http://localhost:3000');
const url = new URL(supplied);
if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash || url.pathname !== '/') {
  throw new Error('SITE_URL must be a plain http(s) origin without credentials, path, query or fragment.');
}
if (process.env.VERCEL && (url.protocol !== 'https:' || url.hostname === 'localhost')) {
  throw new Error('Vercel deployments require a public HTTPS SITE_URL or Vercel system URL.');
}
const output = path.join(root, 'public');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, 'dist'), output, { recursive: true });
async function update(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await update(file);
    else if (/\.(html|js|xml|txt)$/.test(entry.name)) {
      const source = await readFile(file, 'utf8');
      await writeFile(file, source.replaceAll(oldOrigin, url.origin));
    }
  }
}
await update(output);
// Vercel uses vercel.json for response headers, not Netlify-style _headers.
await rm(path.join(output, '_headers'), { force: true });
console.log(`Prepared static website in public/ for ${url.origin}`);
