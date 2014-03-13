# sorted

small lib to insert and search in a sorted array by key function

[![Build Status](https://travis-ci.org/Swatinem/sorted.png?branch=master)](https://travis-ci.org/Swatinem/sorted)
[![Coverage Status](https://coveralls.io/repos/Swatinem/sorted/badge.png?branch=master)](https://coveralls.io/r/Swatinem/sorted)
[![Dependency Status](https://gemnasium.com/Swatinem/sorted.png)](https://gemnasium.com/Swatinem/sorted)

## Installation

    $ component install Swatinem/sorted

## Usage

### new Sorted(key)
Creates a new sorted array with `key` as its sort key

### sorted.array
The underlying array is exposed for you to work with

### sorted.insert(object)
Inserts the given `object` into the list according to `key`

### sorted.find(key, [closest])
Returns the index of the object found by `key`, or `-1` if it is not found.
When `closest` is set to `true`, it will return an index at which the object
might be inserted

## License

  LGPLv3

