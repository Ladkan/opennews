/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number2245608546",
        "max": null,
        "min": null,
        "name": "count",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_3886814502",
    "indexes": [],
    "listRule": "",
    "name": "tags_status",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT tags.id as id, COUNT(articles.tags) as count FROM tags inner join articles on tags.id = articles.id",
    "viewRule": ""
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3886814502");

  return app.delete(collection);
})
