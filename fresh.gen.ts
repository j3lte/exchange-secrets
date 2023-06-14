// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/_middleware.tsx";
import * as $2 from "./routes/api/secret/index.tsx";
import * as $3 from "./routes/auth/callback.ts";
import * as $4 from "./routes/auth/signin.ts";
import * as $5 from "./routes/auth/signout.ts";
import * as $6 from "./routes/index.tsx";
import * as $$0 from "./islands/CreateSecret.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/_middleware.tsx": $1,
    "./routes/api/secret/index.tsx": $2,
    "./routes/auth/callback.ts": $3,
    "./routes/auth/signin.ts": $4,
    "./routes/auth/signout.ts": $5,
    "./routes/index.tsx": $6,
  },
  islands: {
    "./islands/CreateSecret.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
