import type { Context } from "@netlify/functions";

const getWorkerTypes = async (req: Request, context: Context) => {
  // validate the request
  // call the model
  // return the response
  return new Response("Hello world!");
};

export default getWorkerTypes;
