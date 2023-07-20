import type { NavigationItems } from '@microsoft/arbutus.main-navigation';
import {
  MainNavigation,
  MainNavigationRenderer,
} from '@microsoft/arbutus.main-navigation';
import { useLocation } from '@reach/router';
import { graphql, Link, useStaticQuery } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import { getNavigationContent } from './get-navigation-content';

export type ComponentPageData = {
  _path: string;
  _orderInNav?: number;
  _includeInNav?: boolean;
  title: string;
};

export type GuidelinesPageData = {
  _path: string;
  _orderInNav?: number;
  _includeInNav?: boolean;
  title: string;
};

export type NavigationQuery = {
  allComponentsJson: {
    nodes: ComponentPageData[];
  };
  allGuidanceJson: {
    nodes: GuidelinesPageData[];
  };
};

export const Navigation: FC = () => {
  const { pathname } = useLocation();

  const data = useStaticQuery<NavigationQuery>(graphql`
    query MyQuery {
      allGuidanceJson {
        nodes {
          _path
          _orderInNav
          _includeInNav
          title
        }
      }
      allComponentsJson {
        nodes {
          _path
          _includeInNav
          title
        }
      }
    }
  `);

  const { components, guidance } = getNavigationContent(data);

  const items: NavigationItems = {
    gettingStarted: {
      title: 'Getting Started',
      id: '/getting-started',
      linkProps: { to: '/getting-started' },
      hasDivider: true,
    },
    guidance: {
      title: 'Guidance',
      items: guidance,
    },
    components: {
      title: 'Components',
      items: components,
    },
  };

  return (
    <MainNavigation>
      <MainNavigationRenderer items={items} linkAs={Link} activeItemId={pathname} />
    </MainNavigation>
  );
};
