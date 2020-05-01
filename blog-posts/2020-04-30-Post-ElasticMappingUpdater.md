---
title: "Elasticsearch mapping updater"
author: "Kusuma Ghosh Dastidar"
date: "2020-04-30"
---
Elasticsearch indexes if created using index templates would need to be updated if the template changes. The index mapping changes could be as simple as adding new fields to more complex field `type` changes which would involve re-indexing data.

### Elasticsearch mapping updater

The elastic-mapping-updater is a tool to update existing indexes in Elasticsearch. The tool first finds all index templates in an Elasticsearch instance and updates the mappings of all indexes that match each template pattern. The tool provides a simple command line interface and has a convenient `dryrun` option that lists the mapping changes to the indexes but does not apply them. The tool currently adds new field definitions and consolidates dynamic templates. This is a nifty tool to use in an upgrade scenario to efforlessly migrate index mapping changes.
