import {
  createRequestHandler,
  handleAsset,
} from "@remix-run/cloudflare-workers";
import * as build from "@remix-run/dev/server-build";
function createEventHandler({ build, getLoadContext, mode }) {
  let handleRequest = createRequestHandler({
    build,
    getLoadContext,
    mode,
  });

  let handleEvent = async (event) => {
    let response = await handleAsset(event, build);
    const cache = caches.default;

    if (!response) {
      response = await cache.match(event.request);
      if (!response) {
        response = await handleRequest(event);
        if (process.env.NODE_ENV === "development") {
          return response;
        }
        const headers = { "cache-control": "public, max-age=604800" };
        response = new Response(response.body, { ...response, headers });
        event.waitUntil(cache.put(event.request, response.clone()));
      }
    }
    return response;
  };

  return (event) => {
    try {
      event.respondWith(handleEvent(event));
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        event.respondWith(
          new Response(e.message || e.toString(), {
            status: 500,
          })
        );
        return;
      }

      event.respondWith(
        new Response("Internal Error", {
          status: 500,
        })
      );
    }
  };
}
addEventListener(
  "fetch",
  createEventHandler({ build, mode: process.env.NODE_ENV })
);
