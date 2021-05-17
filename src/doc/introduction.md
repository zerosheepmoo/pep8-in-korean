# 소개

이 문서는 메인 Python 배포판의 표준 라이브러리를 구성하는 Python 코드에 대한 코딩 컨벤션을 제공한다.
Python 내의 C 구현에서는 C 코드에 대한 스타일 가이드라인을 설명하는 PEP 정보 지침서를 참조하자.[^1]

이 문서와 [PEP 257](https://www.python.org/dev/peps/pep-0257/)(독스트링 컨벤션)은 Guido의
Python 스타일 가이드 에세이 원본과 Barry의 스타일 가이드의 일부가 채택된 것이다.[^2]

언어 자체가 변화함에 따라, 과거의 컨벤션이 더 이상 사용되지 않거나 추가적인 컨벤션이 생기면서, 이 스타일 가이드는 점점 발전하고 있다.

많은 프로젝트에는 그 프로젝트만의 코딩 스타일 가이드라인이 있다.
충돌이 발생할 경우, 해당 프로젝트의 코딩 스타일을 우선적으로 적용하자.

[^1]: [PEP7](https://www.python.org/dev/peps/pep-0007/), C언어 스타일 가이드, van Rossum  
[^2]: Barry의 GNU Mailman을 위한 Python 스타일 가이드 <http://barry.warsaw.us/software/STYLEGUIDE.txt>  
