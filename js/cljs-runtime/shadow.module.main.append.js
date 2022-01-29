
shadow.cljs.devtools.client.env.module_loaded('main');

try { scbi.app.init(); } catch (e) { console.error("An error occurred when calling (scbi.app/init)"); throw(e); }