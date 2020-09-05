var assert = require('assert');
var sinon = require('sinon');
var trends = require('../src/authentication');
const oauth = require('oauth');

describe('authentication service', async function () {
    beforeEach(async function () {
        this.getTrends = sinon.stub(
            new oauth.OAuth(
                'https://test.com',
                'https://test.com',
                'key',
                'secret',
                '1.0A',
                null,
                'HMAC-SHA1'
            ),
            'get'
        );
    });

    afterEach(function () {
        sinon.restore();
    });

    describe('#getTrends()', function () {
        it('respond with matching trends', async function () {
            await trends.getTrends({
                url: 'https"//test.com',
                callback: sinon.fake(),
            });
            assert(oauth.calledOnce);
        });
    });
});
