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