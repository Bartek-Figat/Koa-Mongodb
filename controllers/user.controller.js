const Koa = require("koa");
const Router = require("koa-router");

const { findAllUsers } = require("./user.controller");

const router = new Router();

router.get("/", async (ctx, next) => {
  try {
    const user = await findAllUsers;
    next();
    ctx.body = { user };
  } catch (error) {
    console.error(error);
  }
});

router.post("/post", async (ctx) => {
  try {
    const { name } = ctx.request.body;

    return (ctx.body = {
      code: 200,
      message: `${name}`,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = {
  router,
};
