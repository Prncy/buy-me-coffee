# Buy Me a Coffee

A lightweight creator-support page built with React, Vite and plain CSS.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Current status

- Responsive support landing page
- Preset and custom contribution amounts (ZMW)
- Optional supporter name and message
- Anonymous support toggle
- Payment action is a placeholder; no transactions are processed yet

## Payment integration

The next phase is to select a provider that onboards Zambian merchants and supports the payment methods we want. Payment initiation and verification must happen in a trusted server-side function. Never expose secret API keys in the browser or commit them to this repository.

No database is required for the initial payment flow.
