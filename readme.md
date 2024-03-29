# Generate Distinct Colors

This package generates a specified number of visually distinct colors across the HCL color space using the `iwanthue` library.

## Installation

To install the package, run:

```bash
npm install generate_distinct_colors
```

## Usage

```typescript
import generateDistinctColors from 'generate_distinct_colors';

// Generate 5 distinct colors with default options
const colors = await generateDistinctColors(5);

// Generate 3 distinct colors with custom options
const options = {
  attempts: 50,
  quality: 600,
  colorSpace: [0, 360, 60, 100, 0, 100],
  clustering: 'k-means',
  seed: 42,
};
const customColors = await generateDistinctColors(3, options);
```

### Parameters

- `colorNum` (number): The number of distinct colors to generate.
- `options` (optional, IWantHueSettings): Custom options for generating colors.
  - `attempts` (number, default: 100): The number of attempts to generate colors.
  - `quality` (number, default: 800): The quality of the generated colors.
  - `colorSpace` (array, default: [0, 330, 75, 100, 0, 80]): The color space to generate colors from.
  - `clustering` (string, default: 'force-vector'): The clustering algorithm to use.
  - `seed` (number, default: 1): The random seed for generating colors.

### Return Value

A promise that resolves to an array of hex color strings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This package is licensed under the ISC License.
