import type { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';

import type { TableListProps } from '../table-list/table-list.types';

export type TableListContextProps = {
  variant?: TableListProps['variant'];
  columnSizing?: TableListProps['columnSizing'];
  headerItems?: (string | number | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal)[];
  isCollapsed?: boolean;
};
