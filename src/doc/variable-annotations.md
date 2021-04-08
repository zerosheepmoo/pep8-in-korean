# 변수 주석

[PEP528](https://www.python.org/dev/peps/pep-0008/#variable-annotations)
은 변수 주석들을 소개한다. 변수 주석에 대한 권장사항들은 위에서 묘사된 함수 주석과 유사하다.

- 모듈 레벨의 변수, 클래스와 인스턴스 변수, 그리고 로컬 변수 어노테이션은
  콜론 다음에 한 칸 공백이 있어야한다.

- 콜론 앞에는 공백이 없어야 한다.

- 만약 할당식이 우항을 갖고 있다면,
  등호 기호는 앞뒤로 정확히 한 칸 공백이 있어야 한다.

```python
# 올바른 예:
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
