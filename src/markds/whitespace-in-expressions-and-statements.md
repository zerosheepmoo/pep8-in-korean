# Whitespace in Expressions and Statements

## Pet Peeves

Avoid extraneous whitespace in the following situations:

- Immediately inside parentheses, brackets or braces

```python
# Correct:
spam(ham[1], {eggs: 2})
```

```python
# Wrong:
spam( ham[ 1 ], { eggs: 2 } )
```

- Between a trailing comma and a following close parenthesis

```python
# Correct:
foo = (0,)
```

```python
# Wrong:
bar = (0, )
```

- Immediately before a comma, semicolon, or colon

```python
# Correct:
if x == 4: print x, y; x, y = y, x
```

```python
# Wrong:
if x == 4 : print x , y ; x , y = y , x
```

- However, in a slice the colon acts like a binary operator, and
  should have equal amounts on either side (treating it as the
  operator with the lowest priority).  In an extended slice, both
  colons must have the same amount of spacing applied.  Exception:
  when a slice parameter is omitted, the space is omitted

```python
# Correct:
ham[1:9], ham[1:9:3], ham[:9:3], ham[1::3], ham[1:9:]
ham[lower:upper], ham[lower:upper:], ham[lower::step]
ham[lower+offset : upper+offset]
ham[: upper_fn(x) : step_fn(x)], ham[:: step_fn(x)]
ham[lower + offset : upper + offset]
```

```python
# Wrong:
ham[lower + offset:upper + offset]
ham[1: 9], ham[1 :9], ham[1:9 :3]
ham[lower : : upper]
ham[ : upper]
```

- Immediately before the open parenthesis that starts the argument
  list of a function call

```python
# Correct:
spam(1)
```

```python
# Wrong:
spam (1)
```

- Immediately before the open parenthesis that starts an indexing or
  slicing

```python
# Correct:
dct['key'] = lst[index]
```

```python
# Wrong:
dct ['key'] = lst [index]
```

- More than one space around an assignment (or other) operator to
  align it with another

```python
# Correct:
x = 1
y = 2
long_variable = 3
```

```python
# Wrong:
x             = 1
y             = 2
long_variable = 3
```

## Other Recommendations

- Avoid trailing whitespace anywhere.  Because it's usually invisible,
  it can be confusing: e.g. a backslash followed by a space and a
  newline does not count as a line continuation marker.  Some editors
  don't preserve it and many projects (like CPython itself) have
  pre-commit hooks that reject it.

- Always surround these binary operators with a single space on either
  side: assignment (``=``), augmented assignment (``+=``, ``-=``
  etc.), comparisons (``==``, ``<``, ``>``, ``!=``, ``<>``, ``<=``,
  ``>=``, ``in``, ``not in``, ``is``, ``is not``), Booleans (``and``,
  ``or``, ``not``).

- If operators with different priorities are used, consider adding
  whitespace around the operators with the lowest priority(ies). Use
  your own judgment; however, never use more than one space, and
  always have the same amount of whitespace on both sides of a binary
  operator

```python
# Correct:
i = i + 1
submitted += 1
x = x*2 - 1
hypot2 = x*x + y*y
c = (a+b) * (a-b)
```

```python
# Wrong:
i=i+1
submitted +=1
x = x * 2 - 1
hypot2 = x * x + y * y
c = (a + b) * (a - b)
```

- Function annotations should use the normal rules for colons and
  always have spaces around the ``->`` arrow if present.  (See
  `Function Annotations`_ below for more about function annotations.)::

```python
# Correct:
def munge(input: AnyStr): ...
def munge() -> PosInt: ...
```

```python
# Wrong:
def munge(input:AnyStr): ...
def munge()->PosInt: ...
```

- Don't use spaces around the ``=`` sign when used to indicate a
  keyword argument, or when used to indicate a default value for an
  *unannotated* function parameter::

```python
# Correct:
def complex(real, imag=0.0):
    return magic(r=real, i=imag)
```

```python
# Wrong:
def complex(real, imag = 0.0):
    return magic(r = real, i = imag)
```

- When combining an argument annotation with a default value, however, do use
  spaces around the ``=`` sign

```python
# Correct:
def munge(sep: AnyStr = None): ...
def munge(input: AnyStr, sep: AnyStr = None, limit=1000): ...
```

```python
# Wrong:
def munge(input: AnyStr=None): ...
def munge(input: AnyStr, limit = 1000): ...
```

- Compound statements (multiple statements on the same line) are
  generally discouraged

```python
# Correct:
if foo == 'blah':
    do_blah_thing()
do_one()
do_two()
do_three()
```

- Rather not

```python
# Wrong:
if foo == 'blah': do_blah_thing()
do_one(); do_two(); do_three()
```

- While sometimes it's okay to put an if/for/while with a small body
  on the same line, never do this for multi-clause statements.  Also
  avoid folding such long lines!

  Rather not

```python
# Wrong:
if foo == 'blah': do_blah_thing()
for x in lst: total += x
while t < 10: t = delay()
```

- Definitely not::

```python
# Wrong:
if foo == 'blah': do_blah_thing()
else: do_non_blah_thing()

try: something()
finally: cleanup()

do_one(); do_two(); do_three(long, argument,
                             list, like, this)

if foo == 'blah': one(); two(); three()
```