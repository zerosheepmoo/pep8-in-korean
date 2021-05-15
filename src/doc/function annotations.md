Function Annotations
--------------------

With the acceptance of PEP 484, the style rules for function
annotations are changing.

- In order to be forward compatible, function annotations in Python 3
  code should preferably use PEP 484 syntax.  (There are some
  formatting recommendations for annotations in the previous section.)

- The experimentation with annotation styles that was recommended
  previously in this PEP is no longer encouraged.

- However, outside the stdlib, experiments within the rules of PEP 484
  are now encouraged.  For example, marking up a large third party
  library or application with PEP 484 style type annotations,
  reviewing how easy it was to add those annotations, and observing
  whether their presence increases code understandability.

- The Python standard library should be conservative in adopting such
  annotations, but their use is allowed for new code and for big
  refactorings.

- For code that wants to make a different use of function annotations
  it is recommended to put a comment of the form::

      # type: ignore

  near the top of the file; this tells type checker to ignore all
  annotations.  (More fine-grained ways of disabling complaints from
  type checkers can be found in PEP 484.)

- Like linters, type checkers are optional, separate tools.  Python
  interpreters by default should not issue any messages due to type
  checking and should not alter their behavior based on annotations.

- Users who don't want to use type checkers are free to ignore them.
  However, it is expected that users of third party library packages
  may want to run type checkers over those packages.  For this purpose
  PEP 484 recommends the use of stub files: .pyi files that are read
  by the type checker in preference of the corresponding .py files.
  Stub files can be distributed with a library, or separately (with
  the library author's permission) through the typeshed repo [5]_.

- For code that needs to be backwards compatible, type annotations
  can be added in the form of comments.  See the relevant section of
  PEP 484 [6]_.
