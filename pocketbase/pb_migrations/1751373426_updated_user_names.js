/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3739473796")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT users.id as id, users.name as name, users.aboutme as aboutme FROM users"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_Fp4l")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_rpcM",
    "max": 255,
    "min": 0,
    "name": "name",
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
    "id": "_clone_eQX4",
    "max": 0,
    "min": 0,
    "name": "aboutme",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3739473796")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT users.id as id, users.name as name FROM users"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_Fp4l",
    "max": 255,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("_clone_rpcM")

  // remove field
  collection.fields.removeById("_clone_eQX4")

  return app.save(collection)
})
