# Contributing to AnyPlay

These rules hold in every AnyPlay repository. A repository can add its own `CONTRIBUTING.md`; that file then applies there too.

> **Issues and pull requests are open in [launcher](https://github.com/anyplaynet/launcher) and [network](https://github.com/anyplaynet/network).** The other repositories open later: `cloud`, `web` and the AnyPS5 fork. Until a repository opens, only the AnyPlay team opens issues and pull requests there. Questions and ideas are also welcome on the [AnyPlay Discord](https://discord.gg/9zYqf8fEsh). Security problems go privately, as [SECURITY.md](SECURITY.md) describes. Everyone who takes part follows the [Code of Conduct](CODE_OF_CONDUCT.md).

## How to contribute

- **Small fixes** (a typo, a wrong link, a one-line bug): open a pull request.
- **Anything bigger:** open an issue first and say what you want to change and why. We answer before you spend days on it, and some changes belong in another repository or need a decision first. A new feature, a change to a specification and a new dependency all count as bigger.
- **Bugs and game reports:** use the issue forms in the repository. A report that says what you did, what you expected and what happened is the most useful thing you can send.
- **A pull request** needs one review and green CI before it is merged. Keep it to one topic, with small commits.
- **Licence:** your contribution is released under the licence of the repository you contribute to, and you give it under that licence and no other. Inbound is outbound; there is no separate agreement to sign. The launcher is GPL-2.0-only, the network is MIT or Apache-2.0 at the user's option, and the cloud and the web are AGPL-3.0. Each repository has its `LICENSE` file.
- Write issues, commits and pull requests in English.
- Each repository can add its own `CONTRIBUTING.md` with how to build and test it; that file applies there too.

## Project rules

These hold for every contribution, in code, issues, pull requests and chat.

- **Every game, never one title.** A feature, a protocol answer or an engine change works for all games. Do not write a code path, workaround or special case that exists for one title. A game is the test case that shows what the general solution must handle. What we know about one title is data: a list, a table or an observation log, not code.
- **Stay on the right side of the line.** The network goes as far as the law allows and no further ([ADR 0021](https://github.com/anyplaynet/network/blob/main/docs/adr/0021-the-line-is-drawn-at-the-law.md)). In short: we answer a game's online calls ourselves with AnyPlay accounts, and we may bring back the online play of a game whose publisher shut its servers down. We never use Sony's servers, code, keys or firmware, never help anyone run a game they do not own, never issue or forge a platform's or publisher's tokens, never stand in for a service a publisher still runs, and never bypass anti-cheat or copy protection. Details are under [The line](#the-line).
- **Never attach or link game data.** That means game dumps, keys, firmware, save files, and logs, crash dumps or memory dumps that contain game memory. If a report needs a log, send the launcher's own log or cut the game's log down to the lines that matter. If you are not sure whether a file is safe to share, describe it instead.
- **No platform trademarks in names.** Do not put a console's or platform's name or logo in the name of a project, crate, package, feature, file or release. You can name a platform in text when you say what something works with.

## Before you open a pull request

- In Rust repositories, run `cargo fmt --all -- --check`, `cargo clippy --workspace --all-targets -- -D warnings` and `cargo test --workspace` before you open a pull request.

## The line

The network goes as far as the law allows and no further ([ADR 0021](https://github.com/anyplaynet/network/blob/main/docs/adr/0021-the-line-is-drawn-at-the-law.md)).

- Never add game files, keys, firmware, or anything taken from a platform holder's SDK or servers. Nothing contacts their servers.
- Nothing issues, forges or forwards platform or publisher tokens, poses as a real console, stands in for a publisher service that still runs, or bypasses anti-cheat or copy protection. A revival server is only for a service the publisher has shut down, and it is written from observation, never from the publisher's code or keys.
- Network formats come only from observing games you own, written down as our own specifications before any code ([how games are observed](https://github.com/anyplaynet/network/blob/main/docs/OBSERVING.md)).
- No platform trademarks in our names.

## Behaviour

- **Never a made-up success.** What is not known is refused or answered as offline, never with a guess that happens to work for one game.
- **General behaviour.** Nothing is built around one game: protocol answers, engine changes and features work for every game, and a game is only the test case that shows what they must handle. Code implements an API for every game, not a fix for one title. In the network and the bridge, title IDs appear in specifications, tests and pull requests, never in code. A launcher keeps what it knows per title in data files.
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
