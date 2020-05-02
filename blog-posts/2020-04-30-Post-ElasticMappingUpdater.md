---
title: "Elasticsearch mapping updater"
author: "Kusuma Ghosh Dastidar"
date: "2020-04-30"
---
Index templates are applied when new indexes are created in Elasticsearch.  They can be updated as a product evolves but unfortunately the updates only apply to new indexes.  This utility can be used to bring existing indexes into line with the changes made to the index templates.  The index mapping changes could be as simple as adding new fields to more complex field type changes which would involve re-indexing data.

### Elasticsearch mapping updater

The utility first finds all index templates in an Elasticsearch instance and updates the mappings of all indexes that match each template pattern. The tool provides a simple command line interface and has a convenient `dryrun` option that lists the mapping changes to the indexes but does not apply them. The tool currently adds new field definitions and consolidates dynamic templates. This is a nifty tool to use in an upgrade scenario to efforlessly migrate index mapping changes.
