# depguard-demo

A small app pinned to **old, vulnerable package versions on purpose**, used to demo
[DepGuard](https://github.com/ManavSanghvi02/depguard) scans and fix pull requests. Do not deploy it.

- `web/`: Express app (`package-lock.json`); `nyc` bundles an old `handlebars`.
- `worker/`: Python job (`uv.lock`).
- `scripts/`: Flask endpoint (`requirements.txt`).
