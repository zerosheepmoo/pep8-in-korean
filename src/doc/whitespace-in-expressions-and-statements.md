# 표현과 문장에서의 공백

## 짜증나는 녀석

다음 상황에서는 불필요한 공백을 피하기

- 괄호들 바로(Immediately) 안쪽
  
```python
# 올바른 예:
spam(ham[1], {eggs: 2})
```

```python
# 잘못된 예:
spam( ham[ 1 ], { eggs: 2 } )
```

- 후행 쉼표[^1]와 닫힌 소괄호 사이

```python
# 올바른 예:
foo = (0,)
```

```python
# 잘못된 예:
bar = (0, )
```

- 콤마, 세미콜론, 그리고 콜론 바로 전

```python
# 올바른 예:
if x == 4: print x, y; x, y = y, x
```

```python
# 잘못된 예:
if x == 4 : print x , y ; x , y = y , x
```

- 하지만, 슬라이스에서 콜론은 이항 연산자처럼 작동하며 양쪽에 동일한 양의 공백이 있어야 한다. (가장 낮은 우선순위의 연산자처럼 다루기)
확장된 슬라이스에선 두 개의 콜론 모두 동일한 양의 공백이 적용돼야 한다. 단, 슬라이스 파라미터가 생략될 때에는 공백은 생략한다.

```python
# 올바른 예:
ham[1:9], ham[1:9:3], ham[:9:3], ham[1::3], ham[1:9:]
ham[lower:upper], ham[lower:upper:], ham[lower::step]
ham[lower+offset : upper+offset]
ham[: upper_fn(x) : step_fn(x)], ham[:: step_fn(x)]
ham[lower + offset : upper + offset]
```

```python
# 잘못된 예:
ham[lower + offset:upper + offset]
ham[1: 9], ham[1 :9], ham[1:9 :3]
ham[lower : : upper]
ham[ : upper]
```

- 함수 호출의 아규먼트 나열로 시작하는 열린 소괄호 바로 전

```python
# 올바른 예:
spam(1)
```

```python
# 잘못된 예:
spam (1)
```

- 인덱싱 또는 슬라이싱으로 시작하는 열린 괄호 바로 전

```python
# 올바른 예:
dct['key'] = lst[index]
```

```python
# 잘못된 예:
dct ['key'] = lst [index]
```

- 두개 이상의 공백으로 할당 (또는 다른) 연산자를 둘러싸 정렬하는 경우

```python
# 올바른 예:
x = 1
y = 2
long_variable = 3
```

```python
# 잘못된 예:
x             = 1
y             = 2
long_variable = 3
```

## 다른 권장사항

- 어디든지 트레일링 공백을 피하자. 주로 눈에 띄지도 않고 혼란스럽기 때문인데,
  예를 들면, 백슬래쉬 뒤에 공백과 개행이 오는 것은 줄 연속 마커로 간주되지 않는다.
  몇 에디터는 이를 저장하지(preserve) 않으며,
  (CPython 과 같은) 많은 프로젝트에는 이를 거부하는 사전커밋 훅(pre-commit hook)이 있다.

- 항상 이항 연사자들 주위에는 항상 공백 한 칸으로 둘러싸야 한다.
  예) 할당 (`=`), 증강 할당(`+=`, `-=`, 등),
  비교(`==`, `<`, `>`, `!=`, `<>`, `<=`, `>=`, `in`, `is not`),
  불린(`and`, `or`, `not`)

- 만약 다른 우선 순위의 연산자들이 사용될 경우, 가장 낮은 우선 순위(들)의 연산자 주위에 공백을 더하는 것을 고려하자.
  각자에 판단에 맡긴다. 하지만 하나보다 많은 공백을 사용하지 말자. 그리고 이항 연산자의 양쪽에는 항상 같은 양의 공백을 두어야한다.

```python
# 올바른 예:
i = i + 1
submitted += 1
x = x*2 - 1
hypot2 = x*x + y*y
c = (a+b) * (a-b)
```

```python
# 잘못된 예:
i=i+1
submitted +=1
x = x * 2 - 1
hypot2 = x * x + y * y
c = (a + b) * (a - b)
```

- 함수 어노테이션은 콜론의 일반적인 규칙을 따르며, `->` 화살표로 표현할 경우 항상 앞 뒤로 공백을 넣어야 한다. ([함수 어노테이션](./programming-recommendations.md#function-annotations)
  을 참고하기)

```python
# 올바른 예:
def munge(input: AnyStr): ...
def munge() -> PosInt: ...
```

```python
# 잘못된 예:
def munge(input:AnyStr): ...
def munge()->PosInt: ...
```

- `=` 가 키워드 아규먼트를 가리키거나, *어노테이트 되지 않은* 함수의 파라미터의 디폴트 값을 가리키는 경우, 그 주위에 공백을 사용하지 말기.

```python
# 올바른 예:
def complex(real, imag=0.0):
    return magic(r=real, i=imag)
```

```python
# 잘못된 예:
def complex(real, imag = 0.0):
    return magic(r = real, i = imag)
```

- 하지만 아규먼트 어노테이션이 디폴트 값과 결합할 때, `=` 주위로는 공백을 사용하기.

```python
# 올바른 예:
def munge(sep: AnyStr = None): ...
def munge(input: AnyStr, sep: AnyStr = None, limit=1000): ...
```

```python
# 잘못된 예:
def munge(input: AnyStr=None): ...
def munge(input: AnyStr, limit = 1000): ...
```

- 복합문(같은 줄에 여러 문장이 있는 경우)은 주로 권장하지 않는다.

```python
# 올바른 예:
if foo == 'blah':
    do_blah_thing()
do_one()
do_two()
do_three()
```

- 즉, 다음은 하지말기
  
```python
# 잘못된 예:
if foo == 'blah': do_blah_thing()
do_one(); do_two(); do_three()
```

- 때로는 같은 줄에 작은 본문으로 if / for / while을 넣는 것이 좋지만,
  다중 절 문(multi-clause statements)에 대해서는 하지 말기. 또한 긴줄을 폴딩(folding)하지 말기.

  다음은 하지말기.

```python
# 잘못된 예:
if foo == 'blah': do_blah_thing()
for x in lst: total += x
while t < 10: t = delay()
```

- 절대로 다음은 하지말기.

```python
# 잘못된 예:
if foo == 'blah': do_blah_thing()
else: do_non_blah_thing()

try: something()
finally: cleanup()

do_one(); do_two(); do_three(long, argument,
                             list, like, this)

if foo == 'blah': one(); two(); three()
```

[^1]: 마지막(Trailing) 쉼표
