/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2070939068")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT articles.id as id, articles.author as author, articles.title as title, articles.tags as tags, articles.status as status, articles.published as published, articles.updated as updated, articles.cover as cover FROM articles WHERE articles.status == \"published\" LIMIT 4"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_RtQS")

  // remove field
  collection.fields.removeById("_clone_S10W")

  // remove field
  collection.fields.removeById("_clone_w3vE")

  // remove field
  collection.fields.removeById("_clone_qbOl")

  // remove field
  collection.fields.removeById("_clone_5fz5")

  // remove field
  collection.fields.removeById("_clone_i3Ea")

  // remove field
  collection.fields.removeById("_clone_05UV")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_3MUf",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "author",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_suZQ",
    "max": 0,
    "min": 0,
    "name": "title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1219621782",
    "hidden": false,
    "id": "_clone_DBoB",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "tags",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_H8Kt",
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
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_tGco",
    "max": "",
    "min": "",
    "name": "published",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_ry2f",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "_clone_jRqb",
    "name": "cover",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2070939068")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT articles.id as id, articles.author as author, articles.title as title, articles.tags as tags, articles.status as status, articles.published as published, articles.updated as updated, articles.cover as cover FROM articles WHERE articles.status = \"published\" LIMIT 4"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
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
  }))

  // add field
  collection.fields.addAt(2, new Field({
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
  }))

  // add field
  collection.fields.addAt(3, new Field({
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
  }))

  // add field
  collection.fields.addAt(4, new Field({
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
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_5fz5",
    "max": "",
    "min": "",
    "name": "published",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_i3Ea",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "_clone_05UV",
    "name": "cover",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "url"
  }))

  // remove field
  collection.fields.removeById("_clone_3MUf")

  // remove field
  collection.fields.removeById("_clone_suZQ")

  // remove field
  collection.fields.removeById("_clone_DBoB")

  // remove field
  collection.fields.removeById("_clone_H8Kt")

  // remove field
  collection.fields.removeById("_clone_tGco")

  // remove field
  collection.fields.removeById("_clone_ry2f")

  // remove field
  collection.fields.removeById("_clone_jRqb")

  return app.save(collection)
})
