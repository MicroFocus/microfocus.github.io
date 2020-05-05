---
title: "Elasticsearch mapping updater"
author: "Kusuma Ghosh Dastidar"
date: "2020-04-30"
---
Index templates are applied when new indexes are created in Elasticsearch.  They can be updated as a product evolves but unfortunately the updates only apply to new indexes. Elasticsearch indexes created using index templates can be updated to reflect template changes. You can make simple changes such as adding new fields or make more complex changes such as field type changes that involve re-indexing data. 

### Elasticsearch mapping updater

The elastic-mapping-updater allows you to update existing indexes in Elasticsearch to efforlessly migrate index mapping changes. Using the tool, you can identify all index templates in an Elasticsearch instance and update the mappings of all indexes that match each template pattern. The tool includes a simple command line interface and a convenient `dryrun` option that lists the mapping changes to the indexes but does not apply them. Using the tool, you can add new field definitions and consolidate dynamic templates.
