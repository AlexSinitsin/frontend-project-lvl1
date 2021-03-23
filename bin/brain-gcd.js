#!/usr/bin/env node
import { engine } from '../src/index.js';
import gcd from '../games/g-brain-gcd.js';

const string = 'Find the greatest common divisor of given numbers.';
engine(string, gcd);
