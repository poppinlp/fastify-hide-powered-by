import {FastifyInstance} from "fastify";
declare function hidePoweredBy(inst:FastifyInstance, opts:object, next:()=>void):void
export default hidePoweredBy;
