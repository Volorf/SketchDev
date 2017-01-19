// Get an array with all selected layers
var selectedLayers = context.selection,

// Get first layer from this array
selectedLayer = selectedLayers.firstObject();

// Show all property of this layer
log(selectedLayer.treeAsDictionary());
