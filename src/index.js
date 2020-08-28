import * as core from '@actions/core';

console.log(core);

export const test = 1;

// conflicts with export in @actions/core
export const getState = 1;
