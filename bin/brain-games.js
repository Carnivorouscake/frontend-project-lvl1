#!/usr/bin/env node

// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/extensions
import sayHello from '../src/cli.js';

sayHello(readlineSync);
