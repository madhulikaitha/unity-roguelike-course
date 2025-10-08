
const SECRET = 'i-love-madhu'; // shared secret; client sends as X-Auth
function doPost(e) {
  try {
    const h = e?.headers?.['X-Auth'];
    if (SECRET && h !== SECRET) {
      return ContentService.createTextOutput(JSON.stringify({error:'unauthorized'})).setMimeType(ContentService.MimeType.JSON);
    }
    const folderId = e.parameter.folder || '';
    const folder = folderId ? DriveApp.getFolderById(folderId) : DriveApp.getRootFolder();
    const week = e.parameter.week || 'noweek';
    const task = e.parameter.task || 'notask';
    const notes = e.parameter.notes || '';
    const boundary = e.postData.type.match(/boundary=(.*)$/)[1];
    const raw = Utilities.newBlob(e.postData.contents).getBytes();
    const parts = Utilities.parseMultipart(raw, boundary);
    const filesMeta = [];
    parts.forEach(p => {
      if (p.fileName) {
        const name = `${new Date().toISOString().replace(/[:.]/g,'-')}__${week}__${task}__${p.fileName}`;
        const file = folder.createFile(p); file.setName(name);
        filesMeta.push({name, id:file.getId(), url:file.getUrl()});
      }
    });
    return ContentService.createTextOutput(JSON.stringify({ok:true, files:filesMeta})).setMimeType(ContentService.MimeType.JSON);
  } catch(err){
    return ContentService.createTextOutput(JSON.stringify({error:String(err)})).setMimeType(ContentService.MimeType.JSON);
  }
}
