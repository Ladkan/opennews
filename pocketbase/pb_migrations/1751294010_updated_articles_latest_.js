/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2070939068")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT articles.id as id, users.name as author, articles.title as title, articles.tags as tags, articles.status as status, articles.published as published, articles.updated as updated, articles.cover as cover FROM articles INNER JOIN users ON articles.author = users.id WHERE articles.status = 'published' ORDER BY articles.published DESC LIMIT 4"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_1uok")

  // remove field
  collection.fields.removeById("_clone_lxuV")

  // remove field
  collection.fields.removeById("_clone_5Q9o")

  // remove field
  collection.fields.removeById("_clone_BhAT")

  // remove field
  collection.fields.removeById("_clone_seZB")

  // remove field
  collection.fields.removeById("_clone_EShB")

  // remove field
  collection.fields.removeById("_clone_EF6y")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_cdkb",
    "max": 255,
    "min": 0,
    "name": "author",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_YO8m",
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
    "id": "_clone_1Q2Y",
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
    "id": "_clone_kwqm",
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
    "id": "_clone_vCK2",
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
    "id": "_clone_O6kx",
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
    "id": "_clone_ZEjr",
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
    "viewQuery": "SELECT articles.id as id, articles.author as author, articles.title as title, articles.tags as tags, articles.status as status, articles.published as published, articles.updated as updated, articles.cover as cover FROM articles WHERE articles.status = 'published' ORDER BY articles.published DESC LIMIT 4"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_1uok",
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
    "id": "_clone_lxuV",
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
    "id": "_clone_5Q9o",
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
    "id": "_clone_BhAT",
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
    "id": "_clone_seZB",
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
    "id": "_clone_EShB",
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
    "id": "_clone_EF6y",
    "name": "cover",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "url"
  }))

  // remove field
  collection.fields.removeById("_clone_cdkb")

  // remove field
  collection.fields.removeById("_clone_YO8m")

  // remove field
  collection.fields.removeById("_clone_1Q2Y")

  // remove field
  collection.fields.removeById("_clone_kwqm")

  // remove field
  collection.fields.removeById("_clone_vCK2")

  // remove field
  collection.fields.removeById("_clone_O6kx")

  // remove field
  collection.fields.removeById("_clone_ZEjr")

  return app.save(collection)
})
