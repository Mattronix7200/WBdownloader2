var clipboardData = new ClipboardJS('.btn'); 
var clipboardData = new ClipboardJS('.btn2'); 

clipboardData.on('success', function (e) {
   console.info('Action:', e.action);
   console.info('Text:', e.text);
   console.info('Trigger:', e.trigger);
   e.clearSelection();
});

clipboardData.on('error', function (e) {
   console.error('Action:', e.action);
   console.error('Trigger:', e.trigger);
});

