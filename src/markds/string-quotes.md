# 문자열 쿼트

Python 에서는 작은따옴표 문자열(single quoted-strings)과 큰따옴표 문자열(double quoted-strings)이 같다.
이 PEP 에선 둘 중 어느 것을 써야하는지에 대한 권장사항이 없다. 둘 중 규칙을 정한 뒤 지키자.
그러나 만약 문자열이 작은, 또는 큰따옴표 문자자체를 포함한다면, 백슬래쉬를 쓰는 것을 피하기 위해 서로 다른 따옴표를 쓰자.
이것이 가독성을 향상시킨다.

삼중따옴표 문자열(triple quoted-strings)은 [PEP257](https://www.python.org/dev/peps/pep-0257/)의
독스트링 컨벤션을 따라 일관성있게 항상 큰따옴표를 사용하자.
