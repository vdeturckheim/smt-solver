import Assert from 'assert';
import { describe, it } from 'mocha';
import { z3Solve } from '../index.js';

describe('Z3', () => {
    it('should solve a simple expression', () => {
        const res = z3Solve(`(declare-const a Int)
        (assert (> a 1))
        (assert (< a 3))`);
        Assert.strictEqual(res, '(define-fun a () Int\n  2)');
    });

    it('should unsat impossible expression', () => {
        const res = z3Solve(`(declare-const a Int)\n
        (assert (< a 1))
        (assert (> a 3))`);
        Assert.strictEqual(res, 'unsat');
    });

    it('should throw on malformed queries', () => {
        Assert.throws(() => z3Solve(`(declare-const a Int)\n
        (assert (< a 1))
        (assert (> a 3)`));
    });
});
