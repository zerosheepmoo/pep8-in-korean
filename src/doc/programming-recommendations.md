# 프로그래밍 권장사항

- 코드는 Python 의 다른 구현들
  (PyPy, Jython, IronPython, Cython, Psyco 등)
  에 해가 되지 않는 방향으로
  작성되어야 한다.
  
  예를 들면, `a += b` 또는 `a = a + b` 형식의 명령문에 대한
  CPython의 효율적인 내부 문자열 연결(concatnation)
  구현에 의존하지 말자.
  이 최적화는 CPython 에서도 깨지기 쉽다.
  (이는 몇 몇 타입에만 작동한다.)
  그리고 이 최적화는 refcounting[^1] 을 사용하지 않는 구현에는 전혀 도입되지 않는다.
  라이브러리의 성능에 민감한 부분에서는 `''.join ()` 형식을 대신 사용해야 한다.
  이렇게 해야 다양한 구현에서 연결 구현이 선형 시간으로 발생한다.

- `None` 같은 싱글톤과의 비교는 `is` 나 `is not` 으로 항상 이루어져야 한다.
  등호 연산자는 절대 안 된다.

  또, `if x` 를 작성할 때는 정말로 `if x is not None` 의 의미여야 한다.
  None이 디폴트 값인 변수나 아규먼트가 다른 값으로
  설정되어 있는지를 테스트 할 때 말이다.
  그 다른 값은 (container 같이) boolean 컨텍스트에서
  false 가 될 수 있는 타입을 갖고 있을 수 있다!

- `is not` 연산자를 `not ... is`보다 더 사용하자.
  둘 다 기능적으로는 동리하지만, 전자의 형식이 더 가독성 있고
  바람직한 방식이다.

```python
# 옳은 예:
if foo is not None:
```

```python
# 틀린 예:
if not foo is None:
```

- 리치 연산자를 사용하여 연산자의 순서를 정하는 구현을 할 때,
  여섯 개의 모든 연산자
  (`__eq__`, `__ne__`, `__lt__`, `__le__`, `__gt__`, `__ge__`)
  를 구현하는 것이 가장 좋다. 특정 연산에서 작동하는 다른 코드에 의존하는 것보다 말이다.

  들어가는 노력을 최소화하기 위해, `functools.total_ordering()` 데코레이터는
  누락된 비교 메소드를 생성하는 툴을 제공한다.

  [PEP 207](https://www.python.org/dev/peps/pep-0207/)
  은 반사성(reflexivity) 규칙이 Python 에 의해 **가정**됨을 나타낸다.
  따라서, 인터프리터가 `y > x` 를 `x < y`로, `y >= x` 를 `x <= y`로
  바꾸거나, `x == y` 와 `x != y`의 아규먼트(_역: 여기서는 양변_)을 바꿀 수 있다.
  `sort()`와 `min()` 연산은 `<` 연산자를 사용하는 것을,
  `max()` 함수는 `>` 연산자를 사용하는 것을 보장한다.
  하지만, 다른 컨텍스트로부터 혼란이 떠오르지 않기 위해 여섯 개의 모든 연산들을 구현하는 것이 가장 바람직하다.

- 식별자에 직접적으로 람다 표현식을 바인딩한 할당 문보다,
  항상 `def` 문을 사용하자.

```python
      # 옳은 예:
      def f(x): return 2*x
```

```python
      # 틀린 예:
      f = lambda x: 2*x
```

  첫번째 형식은 결과 함수 객체 명을 제네릭
  `<lambda>` 대신 구체적으로 'f'임을 의미한다.
  이는 일반적인 문자열 표현(representation)과 역추적(tracebacks)에 있어
  유용하다. 할당 문의 사용은 람다 표현식이 명시적인 `def` 선언문 없이 제공된다는
  유일한 이점을 제거한다.
  (즉, 이는 커다란 표현 안에서 내장될(embedded) 수 있다는 말.)

- 예외를 `BaseException`보다 `Exception`으로 부터 파생(derive)시키자.
  `BaseException`으로 부터 직접적인 상속을 한 예외는
  대게 항상 잘못된 짓을 했을 때 포착(catching)되는 예외가 있는 곳에서 사용될 것으로 예정되어있다.

  코드가 예외를 *포착*하는 데 필요한 구분(distictions)을
  기반으로 예외 계층을 설계하자. 예외가 떠오르는(raised) 곳에서 하기보다는 말이다.
  단순히 "문제가 발생하였다."는 언급에 대하여 겨냥하기 보단,
  프로그램적으로 "무엇이 잘못 되어가고 있었나?" 하는 질문에 대한 답을 겨냥하자.
  ([PEP 3151](https://www.python.org/dev/peps/pep-3151/)
  의 내장 예외 계층에 대해서 배우는 수업의 예시를 참고하자.)

  비록 예외가 오류일 경우에는 접두어로 "Error"를 당신의 예외 클래스들에 추가하지만,
  기본적으로 클래스 작명 컨벤션이 적용된다. 에러가 아닌 예외들은 특별한 접두어가
  필요하지 않다. 이런 예외들은 비논리적인 흐름 제어거나
  다른 신호전달(signaling)의 형태다.

- 예외 체이닝을 적절히 사용하자. Python 3에서는 `raise X from Y`가
  원래의 역추적(traceback)의 손실이 없이 명시적인 대체(_역: 예외 체이닝_)를 나타내는데
  사용되어야한다.
  
  의도적으로 내부 예외를 대체하는 경우
  (Python 2의 `raise X`, Python 3.3+의 `raise X from Y`를 사용하는 것),
  관련 세부 사항이 새로운 예외로 양도(transferred)되었다는 것을 보장해야한다.
  (예를 들어, KeyError를 AttributeError로
  전환할 때 어트리뷰트 명이 보존되는 것
  또는, 새로운 예외 메시지 안에서 원래 예외의 텍스트가 들어있는 것)

- Python 2 에서 예외가 떠오를 경우, `raise ValueError('message')`를 사용하자.
  오래된 형식인 `raise ValueError, 'message'` 대신에 말이다.

  이 오래된 형식은 Python 3 문법에서는 허용하지 않는다.

  또한, 괄호 사용 양식(paren-using form)은 예외의 아규먼트가 길거나
  문자열 포매팅을 포함할 때,
  감싸는 소괄호 덕에 줄 이음 문자를 사용할 필요가 없어짐을 나타내기도 한다.

- 예외를 포착할 때, 생 `except:` 절을 사용하기 보다
  가능한 특정 예외를 언급하라.

```python
try:
    import platform_specific_module
except ImportError:
    platform_specific_module = None
```

  생 `except:` 절은 SystemExit 과 KeyboardInterrupt 예외를 포착할 것이며,
  이로인해 컨트롤 + C 를 사용해서 프로그램을 중단하기 어렵게 만든다.
  그리고 다른 문제로 가장(disguise)될 수도 있다.
  (_역: 본래 문제에 대한 예외가 발생해야하는데 다른 문제로 인식될 수 있다는 것_)
  프로그램 오류를 알리는 모든 예외를 포착하고 싶다면, `except Exception:`을 사용하자.
  (생 예외처리는 `except BaseException:`과 같기 때문이다.)

  엄지척 할 수 있는 좋은 규칙은 생 `'except'` 절 사용을
  다음 두 개의 경우로만 제한하는 것이다.

  1. 예외 핸들러가 역추적을 로깅하거나 출력하게 될 때.
     최소한 사용자가 오류가 발생했음을 인지할 수 있도록.
  2. 코드 정리(cleanup) 작업을 해야할 때. 하지만 그럴 땐 예외를 `raise`와 함께
     위로 전파(propagate)하도록 하게하자.
     이러한  경우를 제어하기 위해 `try..finally`
     가 더 좋은 방법이 될 수 있다.

- 포착된 예외를 이름에 바인딩할 때, Python 2.6 에서 추가된
  명시적 이름 바인딩 구문이 바람직하다.

```python
try:
    process_data()
except Exception as exc:
    raise DataProcessingFailedError(str(exc))
```

  이는 Python 3에서만 지원되는 구문이다.
  그리고 오래된 콤마 기반 구문과 구분하기 애매해지는 문제를 피하자.
  
- 운영체제 오류를 포착할 땐, Python 3.3 에서 도입된 명시적 예외 계층구조가 바람직하다.
  `errno` 값들을 검사하는 것(introspection) 대신에 말이다.

- 추가적으로 모든 try/except 절에 대해, `try` 절을
  필요한 최소한의 코드로 제한하자. 다시 말하지만, 이는 마스킹 버그를 방지한다.

```python
# 옳은 예:
try:
    value = collection[key]
except KeyError:
    return key_not_found(key)
else:
    return handle_value(value)
```

```python
# 틀린 예:
try:
    # 너무 범위가 넓다!
    return handle_value(collection[key])
except KeyError:
    # handle_value() 로 떠오른 KeyError 도 포착하게 될 것이다.
    return key_not_found(key)
```

- 자원이 특정 구역의 코드에 국지적일 때,
  `with` 문을 사용하여 즉시 정리됨과 사용 후 신뢰성(reliably)를 보장하자.
  try/finally 문 또한 허용가능하다.

- 컨텍스트 관리자는 자원을 획득하거나 해제하는 일 외의 작업을 할 때마다
  별도의 함수 또는 메소드를 통해 불러와져야(invoked) 한다.

```python
# 옳은 예:
with conn.begin_transaction():
    do_stuff_in_transaction(conn)
```

```python
# 틀린 예:
with conn:
    do_stuff_in_transaction(conn)
```

  후자의 예시는 `__enter__`와 `__exit__` 메소드가
  트랜잭션(transaction) 후의 연결을 닫는 것 외에 어떤 작업을 수행하고 있음을
  나타내는 어떠한 정보도 제공하지 않는다.
  이 경우 명시적으로 하는 것이 중요하다.

- 반환 문에 대하여 일관성을 지키자.
  함수 내 모든 반환 문은 표현을 반환하거나 어떤 것도 반환하지 않아야 한다.
  만약 반환 문이 어떠한 표현을 반환한다면,
  어떠한 반환문도 반환값이 없는 곳에서는 명시적으로 `return None`을 작성해야 한다.
  그리고 명시적인 반환 문은 함수의 끝에 나타내야 한다.
  (도달 가능(reachable)하다면 말이다.)

```python
# 옳은 예:

def foo(x):
    if x >= 0:
        return math.sqrt(x)
    else:
        return None

def bar(x):
    if x < 0:
        return None
    return math.sqrt(x)
```

```python
# 틀린 예:

def foo(x):
    if x >= 0:
        return math.sqrt(x)

def bar(x):
    if x < 0:
        return
    return math.sqrt(x)
```

- 문자열 모듈을 사용하는 것 대신에 문자열 메소드를 사용하자.
  
  문자열 메소드는 항상 더 빠르고 유니코드 문자열과 같은 API를 공유한다.
  2.0 버전 Python과의 하위 호환성이 필요한 경우, 이 규칙을 오버라이딩 하자.

- 접두어나 접미어를 확인할 때는, 문자열 슬라이싱 대신에
  `''.startswith()`와 `''.endswith()`를 사용하자.
  
  `startswith()` 와 `endswith()`는 더 간결하고 오류를 적게 발생시킨다.

```python
# 옳은 예:
if foo.startswith('bar'):
```

```python
# 틀린 예:
if foo[:3] == 'bar':
```

- 오브젝트 타입 비교는 직접 비교하기 보단,
- 항상 `isinstance()`를 사용해야한다.

```python
# 옳은 예:
if isinstance(obj, int):
```

```python
# 틀린 예:
if type(obj) is type(1):
```

오브젝트가 문자열인지를 확인할 때는, 유니코드 문자열일 수도 있다는 점을 명심하자!
Python 2에서는 str과 유니코드가 공통적인 기반 클래스, basestring을 가진다.
그래서 다음과 같이 할 수도 있다.

```python
if isinstance(obj, basestring):
```

Python 3 에서는 더 이상 `unicode`와 `basestring`이 존재하지 않는 점을 알아두자.
(오직 `str`만이 있다.) 그리고 바이트 오브젝트는 더 이상 문자열 종류가 아니다.
(대신 정수형의 시퀀스(sequence of integers)가 되었다.)

- 시퀀스에 대해서는 (문자열, 리스트, 튜플), 빈 시퀀스가 false 라는 사실을 이용하자.

```python
# 옳은 예:
if not seq:
if seq:
```

```python
# 틀린 예:
if len(seq):
if not len(seq):
```

- 문자열 리터럴을 중요한 후행 공백에 의존하여 작성하지 말자.
  그러한 후행 공백은 보기에 구분이 어렵고,
  몇 에디터(또는 더 최근의, reindent,py)에서는 트림된다.

- 불린 값을 `==`를 사용하여 True 또는 False 와 비교하지 말자.

```python
# 옳은 예:
if greeting:
```

```python
# 틀린 예:
if greeting == True:
```

더 안 좋게는 다음과 같이 할 수 있다.

```python
# 틀린 예:
if greeting is True:
```

- `return`/`break`/`continue`의 흐름 제어문이 finally 슈트 밖으로 점프될 수 있는
  `try...finally`의 finally 슈트에서의 흐름 제어문들의 사용은 권장하지 않는다.
  왜냐하면 이러한 명령문들은 finally 슈트를 통하여 전파된
  어떤 활성화 된 예외도 암시적으로 취소할 수 있기 때문이다.

```python
# 틀린 예:
def foo():
    try:
        1 / 0
    finally:
        return 42
```

## 함수 어노테이션

[PEP 484](https://www.python.org/dev/peps/pep-0484)
의 승인으로 함수 어노테이션에 대한 스타일 규칙들이 바뀌고 있다.

- 하위 호환성을 만족시키기 위해, Python3 의 함수 어노테이션은
  가급적 [PEP 484](https://www.python.org/dev/peps/pep-0484) 의 문법을 사용하여야 한다.
  (앞선 내용에서 어노테이션을 위한 포매팅 권장사항이 몇 가지 있다.)

- 이 PEP에서 이전에 권장되었던 어노테이션 스타일에 대한
  실험적인 시도들은 더 이상 권장되지 않는다.

- 단, 이제는 표준라이브러리(stdlib)를 제외하고, [PEP 484](https://www.python.org/dev/peps/pep-0484)
  규칙에 따른 실험적인 시도를 권장한다. 예를 들면, PEP 484 스타일 유형 어노테이션을 사용하는 대규모 서드 파티 라이브러리나 어플리케이션을
  마크 업 하는 것, 이러한 주석을 추가하는 것이 얼마나 쉬운 지 검토하는 것,
  그리고 어노테이션의 존재가 코드 이해도를 높이는지 관찰하는 것이 있다.

- Python 표준 라이브러리는 그러한 어노테이션을 적용하는데 있어
  보수적이어야 하지만, 이러한 어노테이션의 사용은 새로운 코드나 대규모
  리팩토링에 대해선 허용되어야 한다.

- 함수 어노테이션의 사용에 차이를 두기를 원하는 코드에서, 다음의 형태의 주석을 넣는 것이 권장된다.

```python
# type: ignore
```

  파일 상단에 위치한 이것은 타입 체커에게 모든 어노테이션을 무시해야함을 알려준다.
  (타입 체커들의 불만을 비활성화시키는 더 자세한 방법은 [PEP 484](https://www.python.org/dev/peps/pep-0484)
  에서 찾을 수 있다.)

- 린터들과 마찬가지로 타입체커는 선택사항이며, 별도의 도구이다.
  기본적으로 Python 인터프리터는 타입 체킹으로 어떠한 메시지도
  발행하지 않아야 하며, 어노테이션을 기반으로 행위(behavior)를 변경하지 않아야 한다.

- 타입 체커를 사용하지 않으려는 사용자는 자유롭게 무시해도 된다.
  하지만, 외부 라이브러리 패키지의 사용자는 해당 패키지의 타입 체커를 실행하길 원할 수도 있다.
  이를 목적으로, PEP 484 는 스텁(stub) 파일들의 사용을 권장한다.
  이 스텁 파일은 .pyi 파일로, 이에 상응하는
  .py 파일들의 설정(preferences)의 타입체커에 의해 읽혀지는 파일이다.
  스텁 파일은 라이브러리로 배포되거나, 별도로 (라이브러리 작성자의 권한하에)
  typeshed 저장소[^2]를 통해 배포될 수 있다.

- 하위 호환이 필요한 코드의 경우, 타입 어노테이션은 주석의 형태로 추가될 수 있다.
[PEP 484](https://www.python.org/dev/peps/pep-0484/)[^3]의 관련 섹션을 참조.

## 변수 어노테이션

[PEP528](https://www.python.org/dev/peps/pep-0008/#variable-annotations)
은 변수 어노테이션들을 소개한다. 변수 어노테이션에 대한 권장사항들은 위에서 묘사된 함수 주석과 유사하다.

- 모듈 레벨의 변수, 클래스와 인스턴스 변수, 그리고 로컬 변수 어노테이션은
  콜론 다음에 한 칸 공백이 있어야한다.

- 콜론 앞에는 공백이 없어야 한다.

- 만약 할당식이 우항을 갖고 있다면,
  등호 기호는 앞뒤로 정확히 한 칸 공백이 있어야 한다.

```python
# 옳은 예:
code: int

class Point:
    coords: Tuple[int, int]
    label: str = '<unknown>'
```

```python
# 잘못된 예:

code:int  # No space after colon
code : int  # Space before colon

class Test:
    result: int=0  # No spaces around equality sign
```

- [PEP528](https://www.python.org/dev/peps/pep-0008/#variable-annotations)
  이 Python 3.6 에서 허용된다고 해도, 변수 어노테이션 구문은 모든 버전의 스텁(stub) 파일들에 적합한 구문이다.
  ([PEP484](https://www.python.org/dev/peps/pep-0484/) 를 참고)

[^1]: [참조 횟수 계산 방식](https://en.wikipedia.org/wiki/Reference_counting)
[^2]: typeshed 저장소 <https://github.com/python/typeshed>
[^3]: Python 2.7 및 양립 가능 코드(straddling code)를 위한 문법 제안
      <https://www.python.org/dev/peps/pep-0484/#suggested-syntax-for-python-2-7-and-straddling-code>
