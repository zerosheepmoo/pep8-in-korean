# 후행 쉼표를 사용할 경우

일반적으로 후행 쉼표는 선택적으로 사용하나, 한 요소의 튜플을 만들 때는
필수로 사용해야 한다. (그리고 Python2에서는 이것이 Print문의 의미를 가지고 있다)
명확히 하기 위해 (논리적으론 필요없는)괄호를 뒤에 써주는 것을 권장한다.

```python
# 올바른 예

FILES = ('setup.cfg',)
```

```python
# 잘못된 예

FILES = 'setup.cfg',
```

후행 쉼표가 남겨진 경우, 버전 관리 시스템이 사용 될 때 값, 인자 또는 가져온 항목의 목록이
시간이 지남에 따라 확장될 것으로 예상될 때 유용하다.
패턴은 각 값들을 줄에 배치하고 항상 후행 쉼표를 추가한 다음 그 다음 줄에 괄호로 닫는 것이다.
그러나 닫는 구분 기호와 후행 쉼표가 같은 줄에 있는 것은 의미가 없다.(위의 단일형 튜플의 경우는 제외)

```python
# 올바른 예

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
