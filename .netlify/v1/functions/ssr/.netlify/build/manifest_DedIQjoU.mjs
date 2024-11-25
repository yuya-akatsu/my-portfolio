import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_Bvyz7Nc1.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (ctx, next) => {
  ctx.request.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return next();
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/yuyaakatsu/my-portfolio/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CotoUxb7.js"}],"styles":[{"type":"external","src":"/_astro/_blogId_.P2DIGuDZ.css"},{"type":"inline","content":".line[data-astro-cid-3ef6ksr2]:before{content:\"\";background:#000;position:absolute;left:0;bottom:0;width:100%;height:2px;transform:scaleX(0);transform-origin:right top;transition:transform .3s}.line[data-astro-cid-3ef6ksr2]:hover:before{transform-origin:left top;transform:scale(1)}#loader[data-astro-cid-37fxchfa]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#f3f4f6;display:flex;justify-content:center;align-items:center;z-index:9999}.circle[data-astro-cid-37fxchfa]{width:50px;height:50px;background:#fff;border-radius:50%}#mainVisual[data-astro-cid-37fxchfa]{text-align:center;padding:50px 20px;opacity:0;transform:translateY(20px)}\n"}],"routeData":{"route":"/trump-game","isIndex":false,"type":"page","pattern":"^\\/trump-game\\/?$","segments":[[{"content":"trump-game","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/trump-game.astro","pathname":"/trump-game","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_blogId_.P2DIGuDZ.css"}],"routeData":{"route":"/[blogid]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"blogId","dynamic":true,"spread":false}]],"params":["blogId"],"component":"src/pages/[blogId].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B7Q7aTaH.js"}],"styles":[{"type":"external","src":"/_astro/_blogId_.P2DIGuDZ.css"},{"type":"inline","content":".line[data-astro-cid-3ef6ksr2]:before{content:\"\";background:#000;position:absolute;left:0;bottom:0;width:100%;height:2px;transform:scaleX(0);transform-origin:right top;transition:transform .3s}.line[data-astro-cid-3ef6ksr2]:hover:before{transform-origin:left top;transform:scale(1)}#loader[data-astro-cid-37fxchfa]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#f3f4f6;display:flex;justify-content:center;align-items:center;z-index:9999}.circle[data-astro-cid-37fxchfa]{width:50px;height:50px;background:#fff;border-radius:50%}#mainVisual[data-astro-cid-37fxchfa]{text-align:center;padding:50px 20px;opacity:0;transform:translateY(20px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/yuyaakatsu/my-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/yuyaakatsu/my-portfolio/src/pages/trump-game.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/trump-game@_@astro":"pages/trump-game.astro.mjs","\u0000@astro-page:src/pages/[blogId]@_@astro":"pages/_blogid_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DedIQjoU.mjs","/Users/yuyaakatsu/my-portfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CotoUxb7.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","/astro/hoisted.js?q=1":"_astro/hoisted.B7Q7aTaH.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_blogId_.P2DIGuDZ.css","/mainVisualImage.jpg","/_astro/client.5I5BMcNS.js","/_astro/hoisted.B7Q7aTaH.js","/_astro/hoisted.CotoUxb7.js","/trump-game/number1.jpg","/trump-game/number10.jpg","/trump-game/number2.jpg","/trump-game/number3.jpg","/trump-game/number4.jpg","/trump-game/number5.jpg","/trump-game/number6.jpg","/trump-game/number7.jpg","/trump-game/number8.jpg","/trump-game/number9.jpg","/trump-game/trump-game-ogp.png","/trump-game/trump1.png","/trump-game/trump10.png","/trump-game/trump2.png","/trump-game/trump3.png","/trump-game/trump4.png","/trump-game/trump5.png","/trump-game/trump6.png","/trump-game/trump7.png","/trump-game/trump8.png","/trump-game/trump9.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"YdpYw+9o754IFiriBZOJI/BWxjMbelfWMuYL3jExkOo=","experimentalEnvGetSecretEnabled":false});

export { manifest };
