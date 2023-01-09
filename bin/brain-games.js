#!/usr/bin/env node

import readlineSync from 'readline-sync';

import sayHello from '../src/cli.js';

sayHello(readlineSync);
