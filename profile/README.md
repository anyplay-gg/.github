# AnyPlay

Everything around [AnyPS5](https://github.com/boykopovar/AnyPS5) that players need: a launcher for your games, and an online network to play them with friends over the internet, without opening a port.

AnyPS5 turns console game executables into native Windows and Linux programs. Its team works on the core: system libraries, the GPU and shaders. AnyPlay builds the rest, so a player can unlock a game, set it up, start it and, later, play it online.

## Get it

**[Download the AnyPlay Launcher](https://github.com/anyplaynet/launcher/releases/latest)** for Windows or Linux, then create an account at [anyplaynet.com](https://anyplaynet.com). You need your own game dumps.

Talk with the team and other players on the [AnyPlay Discord](https://discord.gg/9zYqf8fEsh).

## Projects

| Project | What it is | License |
|---|---|---|
| [launcher](https://github.com/anyplaynet/launcher) | Finds your game dumps, unlocks them for AnyPS5 and starts them. Controls, saves and trophies per game, and the online area. Rust. | GPL-2.0 |
| [network](https://github.com/anyplaynet/network) | Online play: the net service, the bridge protocol, the specifications and the design. | MIT or Apache-2.0 |
| [cloud](https://github.com/anyplaynet/cloud) | The services behind the network, and the relays. `docker compose up` runs one. | AGPL-3.0 |
| [web](https://github.com/anyplaynet/web) | The website and account pages at anyplaynet.com. | AGPL-3.0 |
| [AnyPS5](https://github.com/anyplaynet/AnyPS5) | Our fork of AnyPS5 with the network bridge. | GPL-2.0 |

## Status

The launcher is released. The cloud runs at anyplaynet.com. The online area has accounts, friends, parties with voice and calls, profiles, a feed and join codes, and it is tested end to end with fake games. No real game plays online yet: the bridge that connects a game to the network is under review in AnyPS5. [Known gaps](https://github.com/anyplaynet/network/blob/main/docs/gaps.md) lists what is missing.

## How the parts fit

The **launcher** starts games and runs the **net service** on your PC. In a game, the **bridge** inside AnyPS5 hands the game's online calls to the net service. The net service carries game traffic straight to other players through encrypted tunnels, over **relays** when a direct path fails. The **cloud** keeps accounts, friends and sessions, and signs the tickets relays check. It never sees game traffic. A diagram is in the [network README](https://github.com/anyplaynet/network#readme).

## Ground rules

- Only games you own. Nothing here ships or downloads game files.
- We never use a platform holder's servers, code, keys or leaked documents.
- We never stand in for a publisher service that still runs, issue tokens for anyone else's client, or bypass anti-cheat or copy protection. Online play can return for a game whose publisher has shut its servers down, with a server written from observation.
- AnyPS5 is a compatibility layer, not an emulator.

The reasons are in [the line is drawn at the law](https://github.com/anyplaynet/network/blob/main/docs/adr/0021-the-line-is-drawn-at-the-law.md).

## Contribute

Issues and pull requests are open in [launcher](https://github.com/anyplaynet/launcher) and [network](https://github.com/anyplaynet/network); `cloud`, `web` and the AnyPS5 fork open later. For anything bigger than a small fix, open an issue first. Ideas and questions are welcome on [Discord](https://discord.gg/9zYqf8fEsh). The shared rules are in [CONTRIBUTING.md](https://github.com/anyplaynet/.github/blob/main/CONTRIBUTING.md), the [Code of Conduct](https://github.com/anyplaynet/.github/blob/main/CODE_OF_CONDUCT.md) applies everywhere, and security problems go privately, as [SECURITY.md](https://github.com/anyplaynet/.github/blob/main/SECURITY.md) describes.

AnyPlay is a community project, not affiliated with the AnyPS5 maintainers or any platform holder.
