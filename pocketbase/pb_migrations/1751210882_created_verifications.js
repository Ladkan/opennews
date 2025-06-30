/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.id != \"\" && ( @request.auth.role = 'admin' || @request.auth.role = 'moderator' )",
    "deleteRule": "@request.auth.id = user.id || ( @request.auth.role = 'admin' && @request.auth.id != \"\" )",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_4287850865",
        "hidden": false,
        "id": "relation37359206",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "article",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "relation2375276105",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "user",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "select2363381545",
        "maxSelect": 1,
        "name": "type",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "denied",
          "approved"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text2490651244",
        "max": 0,
        "min": 0,
        "name": "comment",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_1706220087",
    "indexes": [],
    "listRule": "@request.auth.id != \"\" && ( @request.auth.role = 'admin' || @request.auth.role = 'moderator' )",
    "name": "verifications",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.id = user.id",
    "viewRule": "@request.auth.id != \"\" && ( @request.auth.role = 'admin' || @request.auth.role = 'moderator' )"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1706220087");

  return app.delete(collection);
})
