# Featier
![Build Status](https://img.shields.io/github/actions/workflow/status/amrsaeedhosny/featier/ci.yml)

A minimalist feature flagging package for small and proof-of-concept projects.

## Features

- Easy to use feature flags with boolean values  
- Lightweight and minimal dependency  

## Installation

```bash
npm install featier
```

## Usage

```typescript
import { Featier } from 'featier';

const featier = new Featier({ darkMode: true });

if (featier.isOn('darkMode')) {
  console.log('Dark mode is enabled');
}
```

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE.md) file for details.
