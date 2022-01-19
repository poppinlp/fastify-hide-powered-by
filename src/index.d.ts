import {FastifyInstance} from "fastify";
export type HideOptions {
	setTo?: string
}
declare function hidePoweredBy(inst:FastifyInstance, opts:HideOptions, next:()=>void):void
export default hidePoweredBy;
