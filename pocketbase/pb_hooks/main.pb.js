/// <reference path="../pb_data/types.d.ts" />

//Update article published date on first publication
onRecordUpdateExecute((e) => {
    const published = e.record.get('published');
    const status = e.record.get("status");
    const now = new DateTime();
    if(status === "published" && published.toString() == ''){
        e.record.set("published",`${now}`);
    }

    if(status === 'approved'){
        let record = new Record($app.findCollectionByNameOrId('notifications'));
        record.set("userId", e.record.get('author'));
        record.set('type','USER');
        record.set('title', 'Article approved!');
        record.set('message', 'Your article was approved.');
        record.set('isRead', false);

        $app.save(record);
    }

    if(status === 'rejected'){
        let record = new Record($app.findCollectionByNameOrId('notifications'));
        record.set("userId", e.record.get('author'));
        record.set('type','USER');
        record.set('title', 'Article rejected!');
        record.set('message', 'Your article was rejected check why.');
        record.set('isRead', false);

        $app.save(record);
    }

    e.next();
},"articles");  

//Custom route (Notification count)
routerAdd("GET", "/api/notifications/", (e) => {
    let id = e.request.url.query().get("id");
    const notifications = arrayOf(new Record);
    $app.recordQuery('notifications').andWhere($dbx.hashExp({"userId":id})).andWhere($dbx.hashExp({"isRead":false})).all(notifications);

    return e.json(200, {
        "count": notifications.length
    });
},$apis.requireAuth())