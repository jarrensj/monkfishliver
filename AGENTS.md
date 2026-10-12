<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commit & PR guidelines

- **One feature per PR — no coupling.** Each feature reviews, merges, and reverts independently. A change spanning two features is two PRs.
- **Follow-ups live in the code as TODO comments.** If a PR description notes a follow-up that is required or recommended (but out of scope for this PR), also leave a `TODO:` comment at the relevant spot in the code describing it, so it isn't forgotten while the PR stays one feature.
- **Each PR is complete, not half-plumbing** — its migration and the code/API/UI that uses it and a working path. No dead schema.
- **Migrations created incrementally** — only what the current PR needs. Never scaffold a phase's migrations up front. Number sequentially (`0002_…`) in PR-merge order.
- **Migrations are append-only** — never edit a merged migration; write a new one.
- **Chain PRs as necessary** — if someone can't review right away, chain off each other instead of waiting; otherwise try to make each PR off latest `origin/main`.
- **Fill the PR template's Deployment Notes** — migration/env needed? migration run? (`supabase db push` as part of merging).
- **Keep PRs reviewable** — small enough to read in one sitting.
- **Plain commit messages — no AI-attribution trailers.** Subject + body only. Never append `Co-Authored-By: Claude …` (or any AI/assistant attribution) to a commit.
- **Graduate to review, don't merge** — open each PR for review (`gh pr ready`) and stack dependents on its branch.
