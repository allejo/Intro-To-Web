function setIframeContents (id, content) {
    var iframe = document.getElementById(id);
    iframe = iframe.contentWindow ?
         iframe.contentWindow :
         (
             iframe.contentDocument.document ?
             iframe.contentDocument.document :
             iframe.contentDocument
         );
    iframe.document.open();
    iframe.document.write(content);
    iframe.document.close();
}