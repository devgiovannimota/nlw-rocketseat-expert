import { fastify } from "fastify";
import cookie from "@fastify/cookie";
import { createPoll } from "../routes/create-poll";
import { getPoll } from "../routes/get-poll";
import { voteOnPoll } from "../routes/vote-on-poll";
import "dotenv/config";

const cookieSecret = process.env.COOKIE_SECRET;
const app = fastify();
console.log();
app.register(cookie, {
  secret: cookieSecret,
  hook: "onRequest",
});
app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Htpp server is running");
  });
