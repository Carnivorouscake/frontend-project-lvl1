#!/usr/bin/env node

import readlineSync from 'readline-sync';

import sayHello from '../src/index.js';

sayHello(readlineSync);
