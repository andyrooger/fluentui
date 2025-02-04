# @fluentui/react-search

**React Search components for [Fluent UI React](https://react.fluentui.dev/)**

These are not production-ready components and **should never be used in product**. This space is useful for testing new components whose APIs might change before final release.

SearchBox allows the users to access information with ease, providing flexibility and the ability to clear and filter the input to provide the best experience.

### Usage

Import SearchBox:

```js
import { SearchBox } from '@fluentui/react-components';
```

#### Examples

```jsx
<SearchBox defaultValue="Hello, World!" />
<SearchBox value={value} onChange={onInputChange} />
```

See [Fluent UI Storybook](https://react.fluentui.dev/) for more detailed usage examples.

Alternatively, run Storybook locally with:

1. `yarn start`
2. Select `react-search` from the list.

### Specification

See [Spec.md](./docs/Spec.md)

### Upgrade Guide

If you're upgrading to Fluent UI v9 see the upgrade guide in [Storybook](https://react.fluentui.dev/) under Concepts > Upgrading.
