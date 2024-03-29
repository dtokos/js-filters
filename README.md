# js-filters
This library is used for filtering. It can be used to filter variables or elements. It does this using DataAdapters which provide the required data for Filter. This library has no external dependencies but it's designed to be used with webpack and babel.

# Table of contents
1. [Introduction](#js-filters)
2. [Table of contents](#table-of-contents)
3. [Installation](#installation)
4. [Usage](#usage)
	1. [Basic HTML Example](#basic-html-example)
	2. [Basic JS Example](#basic-js-example)
	3. [More examples](#more-examples)
5. [Documentation](#documentation)
	1. [Available filters](#available-filters)
		1. [AbstractFilter](#abstractfilter)
		2. [StringFilter](#stringfilter)
		3. [NormalizedStringFilter](#normalizedstringfilter)
		4. [LesserNumberFilter](#lessernumberfilter)
		5. [GreaterNumberFilter](#greaternumberfilter)
		6. [NumberRangeFilter](#numberrangefilter)
		7. [SomeTypeFilter](#sometypefilter)
		8. [EveryTypeFilter](#everytypefilter)
	2. [DataAdapter](#dataadapter)
	3. [Filter Handlers](#filter-handlers)
		1. [FilterHandler](#filterhandler)
		2. [GetterFilterHandler](#getterfilterhandler)
	4. [Filters](#filters)
	5. [Utils](#utils)
		1. [Latinize](#latinize)

# Installation
This package is currently available only on github. To get the latest version, run the following command:
```bash
$ npm i -s github:dtokos/js-filters#1.0.1
```
Or you can add following to your `package.json` and then run `npm i`:
```json
"dependencies": {
  "js-filters": "github:dtokos/js-filters#1.0.1"
}
```
For more information you can read npm documentation [here.](https://docs.npmjs.com/cli/install)

# Usage
This package is comosed from 3 objects: 
- [Filters](#available-filters)
- [DataAdapter](#dataadapter)
- [FilterHandler](#filterhandler)

You can import objects described above in multiple ways:
```javascript
// This library contains facade wich provides access to all filters and objects described above.
// You can use the default export and use the following methods:
import Filters from 'js-filters';
Filters.dataAdapter(...);
Filters.filterHandler(...);
Filters.getterFilterHandler(...);
Filters.string(...);
Filters.normalizedString(...);
Filters.lesserNumber(...);
Filters.greaterNumber(...);
Filters.numberRange(...);
Filters.someType(...);
Filters.everyType(...);

// Or you can import objects individually and use them directly:
import { StringFilter, DataAdapter, FilterHandler } from 'js-filters';

// Alternativelly there is facade that only contains filters:
import Filters from 'js-filters/Filters';
```

If you don't want to use facades, you can import all objects individually:
```javascript
import DataAdapter from 'js-filters/DataAdapter';
import FilterHandler from 'js-filters/Handler';
import StringFilter from 'js-filters/Filters/String';
```

## Basic HTML Example
`index.html`
```html
<input type="text" name="filter">
<ul id="list">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
  <li>avocado</li>
  <li>tomato</li>
</ul>
```
`index.js`
```javascript
import DataAdapter from 'js-filters/DataAdapter';
import GetterFilterHandler from 'js-filters/GetterHandler';
import StringFilter from 'js-filters/Filters/String';

const filterElement = document.querySelector('[name="filter"]');
const getItems = () => document.querySelectorAll('#list li');
const adapter = new DataAdapter(
  filterElement,
  filteredItem => filteredItem.textContent,
  filter => filter.value
);
const filters = [
  new StringFilter(adapter),
];

const handler = new GetterFilterHandler(filters, getItems);

filterElement.addEventListener('change', function() {
  handler.filterIterationCallback((item, passed) => {
    if (passed)
      item.style.display = 'list-item';
    else
      item.style.display = 'none';
  });
});
```

## Basic JS Example
`index.html`
```html
<input type="text" name="filter">
```
`index.js`
```javascript
import DataAdapter from 'js-filters/DataAdapter';
import GetterFilterHandler from 'js-filters/GetterHandler';
import StringFilter from 'js-filters/Filters/String';

const items = ['apple', 'banana','orange','avocado', 'tomato'];

const filterElement = document.querySelector('[name="filter"]');
const getItems = () => items;
const adapter = new DataAdapter(
  filterElement,
  filteredItem => filteredItem,
  filter => filter.value
);
const filters = [
  new StringFilter(adapter),
];

const handler = new GetterFilterHandler(filters, getItems);

filterElement.addEventListener('change', function() {
  handler.filterIterationCallback((item, passed) => {
    if (passed)
      console.log(`Item ${item} PASSED the validation`);
    else
      console.log(`Item ${item} FAILED the validation`);
  });
});
```

## More Examples
You can find more examples in this [repository.](https://github.com/dtokos/js-filters-examples) Make sure to checkout live demos [here.](https://dtokos.github.io/js-filters-examples/)

# Documentation

## Available filters
Filter can be any class that implements the following method.
```javascript
bool passes(filteredItem);
```
**All of the filters below assume that the data provided by the DataAdapter is properly cleaned up for the particular filter.**

### AbstractFilter
This class is used to build other filters and can't be initialized directly. It provides default implementation for constructor, value getters and basic algorythm for filtering.

**Methods:**
```javascript
// Initializes dataAdapter property with given dataAdapter.
AbstractFilter constructor(dataAdapter);

// Determines if given filteredItem passed the validation.
bool passes(filteredItem);

// Getter for value of item that is currently validated.
any getValue(filteredItem);

// Getter for filter value that is assigned to DataAdapter.
any getFilterValue();
```

### StringFilter
This class is used to strictly filter substrings. It **is** case sensitive and distinguishes between accents.

**Dependencies:**
- [AbstractFilter](#abstractfilter)

**Methods:**
```javascript
// Determines if filterValue substring is found in value. This method also returns true if filterValue is empty.
bool compare(value, filterValue);
```

### NormalizedStringFilter
This class is used to loosely filter substrings. It **is not** case sensitive and does not distiniguish between accents.

**Dependencies:**
- [StringFilter](#stringfilter)
- [Latinize](#latinize)

**Methods:**
```javascript
// Gets the filtered value and normalizes it.
string getValue(filteredItem);

// Gets the filter value and normalizes it.
string getFilterValue();

// Normalizes the given value.
string normalize(value);

// Converts accent characters to ascii characters.
string latinize(value);
```

### LesserNumberFilter
This class is used to filter numeric values that are lesser (and optionally equal) than the filter value.

**Dependencies:**
- [AbstractFilter](#abstractfilter)

**Methods:**
```javascript
// Initializes dataAdapter and option properties with given dataAdapter and allowSameValue.
LesserNumberFilter constructor(dataAdapter, allowSameValue = false);

// Compares value to be lesser (and optionally equal) than the filterValue.
bool compare(value, filterValue);

// Sets the boolean flag that allows to accept same values.
void setAllowSameValue(allowSameValue);
```

### GreaterNumberFilter
This class is used to filter numeric values that are greater (and optionally equal) than the filter value;

**Dependencies:**
- [LesserNumberFilter](#lessernumberfilter)

**Methods:**
```javascript
// Compares value to be greater (and optionally equal) than the filterValue.
bool compare(value, filterValue);
```

### NumberRangeFilter
This class is used to filter numeric values that are inside given range.

**Dependencies:**
- [AbstractFilter](#abstractfilter)

**Methods:**
```javascript
// Initializes dataAdapter and options properties with given dataAdapter and options.
NumberRangeFilter constructor(dataAdapter, allowSameFromValue = false, allowSameToValue = false);

// Determines if given filteredItem passed the validation.
bool passes(filteredItem);

// Determines if given value is in filtered range. Value can be optionally equal as fromValue or toValue.
bool compare(value, fromValue, toValue);
```

### SomeTypeFilter
This class is used to filter values that can have only certain number of possible values. You can for example filter items that have certain state. This filter checks if the item under validation has **at least one** of the filtered values.

**Dependencies:**
- [AbstractFilter](#abstractfilter)

```javascript
// Determines if values contain at least one value from filterValues.
bool compare(values, filterValues);
```

### EveryTypeFilter
This class is used to filter values that can have only certain number of possible values. You can for example filter items that have certain state. This filter checks if the item under validation has **every** of the filtered values.

**Dependencies:**
- [AbstractFilter](#abstractfilter)

**Methods:**
```javascript
// Determines if values contain every value from filterValues.
bool compare(values, filterValues);
```

## DataAdapter
This class is used by filters and provides the necessary cleaned up data needed by the filter.

**Methods:**
```javascript
// Initializes filter and getter properties with given filter and getters. 
DataAdapter constructor(filter, valueGetter, filterValueGetter);

// Gets the value of filteredItem with provided valueGetter.
any getValue(filteredItem);

// Gets the filter value with provided filterValueGetter.
any getFilterValue();
```

## Filter Handlers
These classes are used to filter given data using provided filters.

### FilterHandler
This class uses given filters to filter given data. Data is passed each time as argument to filtering method.

**Methods:**
```javascript
// Initializes filters property with given filters.
FilterHandler constructor(filters);

// Getter for filters.
Array<Filter> getFilters();

// Filters given items using given filters.
// Returns array of bools that determine if particular item passed the validation.
Array<bool> filterBoolean(items);

// Filters given items using given filters.
// Returns object with two properties that contains array of items that passed/failed the valiadation.
Object filterObject(items);

// Filters given items using given filters.
// Calls provided callback at the end of filtering with two arrays of items that passed/failed the validation.
void filterCallback(items, callback);

// Filters given items using given filters.
// Calls provided callback for each given item individually with item that was validated and bool that determines if the given item passed/failed the validation.
void filterIterationCallback(items, iterationCallback);

// Determines if given item passed all given filters.
bool filterItem(item);
```


### GetterFilterHandler
This class uses givens filters to filter given data. Data is retrieved using getter passed to constructor.

**Dependencies:**
- [FilterHandler](#filterhandler)

**Methods:**
```javascript
// Initializes filters and itemsGetter properties with given filters and itemsGetter.
FilterHandler constructor(filters, itemsGetter);

// Getter for items that will be validated.
Array<any> getItems();

// Filters given items using given filters.
// Returns array of bools that determine if particular item passed the validation.
Array<bool> filterBoolean();

// Filters given items using given filters.
// Returns object with two properties that contains array of items that passed/failed the valiadation.
Object filterObject();

// Filters given items using given filters.
// Calls provided callback at the end of filtering with two arrays of items that passed/failed the validation.
void filterCallback(callback);

// Filters given items using given filters.
// Calls provided callback for each given item individually with item that was validated and bool that determines if the given item passed/failed the validation.
void filterIterationCallback(iterationCallback);
```

## Filters
This object is used as facade to provide easier acces to every available Filter.

## Utils
This group contains helpful functions that are used by the filters for data manipulation.

### Latinize
This function removes accents from given value. **Please note that this function isn't mine. I found it somewhere years ago and i was not able to tract the original author of this function.**
