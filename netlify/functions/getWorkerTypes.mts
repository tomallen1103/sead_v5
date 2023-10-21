import type { Context } from "@netlify/functions";

const getWorkerTypes = async (req: Request, context: Context) => {
  return new Response("Hello world!");
};

export default getWorkerTypes;
