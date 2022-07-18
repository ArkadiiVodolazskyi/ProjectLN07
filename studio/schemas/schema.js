import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import post from './documents/post';
import portableText from './objects/portableText';

export default createSchema({
  name: 'blog',
  types: schemaTypes.concat([
    post,
    portableText,
  ])
})
