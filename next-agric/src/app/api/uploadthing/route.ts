import { createNextRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
<<<<<<< HEAD
  router: ourFileRouter,
});
=======
    router: ourFileRouter,
});
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
