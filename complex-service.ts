import * as neo4j from 'https://github-ts.deno.dev/neo4j/neo4j-javascript-driver/5.0/packages/neo4j-driver-deno/lib/mod.ts';

/**
 * Create a new driver instance to connect to Neo4j
 * @type {neo4j.Driver}
 * @see https://neo4j.com/docs/api/javascript-driver/current/class/src/driver.js~Driver.html
 * @see https://neo4j.com/docs/api/javascript-driver/current/global.html#Config
 */
const driver: neo4j.Driver = neo4j.driver(
                    // ^ Does type inferencing work?
  "",
  neo4j.auth.basic( "", "" )
);

export default driver;