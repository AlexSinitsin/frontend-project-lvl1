#!/usr/bin/env node
import { engine } from '../src/index.js';
import prime from '../games/g-brain-prime.js';

const string = 'Answer "yes" if given number is prime. Otherwise answer "no".';
engine(string, prime);
