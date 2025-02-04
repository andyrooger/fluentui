import * as React from 'react';
import { useDataGrid_unstable } from './useDataGrid';
import {
  renderDataGrid_unstable,
  useDataGridStyles_unstable,
  useDataGridContextValues_unstable,
} from '@fluentui/react-table';
import type { DataGridProps } from '@fluentui/react-table';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * @deprecated - please use [\@fluentui-contrib/react-data-grid-react-window](https://www.npmjs.com/package/\@fluentui-contrib/react-data-grid-react-window) instead
 */
export const DataGrid: ForwardRefComponent<DataGridProps> = React.forwardRef((props, ref) => {
  const state = useDataGrid_unstable(props, ref);

  useDataGridStyles_unstable(state);
  return renderDataGrid_unstable(state, useDataGridContextValues_unstable(state));
});

// eslint-disable-next-line deprecation/deprecation
DataGrid.displayName = 'DataGrid';
