import {it, expect, beforeAll, afterAll, describe} from 'vitest';
import {unstable_dev, UnstableDevWorker} from 'wrangler';

describe('test', async () => {
    let worker: UnstableDevWorker;

    beforeAll(async () => {
        worker = await unstable_dev('src/index.ts', {
            experimental: {disableExperimentalWarning: true},
            // logLevel: 'debug'
        });
    });

    afterAll(async () => {
        await worker.stop();
    });

    it('test', async () => {
        await new Promise<void>(resolve => setTimeout(() => resolve(), 1)) // comment this out and the test always passes
        const resp = await worker.fetch('', {
            method: 'PUT',
            body: 'bar'
        });
        expect(resp.status).toBe(404);
    }, {repeats: 1000});
});
