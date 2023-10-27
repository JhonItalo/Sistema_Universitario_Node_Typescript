import { Request, Response } from "express";
import { IHttpRequest } from "../protocols/http";

class ExpressAdapter {
  static adapt(controller) {
    return async (req: Request, res: Response): Promise<Response> => {
      const httpRequest: IHttpRequest = {
        body: req.body,
        params: req.params,
        headers: {
          authorization: req.headers.authorization,
        },
      };
      const { statusCode, data } = await controller.handle(httpRequest);
      return res.status(statusCode).json(data);
    };
  }
}

export default ExpressAdapter;
