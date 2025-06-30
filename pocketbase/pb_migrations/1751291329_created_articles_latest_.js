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
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "_clone_RtQS",
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
        "id": "_clone_S10W",
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
        "cascadeDelete": false,
        "collectionId": "pbc_1219621782",
        "hidden": false,
        "id": "_clone_w3vE",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "tags",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "_clone_qbOl",
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
        "hidden": false,
        "id": "_clone_5fz5",
        "max": "",
        "min": "",
        "name": "published",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "_clone_i3Ea",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "exceptDomains": null,
        "hidden": false,
        "id": "_clone_05UV",
        "name": "cover",
        "onlyDomains": null,
        "presentable": false,
        "required": true,
        "system": false,
        "type": "url"
      }
    ],
    "id": "pbc_2070939068",
    "indexes": [],
    "listRule": "",
    "name": "articles_latest",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT articles.id as id, articles.author as author, articles.title as title, articles.tags as tags, articles.status as status, articles.published as published, articles.updated as updated, articles.cover as cover FROM articles WHERE articles.status = \"published\" LIMIT 4",
    "viewRule": ""
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2070939068");

  return app.delete(collection);
})
