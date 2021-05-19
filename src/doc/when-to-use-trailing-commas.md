# 후행 쉼표를 사용할 경우

일반적으로 후행 쉼표[^1]는 선택사항이나,
한 개의 요소만을 갖고 있는 튜플을 만들 때는 필수사항이다.
(그리고 Python 2 의 print 문에서는 의미를 갖는다(semantic)).
다음과 같은 상황에서 명확히 하기 위해 (논리적으로는 중복이지만) 괄호로 둘러싸는 것을 권장한다.

```python
# 옳은 예

FILES = ('setup.cfg',)
```

```python
# 잘못된 예

FILES = 'setup.cfg',
```

후행 쉼표가 중복인 경우, 버전 관리 시스템을 사용 시
값, 아규먼트, 가져오기(import)한 아이템들의 리스트가
시간이 지남에 따라 확장될 가능성이 있을 때 유용하다.
각 값을 (또는 위에 언급된 것들 등) 이 각 줄에 배치하고,
항상 후행 쉼표를 추가한 다음 줄에 괄호로 닫는 패턴을 사용하자.
그러나 닫는 구분 문자와 후행 쉼표가 같은 줄에 있는 것은 합리적이지 못하다.
(단, 위의 단일형 튜플들의 경우는 제외)

```python
# 옳은 예

FILES = [
    'setup.cfg',
    'tox.ini',
    ]
initialize(FILES,
           error=True,
           )
```

```python
# 잘못된 예

FILES = ['setup.cfg', 'tox.ini',]
initialize(FILES, error=True,)
```

[^1]: 마지막(Trailing) 쉼표
