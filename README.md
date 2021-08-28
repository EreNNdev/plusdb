<h2>PlusDB</h2>

[![plusdb](https://img.shields.io/badge/plus-db-black.svg)](https://www.npmjs.org/package/plusdb)
[![npm version](https://img.shields.io/npm/v/plusdb.svg?style=flat-square)](https://www.npmjs.org/package/plusdb)
[![install size](https://packagephobia.now.sh/badge?p=plusdb)](https://packagephobia.now.sh/result?p=plusdb)
[![npm downloads](https://img.shields.io/npm/dm/plusdb.svg?style=flat-square)](http://npm-stat.com/charts.html?package=plusdb)
[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jesuswasmychoice/plusdb/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/675217083155480577?color=%237289DA&label=Discord)](https://discord.gg/MaapZw5YVC)

> Simple, convenient JSON database for nodejs.

Released v1.0.0 now.
<hr>

# Getting Started

Installing the npm package
```console
$ npm install plusdb
```
Usage of plusdb
```js
const plusdb = require("plusdb");
const db = new plusdb({ 
    path: "./database.json", 
    spaces: 2 
});
```

<hr>

# Documentation

- [new plusDB(settings)](#plusDB)
  - add(id, value)
  - all()
  - clear()
    - reset()
  - delete(id)
    - remove(id)
  - get(id)
    - fetch(id)
  - has(id)
  - push(id, value)
  - set(id, value)
  - subtract(id, value)
- [DatabaseError](#DatabaseError)

## new plusDB(settings)
<div class="plusDB"></div>

Creates or gets a database file
- **Params:**
  - **settings** - An object with the settings
    - **settings.path** - The path of the database (must be an absolute path / the folder should be created) 
    - **settings.spaces** - The spaces of the database file
- **Throws:** [DatabaseError()](#DatabaseError) - If there are no settings or any settings are invalid

## Methods

### add(id, value)
Adds the value of an element in the database
- **Params:**
  - **id** - The ID of the element
  - **value** - The value to be added
- **Returns:** **Number** - Result
- **Throws:** [DatabaseError()](#DatabaseError) - If the ID or value is invalid

### all()
Return the all data on the database
- **Returns:** **Object** - The all data

### clear(id)
Deletes all the data in database / [.reset()](#reset) method is same
- **Returns:** **true** - Indicates that it was cleared

### delete(id)
Deletes element from database / [.remove()](#remove) method is same
- **Params:**
  - **id** - The ID of the element
- **Returns:** **Boolean** - Indicates that it was deleted
- **Throws:** [DatabaseError()](#DatabaseError) - If the ID is invalid

### get(id)
Gets the element on the database / [.fetch()](#fetch) method is same
- **Params:**
  - **id** - The ID of the element
- **Returns:** * - The data
- **Throws:** [DatabaseError()](#DatabaseError) - If the ID is invalid

### has(id)
Checks for data in the database
- **Params:**
  - **id** - The ID of the element
- **Returns:** **Boolean** - Indicates presence
- **Throws:** [DatabaseError()](#DatabaseError) - If the ID is invalid

### push(id, value)
Pushs the data in a array from database
- **Params:**
  - **id** - The ID of the element
  - **value** - The pushed element
- **Returns:** **Array** - The array of the ID
- **Throws:** [DatabaseError()](#DatabaseError) - If the ID or value is invalid

### set(id, value)
Sets the value of an element in the database
- **Params:**
  - **id** - The ID of the element
  - **value** - The value to be setted
- **Returns:** * - The value setted
- **Throws:** [DatabaseError()](#DatabaseError) - If the ID or value is invalid

### subtract(id, value)
Subtracts the value of an element in the database
- **Params:**
  - **id** - The ID of the element
  - **value** - The value to be subtract
- **Returns:** **Number** - Result
- **Throws:** [DatabaseError()](#DatabaseError) - If the ID or value is invalid