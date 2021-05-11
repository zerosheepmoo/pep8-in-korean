# 코드 레이아웃 나머지

> [코드 레이아웃](./code-lay-out.md)과 합쳐질 문서다.

Should a Line Break Before or After a Binary Operator?
------------------------------------------------------

For decades the recommended style was to break after binary operators.
But this can hurt readability in two ways: the operators tend to get
scattered across different columns on the screen, and each operator is
moved away from its operand and onto the previous line.  Here, the eye
has to do extra work to tell which items are added and which are
subtracted::

    # Wrong:
    # operators sit far away from their operands
    income = (gross_wages +
              taxable_interest +
              (dividends - qualified_dividends) -
              ira_deduction -
              student_loan_interest)

To solve this readability problem, mathematicians and their publishers
follow the opposite convention.  Donald Knuth explains the traditional
rule in his *Computers and Typesetting* series: "Although formulas
within a paragraph always break after binary operations and relations,
displayed formulas always break before binary operations" [3]_.

Following the tradition from mathematics usually results in more
readable code::

    # Correct:
    # easy to match operators with operands
    income = (gross_wages
              + taxable_interest
              + (dividends - qualified_dividends)
              - ira_deduction
              - student_loan_interest)

In Python code, it is permissible to break before or after a binary
operator, as long as the convention is consistent locally.  For new
code Knuth's style is suggested.

Blank Lines
-----------

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

Source File Encoding
--------------------

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

Imports
-------

- Imports should usually be on separate lines::

       # Correct:
       import os
       import sys

  ::

       # Wrong:
       import sys, os

  It's okay to say this though::

      # Correct:
      from subprocess import Popen, PIPE

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

      import mypkg.sibling
      from mypkg import sibling
      from mypkg.sibling import example

  However, explicit relative imports are an acceptable alternative to
  absolute imports, especially when dealing with complex package layouts
  where using absolute imports would be unnecessarily verbose::

      from . import sibling
      from .sibling import example

  Standard library code should avoid complex package layouts and always
  use absolute imports.

  Implicit relative imports should *never* be used and have been removed
  in Python 3.

- When importing a class from a class-containing module, it's usually
  okay to spell this::

      from myclass import MyClass
      from foo.bar.yourclass import YourClass

  If this spelling causes local name clashes, then spell them explicitly::

      import myclass
      import foo.bar.yourclass

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

Module Level Dunder Names
-------------------------

Module level "dunders" (i.e. names with two leading and two trailing
underscores) such as ``__all__``, ``__author__``, ``__version__``,
etc. should be placed after the module docstring but before any import
statements *except* ``from __future__`` imports.  Python mandates that
future-imports must appear in the module before any other code except
docstrings::

    """This is the example module.

    This module does stuff.
    """

    from __future__ import barry_as_FLUFL

    __all__ = ['a', 'b', 'c']
    __version__ = '0.1'
    __author__ = 'Cardinal Biggles'

    import os
    import sys
