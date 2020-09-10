(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[248],{dcdb:function(n,e,a){"use strict";a.r(e),e["default"]="<template>\n  <div class=\"row justify-center full-width q-pa-md\">\n    <q-calendar\n      v-model=\"selectedDate\"\n      view=\"day-resource\"\n      :resources=\"resources\"\n      resource-key=\"name\"\n      :resource-height=\"50\"\n      :resource-width=\"120\"\n      bordered\n      sticky\n      locale=\"en-us\"\n      style=\"height: 300px; max-width: 800px; width: 100%;\"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      resources: [\n        { name: 'John' },\n        {\n          name: 'Board Room',\n          expanded: false,\n          children: [\n            { name: 'Room-1' },\n            {\n              name: 'Room-2',\n              expanded: false,\n              children: [\n                { name: 'Partition-A' },\n                { name: 'Partition-B' },\n                { name: 'Partition-C' }\n              ]\n            }\n          ]\n        },\n        { name: 'Mary' },\n        { name: 'Susan' },\n        { name: 'Olivia' }\n      ]\n    }\n  }\n}\n<\/script>\n"}}]);