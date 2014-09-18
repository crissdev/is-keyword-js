'use strict';

var test = require('ava'),
    isKeyword = require('./');


test('undefined should not be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword(undefined) === false);
});

test('abstract should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('abstract') === true);
});

test('await should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('await') === true);
});

test('boolean should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('boolean') === true);
});

test('break should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('break') === true);
});

test('byte should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('byte') === true);
});

test('case should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('case') === true);
});

test('catch should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('catch') === true);
});

test('char should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('char') === true);
});

test('class should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('class') === true);
});

test('const should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('const') === true);
});

test('continue should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('continue') === true);
});

test('debugger should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('debugger') === true);
});

test('default should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('default') === true);
});

test('delete should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('delete') === true);
});

test('do should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('do') === true);
});

test('double should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('double') === true);
});

test('else should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('else') === true);
});

test('enum should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('enum') === true);
});

test('export should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('export') === true);
});

test('extends should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('extends') === true);
});

test('false should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('false') === true);
});

test('final should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('final') === true);
});

test('finally should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('finally') === true);
});

test('float should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('float') === true);
});

test('for should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('for') === true);
});

test('function should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('function') === true);
});

test('goto should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('goto') === true);
});

test('if should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('if') === true);
});

test('implements should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('implements') === true);
});

test('import should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('import') === true);
});

test('in should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('in') === true);
});

test('instanceof should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('instanceof') === true);
});

test('int should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('int') === true);
});

test('interface should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('interface') === true);
});

test('let should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('let') === true);
});

test('long should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('long') === true);
});

test('native should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('native') === true);
});

test('new should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('new') === true);
});

test('null should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('null') === true);
});

test('package should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('package') === true);
});

test('private should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('private') === true);
});

test('protected should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('protected') === true);
});

test('public should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('public') === true);
});

test('return should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('return') === true);
});

test('short should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('short') === true);
});

test('static should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('static') === true);
});

test('super should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('super') === true);
});

test('switch should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('switch') === true);
});

test('synchronized should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('synchronized') === true);
});

test('this should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('this') === true);
});

test('throw should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('throw') === true);
});

test('transient should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('transient') === true);
});

test('true should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('true') === true);
});

test('try should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('try') === true);
});

test('typeof should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('typeof') === true);
});

test('var should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('var') === true);
});

test('void should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('void') === true);
});

test('volatile should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('volatile') === true);
});

test('while should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('while') === true);
});

test('with should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('with') === true);
});

test('yield should be considered keyword', function(t) {
    t.plan(1);
    t.assert(isKeyword('yield') === true);
});
