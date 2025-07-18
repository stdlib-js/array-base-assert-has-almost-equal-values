/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Tests if two arrays have respective elements which are approximately equal within a specified number of ULPs (units in the last place).
*
* ## Notes
*
* -   If provided arrays of unequal length, the function returns `false`.
*
* @param x - first input array
* @param y - second input array
* @param maxULP - maximum allowed ULP difference
* @returns boolean indicating whether both arrays are approximately equal
*
* @example
* var x = [ 0, 0, 1, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = hasAlmostEqualValues( x, y, 0 );
* // returns true
*/
declare function hasAlmostEqualValues<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, y: Collection<U> | AccessorArrayLike<U>, maxULP: number ): boolean;


// EXPORTS //

export = hasAlmostEqualValues;
