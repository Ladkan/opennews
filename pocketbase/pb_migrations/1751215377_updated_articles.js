/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4287850865")

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
      "hidden",
      "published"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4287850865")

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
})
