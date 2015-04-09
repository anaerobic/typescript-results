/// <reference path="../lib/typings/jasmine/jasmine.d.ts" />
/// <reference path="results.ts" />

describe("Result tests",() => {

    var expects = JSON.parse("[{\"bib\":1,\"checkpoint\":0,\"time\":\"00:00:00\"},{\"bib\":1,\"checkpoint\":1,\"time\":\"00:26:54.6970000\"}]");

    function iterate (callback) {
        for (var i = 0; i < expects.length; i++) {
            var exp = expects[i];
            callback(exp, Result.fromJson(JSON.stringify(exp)));
        }
    }
    
    it("has a valid bib",() => {
        iterate((exp, act) => {
            expect(act.bib).toBe(exp.bib);
        });
    });

    it("has a valid checkpoint",() => {
        iterate((exp, act) => {
            expect(act.checkpoint).toBe(exp.checkpoint);
        });
    });

    it("has a valid time",() => {
        iterate((exp, act) => {
            expect(act.time).toEqual(TimeThing.fromString(exp.time));
        });
    });
});