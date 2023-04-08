import { serve } from "https://deno.land/std@0.182.0/http/server.ts";

const DENO_TYPE_PATH = "/@deno-types"

serve(async (req: Request) => {
  let { pathname } = new URL(req.url);

  const url = new URL(pathname.replace(DENO_TYPE_PATH, ""), `https://raw.githubusercontent.com`);
  const res = await fetch(url);

  const headers = Object.fromEntries([...res.headers]);
  const typescriptTypes = new URL(DENO_TYPE_PATH + url.pathname, "https://8000-gitpodsampl-templatetyp-gxqkxjx6j7m.ws-us93.gitpod.io");
  const finalHeaders = {
    ...headers,
    ...Object.fromEntries([
      ["content-type", "text/typescript"], // pathname.startsWith(DENO_TYPE_PATH) ? "application/typescript" : 
      ['accept-ranges', 'bytes'],
      ['access-control-allow-origin', '*'],
      ['cache-control', 'max-age=30, public'],
      ...(!pathname.startsWith(DENO_TYPE_PATH) ? [['x-typescript-types', typescriptTypes.toString()]] : [])
    ])
  };

  return new Response(await res.arrayBuffer(), {
    headers: finalHeaders,
    status: 200,
  });
});