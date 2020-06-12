import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import { AssertionError } from 'assert';


describe('our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window){
            const h1 = window.document.querySelector('h1');
            expect(h1.innerHTML).to.equal("hey love na code");
            done();
            window.close();
        });
    });
});