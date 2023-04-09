# deno-github-proxy
Allows for easy imports of ts files from GitHub while still keeping type inferencing.

Example usage in Deno

```ts
import * as neo4j from 'https://github-ts.okikio.workers.dev/neo4j/neo4j-javascript-driver/5.0/packages/neo4j-driver-deno/lib/mod.ts';

/**
 * Create a new driver instance to connect to Neo4j
 * @type {neo4j.Driver}
 * @see https://neo4j.com/docs/api/javascript-driver/current/class/src/driver.js~Driver.html
 * @see https://neo4j.com/docs/api/javascript-driver/current/global.html#Config
 */
const driver: neo4j.Driver = neo4j.driver(
  Deno.env.get('NEO4J_URI') as string,
  neo4j.auth.basic( 
    Deno.env.get('NEO4J_USERNAME') as string, 
    Deno.env.get('NEO4J_PASSWORD') as string 
  )
);

export default driver;
```

^ You can also use this to fetch Javascript but you'll need to load js with the `/?js` search query https://github-ts.okikio.workers.dev/okikio/transferables/main/lib/index.mjs?js
