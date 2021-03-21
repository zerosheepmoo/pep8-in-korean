# 문자열 쿼트

Python 에서는 단일 쿼트 문자열(single quoted-strings)과 이중 쿼트 문자열(double quoted-strings)이 같다. 이 PEP 에선 둘 중 어느 것을 써야하는지에 대한 권장사항이 없다. 둘 중 규칙을 정한 뒤 지키자. 그러나 만약 문자열이 단일, 또는 이중 쿼트 문자자체를 포함한다면, 백슬래쉬를 쓰는 것을 피하기 위해 서로 다른 쿼트를 쓰자. 이것이 가독성을 향상시킨다.

삼중 쿼트 문자열(triple quoted-strings)은 [PEP257](https://www.python.org/dev/peps/pep-0257/)의 독스트링 컨벤션을 따라 일관성있게 항상 이중 쿼트로 사용하자.