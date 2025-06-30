/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3886814502")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT tags.id as id, tags.name as name, COUNT(articles.tags) as count FROM articles INNER JOIN tags on tags.id = articles.tags "
  }, collection)

  // remove field
  collection.fields.removeById("_clone_zZvb")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_BH05",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3886814502")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT tags.id as id, tags.name as name ,COUNT(articles.tags) as count FROM tags inner join articles"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_zZvb",
    "max": 0,
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
  collection.fields.removeById("_clone_BH05")

  return app.save(collection)
})
