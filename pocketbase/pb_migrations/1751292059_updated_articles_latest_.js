/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2070939068")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT articles.id as id, articles.author as author, articles.title as title, articles.tags as tags, articles.status as status, articles.published as published, articles.updated as updated, articles.cover as cover FROM articles WHERE articles.status = 'published' ORDER BY articles.published LIMIT 4"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_zOtF")

  // remove field
  collection.fields.removeById("_clone_5EKF")

  // remove field
  collection.fields.removeById("_clone_Isc5")

  // remove field
  collection.fields.removeById("_clone_ADNw")

  // remove field
  collection.fields.removeById("_clone_e3Na")

  // remove field
  collection.fields.removeById("_clone_y8tM")

  // remove field
  collection.fields.removeById("_clone_6rVB")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_rzEz",
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
    "id": "_clone_91n5",
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
    "id": "_clone_zyt0",
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
    "id": "_clone_5S48",
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
    "id": "_clone_LeQJ",
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
    "id": "_clone_2dwN",
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
    "id": "_clone_ITv7",
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
    "viewQuery": "SELECT articles.id as id, articles.author as author, articles.title as title, articles.tags as tags, articles.status as status, articles.published as published, articles.updated as updated, articles.cover as cover FROM articles WHERE articles.status = 'published' LIMIT 4"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_zOtF",
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
    "id": "_clone_5EKF",
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
    "id": "_clone_Isc5",
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
    "id": "_clone_ADNw",
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
    "id": "_clone_e3Na",
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
    "id": "_clone_y8tM",
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
    "id": "_clone_6rVB",
    "name": "cover",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "url"
  }))

  // remove field
  collection.fields.removeById("_clone_rzEz")

  // remove field
  collection.fields.removeById("_clone_91n5")

  // remove field
  collection.fields.removeById("_clone_zyt0")

  // remove field
  collection.fields.removeById("_clone_5S48")

  // remove field
  collection.fields.removeById("_clone_LeQJ")

  // remove field
  collection.fields.removeById("_clone_2dwN")

  // remove field
  collection.fields.removeById("_clone_ITv7")

  return app.save(collection)
})
