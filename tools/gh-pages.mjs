// Prepares the built site (dist) for GitHub Pages, where it lives under /<repo>/ instead of the domain root.
// Every root-relative link to this site's own files and pages gets the prefix; links to other sites stay as they are.
// usage: node tools/gh-pages.mjs dist /gameplex-demo/
import fs from 'node:fs';
import path from 'node:path';

const [dir = 'dist', baseArg = '/'] = process.argv.slice(2);
const base = '/' + baseArg.replace(/^\/+|\/+$/g, '');
if (base === '/') { console.log('base is /, nothing to do'); process.exit(0); }

// top-level names this site serves (pages and folders in dist + public)
const roots = fs.readdirSync(dir).map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
// a quote (also as &quot; inside attributes), backtick, ( or = right before "/<root>" (and the end of that root name)
const own = new RegExp(`([\"'\`(=]|&quot;|&#34;|&#39;)/(?=(?:${roots.join('|')})(?:[/?#&\"'\`)\\s]|$))`, 'g');
const home = /(href=)(["'])\/\2/g;

let files = 0, hits = 0;
(function walk(d) {
  for (const n of fs.readdirSync(d)) {
    const p = path.join(d, n);
    if (fs.statSync(p).isDirectory()) { walk(p); continue; }
    if (!/\.(html|css|js|mjs|json|svg|webmanifest)$/.test(n)) continue;
    const s = fs.readFileSync(p, 'utf8');
    let c = 0;
    let out = s.replace(own, (m, q) => { c++; return `${q}${base}/`; });
    if (n.endsWith('.html')) out = out.replace(home, (m, a, q) => { c++; return `${a}${q}${base}/${q}`; });
    if (c) { fs.writeFileSync(p, out); files++; hits += c; }
  }
})(dir);
console.log(`prefixed ${hits} links in ${files} files with ${base}/`);
