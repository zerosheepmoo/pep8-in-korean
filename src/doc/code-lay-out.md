# 코드 레이아웃

## 들여쓰기

각 들여쓰기 레벨마다 4칸 공백을 사용하자.

여러 줄에 이어지는 문장에서는 괄호 안의 Python의 암시적 줄 결합을 사용하여
괄호들로 감싸진 요소들의 세로줄을 맞추어야 한다.
또는 *내어쓰기*[^1]를 사용하여 세로줄을 맞추어야 한다.
내어쓰기를 사용할 때는 고려해야 할 사항이 있다.
우선, 첫 번째 줄에는 아규먼트가 없어야한다.
그리고 추가적인 들여쓰기는 여러 줄에 이어지는 문장 자체를 구분하는 데에 사용되어야 한다.

```python
# 올바른 예:

# 열린 구분 문자(역: 여기서는 소괄호)를 기준으로 정렬된다.
foo = long_function_name(var_one, var_two,
                         var_three, var_four)

# 함수의 아규먼트와 나머지 부분을 구분하기 위해 추가적인 들여쓰기를 한다.
def long_function_name(
        var_one, var_two, var_three,
        var_four):
    print(var_one)

# 내어쓰기는 레벨을 더해야 한다. (역: 나머지 줄에 들여쓰기를 해야 한다는 의미)
foo = long_function_name(
    var_one, var_two,
    var_three, var_four)
```

```python
# 잘못된 예:

# 세로줄을 맞추지 않았을 때, 첫 번째 줄에 아규먼트는 없어야 한다.
foo = long_function_name(var_one, var_two,
    var_three, var_four)

# 들여쓰기가 구별이 되지 않을 때는 추가적인 들여쓰기가 필요하다.
def long_function_name(
    var_one, var_two, var_three,
    var_four):
    print(var_one)
```

여러 줄에 이어지는 문장에서 4칸 공백 들여쓰기 규칙은 선택 사항이다.

```python
# 내어쓰기는 4칸 공백 외의 방식으로 들여쓰기가 *될 수도 있다* (역: 여기서는 2칸 공백 규칙이 적용되었다.)
foo = long_function_name(
  var_one, var_two,
  var_three, var_four)
```

`if`-문의 조건 부분이 길어 여러 줄로 작성 될 필요가 있는 경우를 보자.
`if` 키워드에 한 칸 공백과 열린 소괄호를 붙여 작성하면,
나머지 여러 줄로 작성 된 조건부가 저절로 4칸 공백 들여쓰기 되는 것에 주목해야 한다.

이는 if-문 내 중첩되어 있는 코드 모음과 시각적인 충돌을 일으킬 수 있다.
(이 코드 모음도 4칸 공백 들여쓰기가 되어 있을 경우)

이 PEP 문서에서는 if-문 내 중첩되어 있는 문장으로부터
이러한 조건 부분에 대해 시각적으로 어떻게 추가적인 구별을 할 것인지
(또는 구별을 할 것인지 하지 않을 것인지)에 대한 명백한 입장이 없다.
이런 상황에서 혀용 가능한 선택을 제시하되, 제한하지는 않을 것이다.

```python
# 추가적인 들여쓰기를 하지 않은 경우
if (this_is_one_thing and
    that_is_another_thing):
    do_something()

# 구문 하이라이터(syntax highlighter)를 지원하는 에디터에서
# 구별할 수 있게 주석을 더하기
if (this_is_one_thing and
    that_is_another_thing):
    # 두 조건들이 참일 때, 뭐라뭐라....
    do_something()

# 여러 줄에 이어지는 조건 줄에서 추가적인 들여쓰기를 한 경우
if (this_is_one_thing
        and that_is_another_thing):
    do_something()
```

(이항 연산자의 앞뒤로 띄어쓰기를 할 것인지에 대한 논의를
아래의 섹션에서 확인할 수 있다.)

여러 줄 구조에서 닫힌 괄호들은 리스트의 마지막 줄
공백이 아닌 첫 번째 문자를 기준으로 세로줄을 맞출 수 있다.

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

또는 시작하는 줄의 첫 번째 문자를 기준으로 세로줄을 맞출 수 있다.

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

## 탭 아니면 스페이스?

스페이스가 더 나은 들여쓰기 방식이다.

탭은 이미 탭으로 들여쓰기 된 코드에서 일관성 유지를 위해서만 사용되어야 한다.

Python 3에서는 들여쓰기에 탭과 스페이스를 혼용하는 것을 허용하지 않는다.

탭과 스페이스를 혼용하여 들여쓰기 된 Python 2 코드는 오로지 스페이스만을 사용하는 것으로 변환되어야 한다.

`-t` 옵션과 함께 Python 2 명령어 인터프리터(command line interpreter)를 호출(invoke) 할 때,
탭과 스페이스가 잘못 혼용된 코드에 대해 경고한다.
`-tt` 옵션을 사용할 때는 경고대신 에러가 발생한다.
이 옵션들은 매우 추천된다!

## 한 줄의 최대 길이

모든 줄은 한줄 당 최대 79개의 문자까지 적을 수 있다.

구조적인 제약을 덜 받는, 이어지는 긴 텍스트 블록(독스트링 또는 주석)도
줄 당 72개 문자로 제한되어야 한다.

필요한 에디터 창의 너비를 제한하는 것은 여러 파일들의 창 분할을 가능하게 하고,
인접한 열들에 두 가지 버전으로 보여주는 리뷰 툴을 사용할 때 유용하다.

대부분의 툴들에서의 디폴트 래핑은 코드의 시각적구조를 방해하여, 이해하는 것을 더
어렵게 한다. 비록 툴이 마지막 열에 글리프 표식(glyph)을 두었더라도,
창 너비를 80으로 설정한 에디터에서 래핑하는 것을 피하도록 제한했다.
몇 웹 기반 툴들은 다이나믹 라인(dynamic line) 래핑을 전혀 제공하지 않는다.

몇몇 팀은 줄의 길이가 더 긴 것을 아주 선호한다. 이 이슈에 동의하는
팀의 우선적으로 또는 배타적으로 유지되는 코드를 위해,
주석이나 독스트링만은 72자로 여전히 제한되도록 하면서,
줄 당 길이 제한을 99까지 한계를 늘리는 것은 허용한다.

Python 표준 라이브러리는 엄격하며, 각 줄이 79자로 제한되도록 요구한다.
(그리고 독스트링/주석은 72자까지)

긴 줄을 래핑하는 바람직한 방법은 Python의 괄호 내 암시적 줄 잇기 방식을 사용하는 것이다.
긴 줄들은 여러줄에 걸쳐 괄호로 표현을 래핑하는 하는 것으로 줄 바꿈을 할 수 있다.
여러 줄이 계속해서 이어질 때 백슬래시를 사용하는 방법보다 이러한 방법을 사용하는 것이 바람직하다.

백슬래시는 여전히 때때로 적절하다. 예를 들어,
길고 여러 줄인 `with`-문은 암시적인 줄 잇기를 사용할 수가 없어 백슬래시 사용을 허용한다.

```python
with open('/path/to/some/file/you/want/to/read') as file_1, \
     open('/path/to/some/file/being/written', 'w') as file_2:
    file_2.write(file_1.read())
```

(여러 줄 `with`-문에서의 들여쓰기 뿐 아니라,
여러 줄의 `if`-문에 대한 이전의 논의를 보라.)

이러한 경우의 또다른 예시로 `assert` 문장이 있다.

여러 줄에 걸쳐 이어지는 문장은 적절히 들여쓰기 해야함을 명심하라.

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

[^1]: 내어쓰기(hanging indent)란 시작 줄을 제외한 나머지 줄에 들여쓰기를 하는 형식 설정(type-setting) 스타일이다.
Python 컨텍스트에서 이 개념은 열린 괄호가 줄의 공백을 제외한 마지막 문자고,
이후 닫힌 괄호가 있는 줄까지 들여쓰기 하는 스타일을 말한다.
