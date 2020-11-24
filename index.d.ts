import express = require('express');

declare function expressAsyncHandler<P, ResBody, ReqBody, ReqQuery>(handler: express.RequestHandler<P, ResBody, ReqBody, ReqQuery>): express.RequestHandler<P, ResBody, ReqBody, ReqQuery>;
declare namespace expressAsyncHandler {

}

export = expressAsyncHandler;
