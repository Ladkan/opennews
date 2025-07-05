/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1706220087")

  // update collection data
  unmarshal({
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1706220087")

  // update collection data
  unmarshal({
    "viewRule": "@request.auth.id != \"\" && ( @request.auth.role = 'admin' || @request.auth.role = 'moderator' )"
  }, collection)

  return app.save(collection)
})
