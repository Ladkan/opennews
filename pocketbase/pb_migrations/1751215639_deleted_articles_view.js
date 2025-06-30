/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3141255993");

  return app.delete(collection);
}, (app) => {
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
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "_clone_4dui",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "author",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_BBQZ",
        "max": 0,
        "min": 0,
        "name": "title",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "_clone_cEcQ",
        "maxSelect": 1,
        "name": "status",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "select",
        "values": [
          "draft",
          "pending",
          "approved",
          "rejected",
          "hidden",
          "published"
        ]
      },
      {
        "exceptDomains": null,
        "hidden": false,
        "id": "_clone_jUAL",
        "name": "cover",
        "onlyDomains": null,
        "presentable": false,
        "required": true,
        "system": false,
        "type": "url"
      }
    ],
    "id": "pbc_3141255993",
    "indexes": [],
    "listRule": null,
    "name": "articles_view",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT articles.id as id, articles.author as author ,articles.title as title, articles.status as status, articles.cover as cover FROM articles",
    "viewRule": null
  });

  return app.save(collection);
})
