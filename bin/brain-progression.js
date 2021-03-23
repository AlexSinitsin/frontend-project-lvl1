#!/usr/bin/env node
import { engine } from '../src/index.js';
import progression from '../games/g-brain-progression.js';

const string = 'What number is missing in the progression?';
engine(string, progression);
