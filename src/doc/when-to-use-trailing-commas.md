# When to Use Trailing Commas

Trailing commas are usually optional, except they are mandatory when making
a tuple of one element (and in Python 2 they have semantics for the print statement).
For clarity, it is recommended to surround the latter in
(technically redundant) parentheses:

```python
# Correct:

FILES = ('setup.cfg',)
```

```python
# Wrong

FILES = 'setup.cfg',
```

When trailing commas are redundant, they are often helpful when a version control
system is used, when a list of values, arguments or imported items is expected
to be extended over time. The pattern is to put each value (etc.)
on a line by itself, always adding a trailing comma, and add the close
parenthesis/bracket/brace on the next line. However it does not make sense to
have a trailing comma on the same line as the closing delimiter
(except in the above case of singleton tuples):

```python
# Correct

FILES = [
    'setup.cfg',
    'tox.ini',
    ]
initialize(FILES,
           error=True,
           )
```

```python
# Wrong

FILES = ['setup.cfg', 'tox.ini',]
initialize(FILES, error=True,)
```
