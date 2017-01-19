// Get an array with all selected objects
var selectedObjects = context.selection,

// Get first object from this array
selectedObject = selectedLayers.firstObject();

// Show all property of this object
log(selectedObject.treeAsDictionary());
