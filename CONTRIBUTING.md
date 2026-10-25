# Contributing to AnyPlay

These rules hold in every AnyPlay repository. A repository can add its own `CONTRIBUTING.md`; that file then applies there too.

> **Until the first live version of the network, only the AnyPlay team opens issues and pull requests.** Ideas, questions and bug reports are welcome on the [AnyPlay Discord](https://discord.gg/9zYqf8fEsh). Security problems go privately, as [SECURITY.md](SECURITY.md) describes.

## How to work

- Open an issue before larger changes.
- Write issues, commits and pull requests in English. Keep commits small and topical, with one topic per pull request.
- In Rust repositories, run `cargo fmt --all -- --check`, `cargo clippy --workspace --all-targets -- -D warnings` and `cargo test --workspace` before you open a pull request.
- Your contribution is released under the license of the repository you contribute to.

## The line

The network goes as far as the law allows and no further ([ADR 0021](https://github.com/anyplaynet/network/blob/main/docs/adr/0021-the-line-is-drawn-at-the-law.md)).

- Never add game files, keys, firmware, or anything taken from a platform holder's SDK or servers. Nothing contacts their servers.
- Nothing issues, forges or forwards platform or publisher tokens, poses as a real console, stands in for a publisher service that still runs, or bypasses anti-cheat or copy protection. A revival server is only for a service the publisher has shut down, and it is written from observation, never from the publisher's code or keys.
- Network formats come only from observing games you own, written down as our own specifications before any code ([how games are observed](https://github.com/anyplaynet/network/blob/main/docs/OBSERVING.md)).
- No platform trademarks in our names.

## Behaviour

- **Never a made-up success.** What is not known is refused or answered as offline, never with a guess that happens to work for one game.
- **General behaviour.** Code implements an API for every game, not a fix for one title. In the network and the bridge, title IDs appear in specifications, tests and pull requests, never in code. A launcher keeps what it knows per title in data files.
- **Known gaps are written down** where the repository keeps them (the network's [docs/gaps.md](https://github.com/anyplaynet/network/blob/main/docs/gaps.md)), not left in comments.
- **Numbers, not impressions.** A claim about speed comes with measurements from the same machines, such as `anyplay-probe` for the network.

## Tests

- Tests are hermetic: they start their own servers on loopback and never need the internet or a game.
- A test finishes in seconds. Split one that gets slow instead of raising its timeout.
- A test checks behaviour, not only that something exists.

## Dependencies

- Every dependency must suit the license of the repository. `cargo-deny` checks it with the repository's `deny.toml`, together with security advisories and where crates come from. The launcher is GPL-2.0-only, so a crate offered only under Apache-2.0 does not fit; an exception in `deny.toml` names the crate and why.
- An advisory that does not apply is listed in `deny.toml` with the reason, and the update that removes it is planned.

## Documentation

- Words come from the repository's `CONTEXT.md`, decisions go in `docs/adr`, and interfaces in `spec/` or the design.
- A README stays short: what it is, how to get it, what's inside, status, how to build, where to talk, license. Detail goes in `docs/`.
- Relative links in Markdown must lead somewhere. CI checks them, together with the other shared rules ([rules workflow](.github/workflows/rules.yml)).
- Examples use `GAME00001` as a title ID, never a real one. READMEs show no game art.
