import cookies from "next-cookies";

export const unAuthPage = async (ctx) => {
  return new Promise((resolve) => {
    const cookie = cookies(ctx);
    if (cookie.token) {
      return ctx.res
        .writeHead(302, {
          location: "/admin",
        })
        .end();
    }
    return resolve("Unauthorized");
  });
};

export const authPage = async (ctx) => {
  return new Promise((resolve) => {
    const cookie = cookies(ctx);
    if (!cookie.token) {
      return ctx.res
        .writeHead(302, {
          location: "/admin/login",
        })
        .end();
    }
    return resolve(cookie.token);
  });
};
