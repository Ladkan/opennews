/// <reference path="../pb_data/types.d.ts" />

//Update article published date on first publication
onRecordUpdateExecute((e) => {
    const published = e.record.get('published');
    const status = e.record.get("status");
    const now = new DateTime();
    if(status === "published" && published.toString() == ''){
        e.record.set("published",`${now}`);
    }
    e.next();
},"articles");  