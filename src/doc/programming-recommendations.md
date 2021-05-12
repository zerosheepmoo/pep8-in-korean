Programming Recommendations
===========================

- Code should be written in a way that does not disadvantage other
  implementations of Python (PyPy, Jython, IronPython, Cython, Psyco,
  and such).

  For example, do not rely on CPython's efficient implementation of
  in-place string concatenation for statements in the form ``a += b``
  or ``a = a + b``.  This optimization is fragile even in CPython (it
  only works for some types) and isn't present at all in implementations
  that don't use refcounting.  In performance sensitive parts of the
  library, the ``''.join()`` form should be used instead.  This will
  ensure that concatenation occurs in linear time across various
  implementations.

- Comparisons to singletons like None should always be done with
  ``is`` or ``is not``, never the equality operators.

  Also, beware of writing ``if x`` when you really mean ``if x is not
  None`` -- e.g. when testing whether a variable or argument that
  defaults to None was set to some other value.  The other value might
  have a type (such as a container) that could be false in a boolean
  context!

- Use ``is not`` operator rather than ``not ... is``.  While both
  expressions are functionally identical, the former is more readable
  and preferred::

      # Correct:
      if foo is not None:

  ::

      # Wrong:
      if not foo is None:

- When implementing ordering operations with rich comparisons, it is
  best to implement all six operations (``__eq__``, ``__ne__``,
  ``__lt__``, ``__le__``, ``__gt__``, ``__ge__``) rather than relying
  on other code to only exercise a particular comparison.

  To minimize the effort involved, the ``functools.total_ordering()``
  decorator provides a tool to generate missing comparison methods.

  PEP 207 indicates that reflexivity rules *are* assumed by Python.
  Thus, the interpreter may swap ``y > x`` with ``x < y``, ``y >= x``
  with ``x <= y``, and may swap the arguments of ``x == y`` and ``x !=
  y``.  The ``sort()`` and ``min()`` operations are guaranteed to use
  the ``<`` operator and the ``max()`` function uses the ``>``
  operator.  However, it is best to implement all six operations so
  that confusion doesn't arise in other contexts.

- Always use a def statement instead of an assignment statement that binds
  a lambda expression directly to an identifier::

      # Correct:
      def f(x): return 2*x

  ::

      # Wrong:
      f = lambda x: 2*x

  The first form means that the name of the resulting function object is
  specifically 'f' instead of the generic '<lambda>'. This is more
  useful for tracebacks and string representations in general. The use
  of the assignment statement eliminates the sole benefit a lambda
  expression can offer over an explicit def statement (i.e. that it can
  be embedded inside a larger expression)

- Derive exceptions from ``Exception`` rather than ``BaseException``.
  Direct inheritance from ``BaseException`` is reserved for exceptions
  where catching them is almost always the wrong thing to do.

  Design exception hierarchies based on the distinctions that code
  *catching* the exceptions is likely to need, rather than the locations
  where the exceptions are raised. Aim to answer the question
  "What went wrong?" programmatically, rather than only stating that
  "A problem occurred" (see PEP 3151 for an example of this lesson being
  learned for the builtin exception hierarchy)

  Class naming conventions apply here, although you should add the
  suffix "Error" to your exception classes if the exception is an
  error.  Non-error exceptions that are used for non-local flow control
  or other forms of signaling need no special suffix.

- Use exception chaining appropriately. In Python 3, "raise X from Y"
  should be used to indicate explicit replacement without losing the
  original traceback.

  When deliberately replacing an inner exception (using "raise X" in
  Python 2 or "raise X from None" in Python 3.3+), ensure that relevant
  details are transferred to the new exception (such as preserving the
  attribute name when converting KeyError to AttributeError, or
  embedding the text of the original exception in the new exception
  message).

- When raising an exception in Python 2, use ``raise ValueError('message')``
  instead of the older form ``raise ValueError, 'message'``.

  The latter form is not legal Python 3 syntax.

  The paren-using form also means that when the exception arguments are
  long or include string formatting, you don't need to use line
  continuation characters thanks to the containing parentheses.

- When catching exceptions, mention specific exceptions whenever
  possible instead of using a bare ``except:`` clause::

      try:
          import platform_specific_module
      except ImportError:
          platform_specific_module = None

  A bare ``except:`` clause will catch SystemExit and
  KeyboardInterrupt exceptions, making it harder to interrupt a
  program with Control-C, and can disguise other problems.  If you
  want to catch all exceptions that signal program errors, use
  ``except Exception:`` (bare except is equivalent to ``except
  BaseException:``).

  A good rule of thumb is to limit use of bare 'except' clauses to two
  cases:

  1. If the exception handler will be printing out or logging the
     traceback; at least the user will be aware that an error has
     occurred.

  2. If the code needs to do some cleanup work, but then lets the
     exception propagate upwards with ``raise``.  ``try...finally``
     can be a better way to handle this case.

- When binding caught exceptions to a name, prefer the explicit name
  binding syntax added in Python 2.6::

      try:
          process_data()
      except Exception as exc:
          raise DataProcessingFailedError(str(exc))

  This is the only syntax supported in Python 3, and avoids the
  ambiguity problems associated with the older comma-based syntax.

- When catching operating system errors, prefer the explicit exception
  hierarchy introduced in Python 3.3 over introspection of ``errno``
  values.

- Additionally, for all try/except clauses, limit the ``try`` clause
  to the absolute minimum amount of code necessary.  Again, this
  avoids masking bugs::

      # Correct:
      try:
          value = collection[key]
      except KeyError:
          return key_not_found(key)
      else:
          return handle_value(value)

  ::

      # Wrong:
      try:
          # Too broad!
          return handle_value(collection[key])
      except KeyError:
          # Will also catch KeyError raised by handle_value()
          return key_not_found(key)

- When a resource is local to a particular section of code, use a
  ``with`` statement to ensure it is cleaned up promptly and reliably
  after use. A try/finally statement is also acceptable.

- Context managers should be invoked through separate functions or methods
  whenever they do something other than acquire and release resources::

      # Correct:
      with conn.begin_transaction():
          do_stuff_in_transaction(conn)

  ::

      # Wrong:
      with conn:
          do_stuff_in_transaction(conn)

  The latter example doesn't provide any information to indicate that
  the ``__enter__`` and ``__exit__`` methods are doing something other
  than closing the connection after a transaction.  Being explicit is
  important in this case.

- Be consistent in return statements.  Either all return statements in
  a function should return an expression, or none of them should.  If
  any return statement returns an expression, any return statements
  where no value is returned should explicitly state this as ``return
  None``, and an explicit return statement should be present at the
  end of the function (if reachable)::

      # Correct:

      def foo(x):
          if x >= 0:
              return math.sqrt(x)
          else:
              return None

      def bar(x):
          if x < 0:
              return None
          return math.sqrt(x)

  ::

      # Wrong:

      def foo(x):
          if x >= 0:
              return math.sqrt(x)

      def bar(x):
          if x < 0:
              return
          return math.sqrt(x)

- Use string methods instead of the string module.

  String methods are always much faster and share the same API with
  unicode strings.  Override this rule if backwards compatibility with
  Pythons older than 2.0 is required.

- Use ``''.startswith()`` and ``''.endswith()`` instead of string
  slicing to check for prefixes or suffixes.

  startswith() and endswith() are cleaner and less error prone::

      # Correct:
      if foo.startswith('bar'):

  ::

      # Wrong:
      if foo[:3] == 'bar':

- Object type comparisons should always use isinstance() instead of
  comparing types directly::

      # Correct:
      if isinstance(obj, int):

  ::

      # Wrong:
      if type(obj) is type(1):

When checking if an object is a string, keep in mind that it might
be a unicode string too!  In Python 2, str and unicode have a
common base class, basestring, so you can do::

      if isinstance(obj, basestring):

Note that in Python 3, ``unicode`` and ``basestring`` no longer exist
(there is only ``str``) and a bytes object is no longer a kind of
string (it is a sequence of integers instead).

- For sequences, (strings, lists, tuples), use the fact that empty
  sequences are false::

      # Correct:
      if not seq:
      if seq:

  ::

      # Wrong:
      if len(seq):
      if not len(seq):

- Don't write string literals that rely on significant trailing
  whitespace.  Such trailing whitespace is visually indistinguishable
  and some editors (or more recently, reindent.py) will trim them.

- Don't compare boolean values to True or False using ``==``::

      # Correct:
      if greeting:

  ::

      # Wrong:
      if greeting == True:

  Worse::

      # Wrong:
      if greeting is True:

- Use of the flow control statements ``return``/``break``/``continue``
  within the finally suite of a ``try...finally``, where the flow control
  statement would jump outside the finally suite, is discouraged.  This
  is because such statements will implicitly cancel any active exception
  that is propagating through the finally suite::

      # Wrong:
      def foo():
          try:
              1 / 0
          finally:
              return 42
