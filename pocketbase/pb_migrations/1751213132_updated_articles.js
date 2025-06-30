/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4287850865")

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text724990059",
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

  // update field
  collection.fields.addAt(3, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url2366146245",
    "name": "cover",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "url"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor4274335913",
    "maxSize": 0,
    "name": "content",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "editor"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select2063623452",
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
      "hidden"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4287850865")

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text724990059",
    "max": 0,
    "min": 0,
    "name": "title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url2366146245",
    "name": "cover",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor4274335913",
    "maxSize": 0,
    "name": "content",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select2063623452",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "draft",
      "pending",
      "approved",
      "rejected",
      "hidden"
    ]
  }))

  return app.save(collection)
})
