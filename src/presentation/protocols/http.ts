interface IHttpRequest {
  body?: any;
  headers: {
    authorization: string;
  };
  params?: any;
}

interface IHttpResponse {
  statusCode: number;
  data: any;
}

export { IHttpRequest, IHttpResponse };
