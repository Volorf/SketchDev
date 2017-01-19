// Get an array with all selected objects
var selectedLayers = context.selection,

// Get first object from this array
selectedLayer = selectedLayers.firstObject();

// Show all property of this object
log(selectedLayer.treeAsDictionary());
