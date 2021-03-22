# 코드 레이아웃

## 들여쓰기

각 들여쓰기 레벨마다 4칸 공백을 사용한다.

여러 줄에 이어지는 문장은 해당 문장에 래핑 된(wrapped) 요소들을 소괄호, 대괄호 그리고 중괄호 내에서
파이썬의 암시적 줄 결합(implicit line joining)을 사용하여 세로줄을 맞추어야 하거나,
*내어쓰기(hanging indent)*[^7]를 사용하여 정렬해야 한다.
특히, 내어쓰기를 사용할 때는 다음 사항들을 고려해야 한다. 첫 번째 문장에는 아규먼트가
없어야 한다. 그리고 추가적인 들여쓰기는 여러 줄에 이어지는 문장으로서 그 자체를 분명하게 구별하는 데에
사용되어야 한다.

```python
# 올바른 예:

# 여는 구분 문자(여기서는 소괄호)를 기준으로 정렬된다.
foo = long_function_name(var_one, var_two,
                         var_three, var_four)

# 함수의 아규먼트를 제외한 나머지와 아규먼트를 구분하기 위해 4개 공백(추가적인 들여쓰기)을 더한다.
def long_function_name(
        var_one, var_two, var_three,
        var_four):
    print(var_one)

# 내어쓰기는 레벨을 더해야 합니다. (역: 나머지 요소들에 들여쓰기를 한다는 의미)
foo = long_function_name(
    var_one, var_two,
    var_three, var_four)
```

::

```python
# 잘못된 예:

# 세로줄을 맞추지 않았을 때, 첫번째 문장에 아규먼트는 존재하지 않아야한다.
foo = long_function_name(var_one, var_two,
    var_three, var_four)

# 들여쓰기가 구별이 되지 않을 때는 추가적인 들여쓰기가 요구된다.
def long_function_name(
    var_one, var_two, var_three,
    var_four):
    print(var_one)
```

여러 줄에 이어지는 문장에서 4칸 공백 들여쓰기 규칙은 선택 사항이다.

선택사항:

```python
# 내어쓰기는 4칸 공백 외의 방식으로 들여쓰기가 *될 수도 있다* (역: 여기서는 2칸 공백 방식이 사용되었다.)
foo = long_function_name(
  var_one, var_two,
  var_three, var_four)
```

`if 조건문에서의 여러 줄에 이어지는 문장`

`if` 조건문의 조건 부분이 충분히 여러 줄로 쓰여질 필요가 있을 때,
두 문자 키워드의 결합(즉 `if`) 뒤에 한 개의 공백과 여는 소괄호를 추가하는 것이 나머지
여러 줄로 적힌 조건 부분을 위한 4칸 공백 들여쓰기 된 자연스러운 문장을 만들 수
있다는 것에 주목해야 한다. 이는 if 조건문 내에 중첩되어 있는 적절히 들여쓰기 된,
즉 자연스럽게 4칸 공백으로 들여쓰기 된 코드 모음과 시각적으로 충돌을 일으킬 수 있다. 이 PEP 문서에서는 `if` 조건문 내에
중첩되어 있는 문장으로부터 이러한 조건 부분에 대해 시각적으로 어떻게 추가적인 구별을 할 것인지(또는 구별을
할 것인지 하지 않을 것인지)에 대한 명백한 입장이 없다. 이 상황에서 혀용가능한 선택을 포함하되,
제한을 두지는 않을 것이다.

```python
# 추가적인 들여쓰기를 하지 않은 경우
if (this_is_one_thing and
    that_is_another_thing):
    do_something()

# 구문 하이라이터(syntax highlighter)를 지원하는 에디터에 어느 정도의 구별을 제공해 줄 수 있는 주석을 더하기
if (this_is_one_thing and
    that_is_another_thing):
    # 두 조건들이 참일 때, 뭐라뭐라....
    do_something()

# 조건이 여러 줄에 이어지는 문장에서 추가적인 들여쓰기를 한 경우
if (this_is_one_thing
        and that_is_another_thing):
    do_something()
```

(또한 이항 연산자들 이전 또는 이후에 띄어쓰기를 할 것인지 안할 것인지에 대한 논의를
이후의 챕터에서 확인할 수 있다.)

여러 줄이 이어지는 구조에 있는 닫는 괄호들은 다음과 같이 리스트의 마지막 줄에서 공백이 아닌
첫 번째 문자 아래에 줄을 맞출 수 있다.

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

또는 다음처럼 이어지는 구조가 시작하는 줄의 첫번째 문자 아래로 줄을 맞출 수 있다.

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

[^7]: Hanging indentation is a type-setting style where all the lines in a paragraph are indented except the first line. In the context of Python, the term is used to describe a style where the opening parenthesis of a parenthesized statement is the last non-whitespace character of the line, with subsequent lines being indented until the closing parenthesis.
