import { unknownError } = from "../error/errorcode.js";

tryCatch = (fn) => {
  return (async (req, res, next) => {
    try {
      return await fn(req, res, next)
    }
    catch (err) {
      console.error(err)
      return next(unknownError);
    }
  })
};

export const {
  tryCatch
};