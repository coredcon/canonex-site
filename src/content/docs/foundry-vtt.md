---
title: Connecting Foundry VTT
description: Link Canonex to your Foundry world to pull sheets and follow combats live.
section: Integrations
order: 3
---

> The Foundry bridge is early and still being refined. It is optional: Canonex works fully without Foundry.

**Canonex prepares, runs and remembers. Foundry is the tabletop.** Canonex records stay authoritative for your campaign, and Foundry stays authoritative for tokens and tactical state. The bridge connects the two explicitly, record by record.

## What you need

- A Foundry VTT world you run as GM.
- The **Foundry REST API** module (`foundryvtt-rest-api`), installed and enabled in that world.
- An API key and your world's **client id** from the REST API relay.

Canonex talks to your world through the relay, so it works with self-hosted and hosted Foundry alike.

## Setting it up

1. In Canonex, open **Settings → Foundry VTT**.
2. Enable the connection and enter the **relay URL**, your **client id** and your **API key**.
3. Select **Save**, then **Check connection**.

When the connection works, the header shows **Foundry · connected**. **Forget key** removes the key from this machine.

The API key is stored on your computer, outside every campaign folder, so sharing or backing up a campaign never shares your key.

## What it does

- **Link a record to a Foundry actor** from its sheet, and pull the actor's sheet into Canonex.
- **Follow combats**: when a combat starts in Foundry, Canonex shows it with live hit points, AC and conditions for every combatant.
- **Record a combat as a Canonex encounter**, so it becomes part of the campaign's history.

What the bridge can do depends on the permissions the relay grants to your key.

## Live sync

Following combats means Canonex asking the relay for updates every few seconds, and a relay plan can count every request. So it only happens while **Settings → Foundry VTT → Live sync** is on and a session is running. The rest of the time, Canonex checks the connection when a campaign opens and when you act.

Settings shows how many relay requests Canonex has made since it started.

*Foundry Virtual Tabletop is a trademark of Foundry Gaming LLC. Canonex is not affiliated with Foundry Gaming.*
