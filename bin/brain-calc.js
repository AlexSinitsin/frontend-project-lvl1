#!/usr/bin/env node
import { engine } from '../src/index.js';
import calc from '../games/g-brain-calc.js';

const string = 'What is the result of the expression?';
engine(string, calc);
