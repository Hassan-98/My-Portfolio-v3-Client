import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw'

const baseUrl = 'http://localhost:9999';

export function serverRequests(handlerConfig: HandlerConfig[]) {
  const handlers = handlerConfig.map((config) => {
    return http[config.method || 'get'](baseUrl + config.path, (context) => {
      const { data, success } = config.handler(context as any);
      return HttpResponse.json({
        success: success || true,
        message: '',
        data
      }, { status: 200 });
    });
  });

  const server = setupServer(...handlers);

  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });
}


interface HandlerConfig {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  path: string;
  handler: (context: any) => any;
}