---
title: Your data
description: Where Canonex keeps your campaigns, and why they are plain files you own.
section: Reference
order: 2
---

Canonex is local-first. There is no account, no server and no subscription, and your campaigns stay on your machine unless you move them.

## A campaign is a folder

Each campaign is a folder of readable JSON files:

| File | Holds |
|---|---|
| `campaign.json` | The campaign's name, system and settings |
| `entities.json` | Every record |
| `relationships.json` | Every tie between records |
| `types.json` | Your custom record and tie types |
| `parties.json` | Parties |
| `workspace.json` | The desk |
| `sessions/` | Each session, with its plan |
| `encounters/` | Each encounter, and each time it was run |
| `changes.jsonl` | The change log behind campaign memory |

Because the folder is the campaign, it is also the export and the backup. You can copy it, sync it with a service like Dropbox or OneDrive, or keep it under version control.

## Where it lives

Campaigns are kept in `%APPDATA%\Canonex\campaigns`, one folder each. The program itself is installed separately, so updating or uninstalling Canonex never touches them.

## Backups

- **Automatic**: once a day, opening a campaign backs it up. The newest seven backups of each campaign are kept.
- **By hand**: right-click a campaign in the Library and choose **Back up…** to save it as a single `.canonex` file, for example to keep or to move to another computer.
- **Restoring**: **Import campaign…** in the Library, or **Settings → Campaign → Backups**, restores a backup as a copy, so it never overwrites the campaign you have.

## Deleting a campaign

Deleting a campaign from the Library moves its folder to your system's Recycle Bin, so it can be recovered.

## Secrets stay local

Keys for connected services, such as your Foundry API key, are stored separately from every campaign folder, so sharing a campaign never shares your keys.
