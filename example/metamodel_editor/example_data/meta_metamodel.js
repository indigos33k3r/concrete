ExampleData = Object.toJSON( 
[
  {"_class": "Datatype", "name": "String"},
  {"_class": "Datatype", "name": "Integer"},
  {"_class": "Datatype", "name": "Boolean"},
  {"_class": "Enum", "name": "FeatureKindType", "literals": ["attribute", "reference", "containment"]},
  {"_class": "Class", "name": "Classifier", "abstract": true, "features": {"_class": "Feature", "name": "name", "kind": "attribute", "lowerLimit": 1, "upperLimit": 1, "type": "String"}},
  {"_class": "Class", "name": "Datatype", "superTypes": "Classifier"},
  {"_class": "Class", "name": "Enum", "superTypes": "Datatype", "features": {"_class": "Feature", "name": "literals", "kind": "attribute", "lowerLimit": 1, "upperLimit": -1, "type": "String"}},
  {"_class": "Class", "name": "Class", "superTypes": "Classifier", "features": [
    {"_class": "Feature", "name": "superTypes", "kind": "reference", "upperLimit": -1, "type": "Class"},
    {"_class": "Feature", "name": "features", "kind": "containment", "upperLimit": -1, "type": "Feature"},
    {"_class": "Feature", "name": "abstract", "kind": "attribute", "upperLimit": 1, "type": "Boolean"}
  ]},
  {"_class": "Class", "name": "Feature", "features": [
    {"_class": "Feature", "name": "name", "kind": "attribute", "lowerLimit": 1, "upperLimit": 1, "type": "String"},
    {"_class": "Feature", "name": "kind", "kind": "attribute", "lowerLimit": 1, "upperLimit": 1, "type": "FeatureKindType"},
    {"_class": "Feature", "name": "lowerLimit", "kind": "attribute", "upperLimit": 1, "type": "Integer"},
    {"_class": "Feature", "name": "upperLimit", "kind": "attribute", "upperLimit": 1, "type": "Integer"},
    {"_class": "Feature", "name": "type", "kind": "reference", "lowerLimit": 1, "upperLimit": 1, "type": "Classifier"}
  ]}
]
);

