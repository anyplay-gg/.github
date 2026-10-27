<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/anyplaynet/.github/main/profile/banner-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/anyplaynet/.github/main/profile/banner-light.svg">
  <img alt="AnyPlay. Everything around AnyPS5 that players need." src="https://raw.githubusercontent.com/anyplaynet/.github/main/profile/banner-dark.svg" width="100%">
</picture>

AnyPlay builds the launcher and the online network around [AnyPS5](https://github.com/boykopovar/AnyPS5), so you can set up your own games, start them and play with friends over the internet.

**[Website](https://anyplaynet.com)** · **[Download the launcher](https://github.com/anyplaynet/launcher/releases/latest)** · **[Discord](https://discord.gg/9zYqf8fEsh)**

## What you can do today

The [AnyPlay Launcher](https://github.com/anyplaynet/launcher/releases/latest) runs on Windows, Linux and macOS (Apple silicon), in English, Turkish, German, Spanish, French and Brazilian Portuguese.

- Keep a library of your own game dumps, with compatibility per game, search, filters and storage.
- Track trophies, play time, captures and clips in the Game Hub.
- Remap controllers, or use your phone as one.
- Go online: friends, messages, parties with voice, Find Players, shared captures, screen sharing, live broadcast and a private list of people you played with recently.
- Play on a Steam Deck, or add games to Steam.
- Pick a look: six themes, some of them animated.

The cloud is live at [anyplaynet.com](https://anyplaynet.com). The bridge that carries a game's own online calls to the network is still in development, so games do not play online over the internet yet. The [roadmap](https://github.com/anyplaynet/network/blob/main/docs/DESIGN.md#roadmap) has the phases.

## Repositories

| Repository | What it is | License |
|---|---|---|
| [launcher](https://github.com/anyplaynet/launcher) | The AnyPlay Launcher and its online area. Rust. | GPL-2.0 |
| [network](https://github.com/anyplaynet/network) | The design, specifications and bridge protocol for online play. | MIT or Apache-2.0 |
| [cloud](https://github.com/anyplaynet/cloud) | Accounts, friends, messages, sessions and relays. Runs at anyplaynet.com. | AGPL-3.0 |
| [web](https://github.com/anyplaynet/web) | The website and account pages. | AGPL-3.0 |
| [AnyPS5](https://github.com/anyplaynet/AnyPS5) | Our fork of [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5), kept in sync with upstream, with the network bridge. Nightly pre-releases. | GPL-2.0 |

## Get the launcher

1. Download it from the [latest release](https://github.com/anyplaynet/launcher/releases/latest). Windows comes as an installer or a single file, Linux as AppImage, tar.gz and Flatpak, and macOS (Apple silicon) as a zip.
2. Create an account at [anyplaynet.com](https://anyplaynet.com) with a passkey or an e-mail code.
3. Add your own game dumps. Nothing here ships or downloads game files.

The launcher updates itself. Flatpak and AUR installs update through the package manager.

## Community

Ask questions, share ideas and meet other players on the [AnyPlay Discord](https://discord.gg/9zYqf8fEsh).

## Contributing

[launcher](https://github.com/anyplaynet/launcher) and [network](https://github.com/anyplaynet/network) take outside issues and pull requests; a maintainer approves CI runs for first-time contributors. The other repositories are limited to the team until 2027-04-25. For anything bigger than a small fix, open an issue first. Read [CONTRIBUTING.md](https://github.com/anyplaynet/.github/blob/main/CONTRIBUTING.md) and the [Code of Conduct](https://github.com/anyplaynet/.github/blob/main/CODE_OF_CONDUCT.md). Report security problems privately, as [SECURITY.md](https://github.com/anyplaynet/.github/blob/main/SECURITY.md) describes.

## The line

We go as far as the law allows: only games you own, nothing from a platform holder's servers, code or keys, and no bypassing of anti-cheat or copy protection. The reasons are in [ADR 0021](https://github.com/anyplaynet/network/blob/main/docs/adr/0021-the-line-is-drawn-at-the-law.md). AnyPS5 is a compatibility layer, not an emulator.

<sub>AnyPlay is a community project, not affiliated with the AnyPS5 maintainers or any platform holder.</sub>
