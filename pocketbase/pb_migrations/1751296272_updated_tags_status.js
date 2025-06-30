/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3886814502")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT tags.id as id, COUNT(articles.tags) as count FROM tags inner join articles"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3886814502")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT tags.id as id, COUNT(articles.tags) as count FROM tags inner join articles on tags.id = articles.id"
  }, collection)

  return app.save(collection)
})
