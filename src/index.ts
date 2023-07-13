export interface Env {
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        try {
            return new Response('not found', {status: 404});
        } catch (e) {
            console.error(`worker error: ${e}`);
            throw e;
        }
    }
};