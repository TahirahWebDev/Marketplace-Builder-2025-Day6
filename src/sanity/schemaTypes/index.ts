import { type SchemaTypeDefinition } from 'sanity';
import blog from './blog';
import { product } from './product';
import {browseRange} from './browseRange';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, product, browseRange],
};
