# Comments

Comments should be complete sentences.  The first word should be
capitalized, unless it is an identifier that begins with a lower case
letter (never alter the case of identifiers!).

Block comments generally consist of one or more paragraphs built out of
complete sentences, with each sentence ending in a period.

You should use two spaces after a sentence-ending period in multi-
sentence comments, except after the final sentence.

Ensure that your comments are clear and easily understandable to other
speakers of the language you are writing in.

Python coders from non-English speaking countries: please write your
comments in English, unless you are 120% sure that the code will never
be read by people who don't speak your language.

## Block Comments

Block comments generally apply to some (or all) code that follows
them, and are indented to the same level as that code.  Each line of a
block comment starts with a ``#`` and a single space (unless it is
indented text inside the comment).

Paragraphs inside a block comment are separated by a line containing a
single ``#``.

## Inline Comments

Use inline comments sparingly.

An inline comment is a comment on the same line as a statement.
Inline comments should be separated by at least two spaces from the
statement.  They should start with a # and a single space.

Inline comments are unnecessary and in fact distracting if they state
the obvious.  Don't do this::

    x = x + 1                 # Increment x

But sometimes, this is useful::

    x = x + 1                 # Compensate for border

## Documentation Strings

Conventions for writing good documentation strings
(a.k.a. "docstrings") are immortalized in PEP 257.

- Write docstrings for all public modules, functions, classes, and
  methods.  Docstrings are not necessary for non-public methods, but
  you should have a comment that describes what the method does.  This
  comment should appear after the ``def`` line.

- PEP 257 describes good docstring conventions.  Note that most
  importantly, the ``"""`` that ends a multiline docstring should be
  on a line by itself::

      """Return a foobang

      Optional plotz says to frobnicate the bizbaz first.
      """

- For one liner docstrings, please keep the closing ``"""`` on
  the same line::

      """Return an ex-parrot."""
