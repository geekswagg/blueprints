﻿import { beforeAll, describe, expect, test } from '@jest/globals';
import { addAllSchemas, compile } from '../utils/ajv-utils';

let validate;

try {
    addAllSchemas();
    validate = compile('@microsoft/arbutus.json-schemas/layouts/layout.schema.json');
} catch (ex) {
    console.error(ex);
}

describe('home page schema', () => {
    test('home.json should be valid', () => {
        const data = require('./../../../../starters/gatsby-json/src/content/home/home.json');
        const valid = validate(data);
        if (!valid) console.log(validate.errors);
        expect(valid).toBe(true);
    });
});