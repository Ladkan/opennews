/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4287850865")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id != \"\" && ( @request.auth.id = author.id || @request.auth.role = 'admin' )",
    "updateRule": "@request.auth.id = author.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4287850865")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id != \"\" && ( @request.auth.id = author || @request.auth.role = 'admin' )",
    "updateRule": "@request.auth.id = author"
  }, collection)

  return app.save(collection)
})
