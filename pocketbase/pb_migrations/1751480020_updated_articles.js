/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4287850865")

  // update collection data
  unmarshal({
    "updateRule": "@request.auth.id != \"\" && ( @request.auth.id = author.id || ( @request.auth.role = 'admin' || @request.auth.role = 'moderator' ) )"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4287850865")

  // update collection data
  unmarshal({
    "updateRule": "@request.auth.id = author.id"
  }, collection)

  return app.save(collection)
})
