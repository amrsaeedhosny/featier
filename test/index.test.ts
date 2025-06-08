import { describe, it, expect } from 'vitest';
import { Featier } from '../src';

describe('Featier', () => {
  it('should return true when flag is on', () => {
    const featier = new Featier({ darkMode: true });
    expect(featier.isOn('darkMode')).toBe(true);
  });
});
