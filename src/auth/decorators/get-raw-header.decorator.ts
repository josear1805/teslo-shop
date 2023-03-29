import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetRawHeader = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const rawHeaders = req.rawHeaders;

    return rawHeaders;
  },
);
