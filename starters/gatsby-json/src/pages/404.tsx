import { Link } from '@microsoft/arbutus.link';
import { Text } from '@microsoft/arbutus.text';
import type { HeadFC } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';
import * as React from 'react';

const NotFoundPage = () => {
  return (
    <>
      <Text as="h1" variant="headline">
        Page not found
      </Text>
      <Text variant="paragraph">
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link as={GatsbyLink} elementProps={{ to: '/' }} isUnderlined>
          Go home
        </Link>
        .
      </Text>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
