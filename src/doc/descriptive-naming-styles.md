설명: 작명 스타일
--------------------------

다양한 작명 스타일이 존재한다. 작명 스타일의 용도와는 별개로 어떤 작명 스타일이 사용되는지 인식 할 수 있다.

일반적으로 다음과 같은 작명 스타일은 구분된다:

- ``b`` (단일 소문자)
- ``B`` (단일 대문자)
- ``lowercase`` (소문자)
- ``lower_case_with_underscores`` (밑줄_친_소문자)
- ``UPPERCASE`` (대문자)
- ``UPPER_CASE_WITH_UNDERSCORES`` (밑줄_친_대문자)
- ``CapitalizedWords`` (단어 첫 철자 대문자) (또는 CapWords, 또는 CamelCase -- 글자의 울퉁불퉁한 모양 때문에 그렇게 이름 붙여진 [4]_).  이는 때때로 StudlyCaps로 불리운다.

참고 : CapWords 스타일로 약어를 사용할 때, 약어의 모든 문자를 대문자로 사용하자.
따라서 HTTPServerError가 HttpServerError보다 좋다.

- ``mixedCase`` (섞인 경우) (CapitalizedWords와는 단어 첫 철자가 소문자로 다르다!)
- ``Capitalized_Words_With_Underscores`` (못생겼다!)

짧은 고유 접두사를 사용하여 관련 이름을 함께 그룹화하는 스타일도 있다.  
파이썬에서는 많이 쓰이진 않지만, 글의 완성도를 위해 언급한다.  
예를 들어, ``os.stat()`` 함수는 전통적으로 ``st_mode``, ``st_size``, ``st_mtime`` 등 과 같은 이름을 가진 튜플을 반환한다.  
(POSIX 시스템 호출 구조의 필드와의 관련성을 강조하여 이에 익숙한 프로그래머들을 돕는다.)  

X11 라이브러리는 모든 공용 기능에 선행 X를 사용한다.  
파이썬에서는, 속성과 메서드 이름은 객체에 접두사를 붙이고, 함수의 이름은 모듈 이름으로 접두사를 붙이기 때문에  
이 스타일은 일반적으로 불필요하다고 간주된다. 

다음과 같이 선행 또는 후행 밑줄을 사용하는 특수 형식이 알려져있다(일반적으로 모든 경우의 규칙과 결합 될 수 있다).:  

- ``_single_leading_underscore``: 약한 "내부 사용" 지표.  
  예시로, ``from M import *`` 는 이름이 밑줄로 시작하는 개체는 가져오지 않는다.

- ``single_trailing_underscore_``: 파이썬 키워드와의 충돌을 피하기 위해 관례로 사용한다. 예시로,

      tkinter.Toplevel(master, class_='ClassName')

- ``__double_leading_underscore``: 클래스 속성의 이름을 지정할 때, 네임 맹글링을 호출한다.  
  (class FooBar 내부의 ``__boo`` 는 ``_FooBar__boo`` 가 된다; 아래 내용 참조)

- ``__double_leading_and_trailing_underscore__``: 사용자 제어 네임 공간에 위치한 "매직" 개체 또는 속성.  
  예시로, ``__init__``, ``__import__`` or ``__file__``. 이런 이름은 문서화 된 이름만 사용하자.
