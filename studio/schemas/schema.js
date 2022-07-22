import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import portableText from './objects/portableText';
import post from './documents/post';
import work from './documents/work';
import tool from './documents/tool';
import tool_category from './documents/tool_category';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    portableText,
    work,
    tool,
    tool_category
  ])
})
