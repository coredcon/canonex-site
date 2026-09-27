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

## Deleting a campaign

Deleting a campaign from the Library moves its folder to your system's Recycle Bin, so it can be recovered.

## Secrets stay local

Keys for connected services, such as your Foundry API key, are stored separately from every campaign folder, so sharing a campaign never shares your keys.
