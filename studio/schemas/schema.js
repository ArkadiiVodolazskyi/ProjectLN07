import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import portableText from './objects/portableText';
import post from './documents/post';
import post_author from './documents/post_author';
import post_category from './documents/post_category';
import work from './documents/work';
import tool from './documents/tool';
import tool_category from './documents/tool_category';
import snippet from './documents/snippet';
import tech_tag from './documents/tech_tag';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    post_author,
    post_category,
    portableText,
    work,
    tool,
    tool_category,
    snippet,
    tech_tag
  ])
})
