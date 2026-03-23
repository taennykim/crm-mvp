# crm-mvp

Insurance CRM MVP planning documents and a simple CS AI Agent demo app.

## Included Documents

- `MVP_PLAN.md`
- `UI_REFERENCE_PLAN.md`
- `UI_REFERENCES.md`
- `WIREFRAME.md`
- `AWS_PLAN.md`
- `LLM_PLAN.md`
- `APPROVAL_LOG.md`
- `TASK_BOARD.md`
- `DAILY_TEMPLATE.md`
- `daily/`

## Goal

Build a simple insurance CRM MVP with:

- consultation history
- question input
- AI answer panel
- backend proxy for Gemini API

## App Structure

- `src/`: React frontend
- `server/`: Express API proxy
- `.env.example`: required environment variables

## Local Run

1. Copy `.env.example` to `.env` and set `GEMINI_API_KEY`.
2. Run `npm install`.
3. Start the API server with `npm run server`.
4. Start the frontend with `npm run dev`.

The Vite dev server proxies `/api` and `/health` requests to `http://localhost:8787`.

## Working Rules

- AWS-based environment
- parallel workstreams for UI, AWS, and LLM
- minimum permissions and firewall changes
- approval-first for sensitive changes
