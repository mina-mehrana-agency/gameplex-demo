// Runs Astro dev without the launcher's Node-version gate (laptop Node 22.23.2).
const root = 'D:/Mehrana Holding/gameplex/site';
process.chdir(root);
const { cli } = await import('file:///' + root + '/node_modules/astro/dist/cli/index.js');
await cli([process.argv[0], 'astro', 'dev', '--host', '127.0.0.1', '--port', '4370']);
