import { createRequestHandler, type ServerBuild } from 'react-router';
import { getLoadContext } from './context';

// @ts-ignore-error - this file won’t exist if it hasn’t yet been built
import * as build from '../build/server';

const requestHandler = createRequestHandler(build as unknown as ServerBuild);

export default {
  async fetch(request, env, ctx) {
    try {
      const loadContext = getLoadContext({
        request,
        context: {
          cloudflare: {
            // This object matches the return value from Wrangler's
            // `getPlatformProxy` used during development via Remix's
            // `cloudflareDevProxyVitePlugin`:
            // https://developers.cloudflare.com/workers/wrangler/api/#getplatformproxy
            // @ts-expect-error - virtual module provided by React Router at build time
            cf: request.cf,
            ctx: {
              waitUntil: ctx.waitUntil.bind(ctx),
              passThroughOnException: ctx.passThroughOnException.bind(ctx),
            },
            env,
          },
        },
      });
      return await requestHandler(request, loadContext);
    } catch (error) {
      console.log(error);
      return new Response('An unexpected error occurred', { status: 500 });
    }
  },
} satisfies ExportedHandler<Env>;
