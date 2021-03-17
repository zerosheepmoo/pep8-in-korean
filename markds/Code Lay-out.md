# 코드 레이아웃

## 들여쓰기

각 들여쓰기 단계마다 4개의 공백을 사용한다.

Continuation lines should align wrapped elements either vertically
using Python's implicit line joining inside parentheses, brackets and
braces, or using a *hanging indent* [#fn-hi]_.  When using a hanging
indent the following should be considered; there should be no
arguments on the first line and further indentation should be used to
clearly distinguish itself as a continuation line::
```python
    # Correct:

    # Aligned with opening delimiter.
    foo = long_function_name(var_one, var_two,
                             var_three, var_four)

    # Add 4 spaces (an extra level of indentation) to distinguish arguments from the rest.
    def long_function_name(
            var_one, var_two, var_three,
            var_four):
        print(var_one)

    # Hanging indents should add a level.
    foo = long_function_name(
        var_one, var_two,
        var_three, var_four)
```
::
```python
    # Wrong:

    # Arguments on first line forbidden when not using vertical alignment.
    foo = long_function_name(var_one, var_two,
        var_three, var_four)

    # Further indentation required as indentation is not distinguishable.
    def long_function_name(
        var_one, var_two, var_three,
        var_four):
        print(var_one)
```
The 4-space rule is optional for continuation lines.

Optional::
```python
    # Hanging indents *may* be indented to other than 4 spaces.
    foo = long_function_name(
      var_one, var_two,
      var_three, var_four)
```
.. _`multiline if-statements`:

When the conditional part of an ``if``-statement is long enough to require
that it be written across multiple lines, it's worth noting that the
combination of a two character keyword (i.e. ``if``), plus a single space,
plus an opening parenthesis creates a natural 4-space indent for the
subsequent lines of the multiline conditional.  This can produce a visual
conflict with the indented suite of code nested inside the ``if``-statement,
which would also naturally be indented to 4 spaces.  This PEP takes no
explicit position on how (or whether) to further visually distinguish such
conditional lines from the nested suite inside the ``if``-statement.
Acceptable options in this situation include, but are not limited to::
```python
    # No extra indentation.
    if (this_is_one_thing and
        that_is_another_thing):
        do_something()

    # Add a comment, which will provide some distinction in editors
    # supporting syntax highlighting.
    if (this_is_one_thing and
        that_is_another_thing):
        # Since both conditions are true, we can frobnicate.
        do_something()

    # Add some extra indentation on the conditional continuation line.
    if (this_is_one_thing
            and that_is_another_thing):
        do_something()
```
(Also see the discussion of whether to break before or after binary
operators below.)

The closing brace/bracket/parenthesis on multiline constructs may
either line up under the first non-whitespace character of the last
line of list, as in::
```python
    my_list = [
        1, 2, 3,
        4, 5, 6,
        ]
    result = some_function_that_takes_arguments(
        'a', 'b', 'c',
        'd', 'e', 'f',
        )
```
or it may be lined up under the first character of the line that
starts the multiline construct, as in::
```python
    my_list = [
        1, 2, 3,
        4, 5, 6,
    ]
    result = some_function_that_takes_arguments(
        'a', 'b', 'c',
        'd', 'e', 'f',
    )
```

## Tabs or Spaces?

Spaces are the preferred indentation method.

Tabs should be used solely to remain consistent with code that is
already indented with tabs.

Python 3 disallows mixing the use of tabs and spaces for indentation.

Python 2 code indented with a mixture of tabs and spaces should be
converted to using spaces exclusively.

When invoking the Python 2 command line interpreter with
the ``-t`` option, it issues warnings about code that illegally mixes
tabs and spaces.  When using ``-tt`` these warnings become errors.
These options are highly recommended!

## Maximum Line Length

Limit all lines to a maximum of 79 characters.

For flowing long blocks of text with fewer structural restrictions
(docstrings or comments), the line length should be limited to 72
characters.

Limiting the required editor window width makes it possible to have
several files open side by side, and works well when using code
review tools that present the two versions in adjacent columns.

The default wrapping in most tools disrupts the visual structure of the
code, making it more difficult to understand. The limits are chosen to
avoid wrapping in editors with the window width set to 80, even
if the tool places a marker glyph in the final column when wrapping
lines. Some web based tools may not offer dynamic line wrapping at all.

Some teams strongly prefer a longer line length.  For code maintained
exclusively or primarily by a team that can reach agreement on this
issue, it is okay to increase the line length limit up to 99 characters,
provided that comments and docstrings are still wrapped at 72
characters.

The Python standard library is conservative and requires limiting
lines to 79 characters (and docstrings/comments to 72).

The preferred way of wrapping long lines is by using Python's implied
line continuation inside parentheses, brackets and braces.  Long lines
can be broken over multiple lines by wrapping expressions in
parentheses. These should be used in preference to using a backslash
for line continuation.

Backslashes may still be appropriate at times.  For example, long,
multiple ``with``-statements cannot use implicit continuation, so
backslashes are acceptable::
```python
    with open('/path/to/some/file/you/want/to/read') as file_1, \
         open('/path/to/some/file/being/written', 'w') as file_2:
        file_2.write(file_1.read())
```
(See the previous discussion on `multiline if-statements`_ for further
thoughts on the indentation of such multiline ``with``-statements.)

Another such case is with ``assert`` statements.

Make sure to indent the continued line appropriately.

## Should a Line Break Before or After a Binary Operator?

For decades the recommended style was to break after binary operators.
But this can hurt readability in two ways: the operators tend to get
scattered across different columns on the screen, and each operator is
moved away from its operand and onto the previous line.  Here, the eye
has to do extra work to tell which items are added and which are
subtracted::
```python
    # Wrong:
    # operators sit far away from their operands
    income = (gross_wages +
              taxable_interest +
              (dividends - qualified_dividends) -
              ira_deduction -
              student_loan_interest)
```
To solve this readability problem, mathematicians and their publishers
follow the opposite convention.  Donald Knuth explains the traditional
rule in his *Computers and Typesetting* series: "Although formulas
within a paragraph always break after binary operations and relations,
displayed formulas always break before binary operations" [3]_.

Following the tradition from mathematics usually results in more
readable code::
```python
    # Correct:
    # easy to match operators with operands
    income = (gross_wages
              + taxable_interest
              + (dividends - qualified_dividends)
              - ira_deduction
              - student_loan_interest)
```
In Python code, it is permissible to break before or after a binary
operator, as long as the convention is consistent locally.  For new
code Knuth's style is suggested.

## Blank Lines

Surround top-level function and class definitions with two blank
lines.

Method definitions inside a class are surrounded by a single blank
line.

Extra blank lines may be used (sparingly) to separate groups of
related functions.  Blank lines may be omitted between a bunch of
related one-liners (e.g. a set of dummy implementations).

Use blank lines in functions, sparingly, to indicate logical sections.

Python accepts the control-L (i.e. ^L) form feed character as
whitespace; Many tools treat these characters as page separators, so
you may use them to separate pages of related sections of your file.
Note, some editors and web-based code viewers may not recognize
control-L as a form feed and will show another glyph in its place.

## Source File Encoding

Code in the core Python distribution should always use UTF-8 (or ASCII
in Python 2).

Files using ASCII (in Python 2) or UTF-8 (in Python 3) should not have
an encoding declaration.

In the standard library, non-default encodings should be used only for
test purposes or when a comment or docstring needs to mention an author
name that contains non-ASCII characters; otherwise, using ``\x``,
``\u``, ``\U``, or ``\N`` escapes is the preferred way to include
non-ASCII data in string literals.

For Python 3.0 and beyond, the following policy is prescribed for the
standard library (see PEP 3131): All identifiers in the Python
standard library MUST use ASCII-only identifiers, and SHOULD use
English words wherever feasible (in many cases, abbreviations and
technical terms are used which aren't English). In addition, string
literals and comments must also be in ASCII. The only exceptions are
(a) test cases testing the non-ASCII features, and
(b) names of authors. Authors whose names are not based on the
Latin alphabet (latin-1, ISO/IEC 8859-1 character set) MUST provide
a transliteration of their names in this character set.

Open source projects with a global audience are encouraged to adopt a
similar policy.

## Imports

- Imports should usually be on separate lines::
```python
    # Correct:
    import os
    import sys
```
  ::
```python
    # Wrong:
    import sys, os
```

  It's okay to say this though::
```python
    # Correct:
    from subprocess import Popen, PIPE
```
- Imports are always put at the top of the file, just after any module
  comments and docstrings, and before module globals and constants.

  Imports should be grouped in the following order:

  1. Standard library imports.
  2. Related third party imports.
  3. Local application/library specific imports.

  You should put a blank line between each group of imports.

- Absolute imports are recommended, as they are usually more readable
  and tend to be better behaved (or at least give better error
  messages) if the import system is incorrectly configured (such as
  when a directory inside a package ends up on ``sys.path``)::
```python
    import mypkg.sibling
    from mypkg import sibling
    from mypkg.sibling import example
```
  However, explicit relative imports are an acceptable alternative to
  absolute imports, especially when dealing with complex package layouts
  where using absolute imports would be unnecessarily verbose::
```python
    from . import sibling
    from .sibling import example
```
  Standard library code should avoid complex package layouts and always
  use absolute imports.

  Implicit relative imports should *never* be used and have been removed
  in Python 3.

- When importing a class from a class-containing module, it's usually
  okay to spell this::
```python
    from myclass import MyClass
    from foo.bar.yourclass import YourClass
```
  If this spelling causes local name clashes, then spell them explicitly::
```python
    import myclass
    import foo.bar.yourclass
```
  and use "myclass.MyClass" and "foo.bar.yourclass.YourClass".

- Wildcard imports (``from <module> import *``) should be avoided, as
  they make it unclear which names are present in the namespace,
  confusing both readers and many automated tools. There is one
  defensible use case for a wildcard import, which is to republish an
  internal interface as part of a public API (for example, overwriting
  a pure Python implementation of an interface with the definitions
  from an optional accelerator module and exactly which definitions
  will be overwritten isn't known in advance).

  When republishing names this way, the guidelines below regarding
  public and internal interfaces still apply.

## Module Level Dunder Names

Module level "dunders" (i.e. names with two leading and two trailing
underscores) such as ``__all__``, ``__author__``, ``__version__``,
etc. should be placed after the module docstring but before any import
statements *except* ``from __future__`` imports.  Python mandates that
future-imports must appear in the module before any other code except
docstrings::
```python
    """This is the example module.

    This module does stuff.
    """

    from __future__ import barry_as_FLUFL

    __all__ = ['a', 'b', 'c']
    __version__ = '0.1'
    __author__ = 'Cardinal Biggles'

    import os
    import sys
```