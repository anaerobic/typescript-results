"use strict";

class TimeThing {
    constructor(public hours: number, public minutes: number, public seconds: number) {

    }

    //"00:00:00"
    //"00:13:24.7960000"
    static fromString(thing: string) {
        function getSegments(str: string) {
            var array = [];
            var index = 0;
            while (index < str.length) {
                var separator = str.indexOf(":", index);
                var substr: string;
                if (separator <= 0) {
                    substr = str.substr(index);
                    index = str.length;
                } else {
                    substr = str.substr(index, separator - index);
                    index = separator + 1;
                }
                array.push(Number(substr));
            }
            return array;
        }

        var segments = getSegments(thing);
        var hours = segments[0];
        var minutes = segments[1];
        var seconds = segments[2];

        return new TimeThing(hours, minutes, seconds);
    }
}

class Result {
    constructor(public bib: number, public checkpoint: number, public time: TimeThing) {

    }

    static fromJson(json: string) {
        var data = JSON.parse(json);
        return new Result(data.bib, data.checkpoint, TimeThing.fromString(data.time));
    }
}