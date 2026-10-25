# AnyPlay

Everything around [AnyPS5](https://github.com/boykopovar/AnyPS5) that players need: a launcher for your games, and an online network to play them with friends.

AnyPS5 turns PS5 game executables into native Windows and Linux programs. Its team works on the core: system libraries, the GPU and shaders. AnyPlay builds the rest, so that a player can unlock a game, set it up, start it and, later, play it with friends over the internet without opening a port.

Talk with the team and other players on the [AnyPlay Discord](https://discord.gg/9zYqf8fEsh).

## Projects

| Project | What it is | License | State |
|---|---|---|---|
| [launcher](https://github.com/anyplaynet/launcher) | Finds your game dumps, unlocks them for AnyPS5 and starts them. Keeps controls, saves and trophies per game. Rust, Windows and Linux. | GPL-2.0 | Released. The online area is on `main` and not in a release yet. |
| [network](https://github.com/anyplaynet/network) | Online play over the internet: accounts, friends, sessions, invitations and encrypted connections between players. Holds the net service, the protocols and the specifications. | MIT or Apache-2.0 | In development. The parts run and are tested with fake games; no real game plays online yet. |
| [cloud](https://github.com/anyplaynet/cloud) | The central services of the network and the relays. One program runs a whole cloud with `docker compose up`. | AGPL-3.0 | Version 0. Works end to end in tests; no public cloud runs yet. |

AnyPlay also keeps a fork of AnyPS5, [anyplaynet/AnyPS5](https://github.com/anyplaynet/AnyPS5), for the network bridge.

## How the parts fit

```text
 Player A's PC                                    Player B's PC
 ┌─────────────────────────┐                      ┌─────────────────────────┐
 │ game                    │                      │ game                    │
 │  └ AnyPS5 libraries     │                      │  └ AnyPS5 libraries     │
 │     └ bridge            │                      │     └ bridge            │
 │         │ loopback      │                      │         │ loopback      │
 │ launcher ─ net service ◄┼──── tunnel (QUIC) ───┼► net service ─ launcher │
 └────────────┬────────────┘   direct or relay    └────────────┬────────────┘
              │                                                │
              └─────────── HTTPS requests, one WebSocket ──────┘
                                       │
                                     cloud ── signs tickets ── relays
                 accounts · friends · presence · sessions · invitations
```

- The **launcher** unlocks and starts games and shows the online area. It starts the net service and talks to it over its standard streams.
- The **net service** (`anyplay-net`, in the network repository) runs on each player's PC. It keeps the account, talks to the cloud and carries game traffic through tunnels to other players.
- The **bridge** is a small piece inside an AnyPS5 build. AnyPS5 already replaces the console's system libraries, so the line between a game and the network is a function call there. The bridge forwards those calls to the net service. It is under review and no AnyPS5 build carries it yet.
- The **cloud** keeps what has to be shared and signs the tickets that let a player use a relay. Players can point the launcher at any cloud, so nobody depends on one operator.
- **Relays** carry encrypted traffic when two players cannot reach each other directly. They cannot read it, and they admit only players with a ticket from the cloud.

Game traffic goes from player to player. The cloud never sees it.

## Built and next

**Built:**

- A launcher with a library, unlocking, controls read from the game's own files, trophies, saves, per-game settings and self-update on Windows.
- A cloud v0 with accounts, friends, presence, sessions, invitations, relay tickets and moderation.
- A net service, tunnels with direct and relayed paths, and a fake game that stands in for the bridge. Together they pass end-to-end tests: two players sign in, become friends, open a session and exchange packets.
- The launcher's online area: sign-in, friends, invitations and joining.

**Next:**

- Measure the tunnel between two real networks, then review and merge the bridge.
- Run a public cloud, and learn the formats of games one by one from games you own. [Known gaps](https://github.com/anyplaynet/network/blob/main/docs/gaps.md) lists what is missing.
- The **social layer**: profiles and trophies, parties and messages, voice, a feed and boards, and sharing a game with a friend. It is specified in the [network's social design](https://github.com/anyplaynet/network/blob/main/docs/SOCIAL.md) and not built yet.
- The **cluster cloud**: the same program on many nodes with PostgreSQL and NATS. The single-node shape is built; the road to a cluster is in the [cloud architecture](https://github.com/anyplaynet/cloud/blob/main/docs/ARCHITECTURE.md).

## Ground rules

These rules are why the network can last. They are in every repository's contributing rules.

- We never connect to Sony's servers and never use Sony's code, keys or leaked documents.
- We don't stand in for a publisher service that still runs, we don't issue tokens for anyone else's client, and we don't bypass anti-cheat or copy protection. We may bring back online play for a game whose publisher has shut its servers down, with a server we write from observation.
- Only games you own. Nothing here ships or downloads game files.
- AnyPS5 is a compatibility layer, not an emulator. We keep it that way.
- Network formats come from observing games you own and are written down as our own specifications. A game whose online play runs on a live publisher service stays offline on the PlayStation side.

The reasons are in [the line is drawn at the law](https://github.com/anyplaynet/network/blob/main/docs/adr/0021-the-line-is-drawn-at-the-law.md).

## Contribute

> **Until the first live version of the network, only the AnyPlay team opens issues and pull requests.** Ideas, questions and bug reports are welcome on the [AnyPlay Discord](https://discord.gg/9zYqf8fEsh) meanwhile. Security problems still go privately, as [SECURITY.md](https://github.com/anyplaynet/.github/blob/main/SECURITY.md) describes.

Open an issue before larger changes. Write in English, keep commits small and run formatting, Clippy and the tests before a pull request. The shared rules are in [CONTRIBUTING.md](https://github.com/anyplaynet/.github/blob/main/CONTRIBUTING.md); each repository can add its own. Report security problems privately, as [SECURITY.md](https://github.com/anyplaynet/.github/blob/main/SECURITY.md) describes.

Recommended settings and key layouts for games are data files in the launcher repository, and an entry needs a title ID, the toolkit version you tried it on and a link as evidence.

## Legal

AnyPlay is a community project. It is not affiliated with Sony Interactive Entertainment or with the AnyPS5 maintainers. "PlayStation" and "PS5" are trademarks of Sony Interactive Entertainment.
