(self.webpackChunkpep8_in_korean=self.webpackChunkpep8_in_korean||[]).push([[232],{9556:(e,o,a)=>{"use strict";a.r(o),a.d(o,{default:()=>D});var n=a(6252);const s=(0,n.uE)('<h1 id="작명-컨벤션"><a class="header-anchor" href="#작명-컨벤션">#</a> 작명 컨벤션</h1><p>Python 라이브러리의 작명 컨벤션은 좀 망쳐져 있다. 그래서 앞으로도 절대 일관성 있게 유지할 수가 없다. 그럼에도 불구하고 권장하는 작명 기준을 소개한다. 새로운 모듈들과 패키지들(서드 파티 프레임워크 등을 포함하여)은 이 기준대로 작성해야 한다. 하지만 이미 존재하는 라이브러리에서 다른 스타일을 따르고 있다면 내부의 일관성을 우선하자.(<em>역: 그 라이브러리의 스타일을 우선하자</em>)</p><h2 id="오버라이딩-원리"><a class="header-anchor" href="#오버라이딩-원리">#</a> 오버라이딩 원리</h2><p>API의 공개 부분으로 사용자에게 표시되는 이름은 구현보다는 사용법을 반영하는 컨벤션을 따르자.</p><h2 id="설명-작명-스타일"><a class="header-anchor" href="#설명-작명-스타일">#</a> 설명: 작명 스타일</h2><p>다양한 작명 스타일이 존재한다. 이는 작명 스타일의 용도와는 별개로 어떤 작명 스타일이 사용되는지 깨닫게 도와준다.</p><p>일반적으로 다음과 같이 분류한다.</p><ul><li><code>b</code> (단일 소문자)</li><li><code>B</code> (단일 대문자)</li><li><code>lowercase</code> (<em>역: 소문자</em>)</li><li><code>lower_case_with_underscores</code> (<em>역: 밑줄로 구분된 소문자</em>)</li><li><code>UPPERCASE</code> (<em>역: 대문자</em>)</li><li><code>UPPER_CASE_WITH_UNDERSCORES</code> (<em>역: 밑줄로 구분된 대문자</em>)</li><li><code>CapitalizedWords</code> (또는 CapWords<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>, CamelCase 라고 불리운다. 글자의 울퉁불퉁한 모양 때문에 그렇게 이름이 붙여졌다.<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>) 이는 StudlyCaps로 라고도 불리운다.</li></ul><div class="custom-container tip"><p class="custom-container-title">참고</p><p>CapWords 스타일로 약어를 사용할 때, 약어의 모든 문자를 대문자로 사용하자. 예를 들면, <code>HTTPServerError</code>가 <code>HttpServerError</code>보다 좋다.</p></div><ul><li><code>mixedCase</code> (단어 첫 글자가 소문자로 CapitalizedWords와는 다르다!)</li><li><code>Capitalized_Words_With_Underscores</code> (못생겼다!)</li></ul><p>짧은 고유 접두어를 사용하여 관련 이름을 함께 그룹화하는 스타일도 있다.<br> 파이썬에서는 많이 쓰이진 않지만, 글의 완성도를 위해 언급한다. 예를 들어, <code>os.stat()</code> 함수는 전통적으로 <code>st_mode</code>, <code>st_size</code>, <code>st_mtime</code> 등과 같은 이름을 가진 튜플을 반환한다.<br> (POSIX 시스템 호출 구조의 필드와의 관련성을 강조하여 이에 익숙한 프로그래머들을 돕는다.)</p><p>X11 라이브러리는 모든 퍼블릭 함수에 첫글자 X를 사용한다. Python에서 이 스타일은 일반적으로 불필요하다고 간주된다. 왜냐하면 Python에서는 어트리뷰트명과 메소드명은 오브젝트명으로 접두어를 붙이고, 함수명은 모듈명으로 접두어를 붙이기 때문이다.</p><p>덧붙여, 다음과 같이 선행 또는 후행 밑줄을 사용하는 특수 형식이 알려져있다. (일반적으로 모든 경우의 컨벤션과 결합 될 수 있다.)</p><ul><li><p><code>_single_leading_underscore</code>: 약한 &quot;내부 사용&quot; 지표(indicator). 예시로, <code>from M import *</code> 는 이름이 밑줄로 시작하는 개체는 가져오지 않는다.</p></li><li><p><code>single_trailing_underscore_</code>: 파이썬 키워드와의 충돌을 피하기 위해 관례로 사용한다. 예시로,</p></li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>tkinter<span class="token punctuation">.</span>Toplevel<span class="token punctuation">(</span>master<span class="token punctuation">,</span> class_<span class="token operator">=</span><span class="token string">&#39;ClassName&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p><code>__double_leading_underscore</code>: 클래스 어트리뷰트의 이름을 지정할 때, 네임 맹글링을 호출한다.<br> (class FooBar 내부의 <code>__boo</code> 는 <code>_FooBar__boo</code> 가 된다. 아래 섹션의 내용 참조)</p></li><li><p><code>__double_leading_and_trailing_underscore__</code>: 사용자 제어 네임스페이스에 있는 &quot;매직&quot; 객체(magic object) 또는 어트리뷰트(magic attribute). 예시로, <code>__init__</code>, <code>__import__</code> or <code>__file__</code>, 이런 스타일의 이름은 문서에 명시된 것만 사용하자.</p></li></ul><h2 id="규정-작명-컨벤션"><a class="header-anchor" href="#규정-작명-컨벤션">#</a> 규정: 작명 컨벤션</h2><h3 id="피해야할-이름"><a class="header-anchor" href="#피해야할-이름">#</a> 피해야할 이름</h3><p><code>l</code> (소문자 엘), <code>O</code> (대문자 오), <code>I</code> (대문자 아이)는 단독으로 변수명으로 절대 사용하지 마라.</p><p>몇몇 폰트에서는 이 글자들이 숫자 1, 0과 구분하기 어렵다. <code>l</code>을 쓰고 싶을 땐 <code>L</code>을 쓰자.</p><h3 id="ascii-호환성"><a class="header-anchor" href="#ascii-호환성">#</a> ASCII 호환성</h3>',21),c=(0,n.Uk)("표준 라이브러리에서 사용되는 식별자들은 반드시 ASCII 호환성을 따라야한다. "),l={href:"https://www.python.org/dev/peps/pep-3131",target:"_blank",rel:"noopener noreferrer"},t=(0,n.Uk)("PEP 3131"),p=(0,n.Uk)("의 "),r={href:"https://www.python.org/dev/peps/pep-3131/#policy-specification",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Uk)("정책 섹션"),d=(0,n.Uk)(" 에 설명된 것처럼 말이다."),h=(0,n.uE)('<h3 id="패키지명과-모듈명"><a class="header-anchor" href="#패키지명과-모듈명">#</a> 패키지명과 모듈명</h3><p>모듈명은 모두 소문자를 사용하여 짧게 지어야한다. 밑줄(Underscores)은 가독성 향상을 위해 사용될 수 있다.</p><p>패키지명은 또한 모두 소문자를 사용하여 짧게 지어야한다. 단, 밑줄은 권장되지 않는다.</p><p>C 또는 C++ 로 쓰여진 확장모듈들이 더 높은 레벨의 인터페이스를 제공하는 Python 모듈(예를 들면, 더 객체 지향적인)을 동반할 경우, C/C++ 모듈들은 첫글자 밑줄 이름으로 짓는다. (예를 들면 <code>_socket</code>)</p><h3 id="클래스명"><a class="header-anchor" href="#클래스명">#</a> 클래스명</h3><p>클래스명들은 일반적으로 CapWords 컨벤션을 따른다.</p><p>인터페이스가 문서화되어 있고, 주로 Callable<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup>로 사용되는 경우에도, 함수의 작명 컨벤션을 따를 수 있다.</p><p>내장 된 클래스들과 컨벤션이 다른 것에 주목하자. 대부분의 내장 된 클래스명은 단일 단어(또는 두 개의 단어가 결합된 혼성어)다. CapWords 컨벤션은 예외(exception)명이나 내장 상수에만 사용된다.</p><h3 id="타입-변수명"><a class="header-anchor" href="#타입-변수명">#</a> 타입 변수명</h3>',9),u={href:"https://www.python.org/dev/peps/pep-0484/",target:"_blank",rel:"noopener noreferrer"},m=(0,n.Uk)("PEP484"),f=(0,n.uE)(' 에서 소개된 타입 변수의 이름은 CapWords 를 사용하여 짧게 짓는다. 예를들어, <code>T</code>, <code>AnyStr</code>, <code>Num</code>과 같은 경우가 해당된다.<br><code>_co</code> 나 <code>_contra</code> 접두어를 공변(covariant)과 반변(contravariant)<sup class="footnote-ref"><a href="#fn4" id="fnref4">[4]</a></sup> 행위를 선언하기 위해 사용할 수 있다. 다음처럼 말이다.',14),_=(0,n.uE)('<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> typing <span class="token keyword">import</span> TypeVar\n\nVT_co <span class="token operator">=</span> TypeVar<span class="token punctuation">(</span><span class="token string">&#39;VT_co&#39;</span><span class="token punctuation">,</span> covariant<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>\nKT_contra <span class="token operator">=</span> TypeVar<span class="token punctuation">(</span><span class="token string">&#39;KT_contra&#39;</span><span class="token punctuation">,</span> contravariant<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="예외명"><a class="header-anchor" href="#예외명">#</a> 예외명</h3><p>예외는 클래스기 때문에, <a href="#%ED%81%B4%EB%9E%98%EC%8A%A4-%EB%AA%85">클래스 작명 컨벤션</a>을 적용한다. 하지만 만약 예외가 실제로 오류일 경우(<em>역: 오류와 같은 개념일 경우</em>), <code>&quot;Error&quot;</code> 라는 접두어를 예외명 앞에다 붙여야한다.</p><h3 id="전역-변수명"><a class="header-anchor" href="#전역-변수명">#</a> 전역 변수명</h3><p>(이 변수들이 하나의 모듈 안에서만 있다고 가정하자)</p><p>이 경우 작명 컨벤션은 함수에 대한 컨벤션과 같다.</p><p><code>from M import *</code> 를 사용하기 위해 설계된 모듈들은 <code>__all__</code> 메커니즘을 사용해야 한다. 그럼으로써 전역변수 내보내기를 하는 것을 막아야 한다.</p><p>또는 밑줄을 접두어로 넣는 오래된 컨벤션을 사용하자. (이 전역 변수들이 &quot;module non-public&quot;<sup class="footnote-ref"><a href="#fn5" id="fnref5">[5]</a></sup>임을 나타내고 싶을 수 있을 때)</p><h3 id="함수와-변수명"><a class="header-anchor" href="#함수와-변수명">#</a> 함수와 변수명</h3><p>함수명은 소문자여야하며 가독성 향상을 위해 밑줄로 단어를 구분해야한다.</p><p>변수명도 함수명과 같은 컨벤션을 따른다.</p><p>mixedCase 는 이미 스타일이 존재하는 컨텍스트(예를 들면, <code>threading.py</code>)에만 허용된다. 이는 하위 호환성을 지키기위한 것이다.</p><h3 id="함수와-메소드의-아규먼트들"><a class="header-anchor" href="#함수와-메소드의-아규먼트들">#</a> 함수와 메소드의 아규먼트들</h3><p>항상 <code>self</code> 를 인스턴스 메소드의 첫번째 아규먼트로 사용한다.</p><p>항상 <code>cls</code> 를 클래스 메소드의 첫번째 아규먼트로 사용한다.</p><p>만약 함수의 아규먼트명이 이미 있는 키워드와 충돌이 있을 경우, 일반적으로 후행 밑줄을 추가하는 것이 약어 또는 철자 손상을 사용하는 것보다 낫다. 따라서 <code>class_</code>가 <code>clss</code> 보다 낫다. (혹은 동의어등을 사용하여 이러한 충돌을 피하는 것이 더 나을 수 있다.)</p><h3 id="메소드명과-인스턴스-변수"><a class="header-anchor" href="#메소드명과-인스턴스-변수">#</a> 메소드명과 인스턴스 변수</h3><p>함수 작명 규칙처럼, 소문자를 사용하고 가독성 향상을 위해 밑줄로 단어를 구분하자.</p><p>첫글자만 밑줄인 단어는 non-public 인 메소드와 인스턴스 변수들을 위해서만 쓰여야 한다.</p><p>하위 클래스들과의 이름 충돌을 피하기위해, 두 개의 밑줄로 시작하는 단어를 사용하여 Python의 이름 맹글링<sup class="footnote-ref"><a href="#fn6" id="fnref6">[6]</a></sup> 규칙을 불러오자(invoke).</p><p>Python 은 다음과 같이 이름들을 클래스명과 함께 맹글한다. 만약 클래스 <code>Foo</code> 가 <code>__a</code> 어트리뷰트를 갖고 있을 경우, <code>Foo.__a</code>로 접근할 수 없다. (필요한 사용자는 <code>Foo._Foo__a</code>를 호출하여 여전히 접근할 수는 있다.) 일반적으로 두 개의 밑줄만으로 시작하는 이름은 하위 클래스로 설계된 클래스 내의 어트리뷰트와 이름 충돌을 피하는 용도로 사용된다.</p><div class="custom-container tip"><p class="custom-container-title">안내</p><p><code>__names</code> 를 사용하는 것에 대해 논쟁이 있다. (아래를 참고하기).</p></div><h3 id="상수"><a class="header-anchor" href="#상수">#</a> 상수</h3><p>상수는 주로 모듈 레벨에서 정의된다. 그리고 대문자로만 쓰여지며 밑줄로 단어를 구분한다. 예를 들면, <code>MAX_OVERFLOW</code>와 <code>TOTAL</code>.</p><h3 id="상속을-고려한-설계"><a class="header-anchor" href="#상속을-고려한-설계">#</a> 상속을 고려한 설계</h3><p>항상 클래스 메소드와 인스턴스 변수(통칭: <strong>&quot;어트리뷰트&quot;</strong>)가 퍼블릭인지 아닌지 결정하라. 만약 결정되지 않았다면, 퍼블릭이 아닌 컨벤션을 골라라. 나중에 퍼블릭으로 바꾸는 것이 퍼블릭을 아닌 것으로 바꾸는 거보다 더 쉽다.</p><p>퍼블릭 어트리뷰트는 하위 호환성을 유지하려는 노력과 함께, 당신이 만든 클래스와 관련없는 클라이언트가 사용할 예정인 어트리뷰트다. 퍼블릭이 아닌 어트리뷰트는 외부에서 사용되게끔 의도하지 않는 어트리뷰트다. 그래서 퍼블릭이 아닌 어트리뷰트가 앞으로 바뀌거나 제거되지 않을 것이라는 보장을 하지 말아야된다.</p><p>우리는 &quot;프라이빗(private)&quot;이라는 용어를 사용하지 않는다. 왜냐하면 어떠한 어트리뷰트도 실제 Python 에서는 프라이빗일 수 없기 때문이다. (일반적으로 불필요한 양의 추가 작업 없이는 실제 프라이빗으로 만들 수 없다.)</p><p>어트리뷰트들의 다른 종류로는 &quot;하위클래스 API&quot;의 일부인 어트리뷰트가 있다. (다른 언어에서 자주 &quot;protected&quot;로 표현되는 어트리뷰트) 몇 클래스는 클래스의 행위의 측면에서 확장 또는 수정(modify)하기 위해 상속 받도록 설계되었다. 그러한 클래스를 설계할 때는, 어떤 어트리뷰트를 퍼블릭으로 하고, 어떤 부분을 하위클래스 API로 할 것이며, 그리고 어떤 어트리뷰트를 진짜로 당신의 기반 클래스에서만 사용할 것인지 명시적인 결정을 하는 것에 주의해야한다.</p><p>이를 명심하며, 다음의 Python스러운 가이드라인을 살펴보자.</p><ul><li><p>퍼블릭 어트리뷰트는 첫 글자가 밑줄이면 안 된다.</p></li><li><p>만약 퍼블릭 어트리뷰트명이 이미 있던 키워드와 충돌하면, 하나의 후행 밑줄을 어트리뷰트명에 추가하자. 이는 약어나 철자 손상보다 권장된다. (하지만 예외도 있다. <code>&#39;cls&#39;</code>는 클래스를 나타내는 변수 또는 아규먼트로, 특히 클래스 메소드의 첫번째 아규먼트로도 바람직한 철자다.)</p></li></ul><div class="custom-container tip"><p class="custom-container-title">안내 1</p><p>위에 안내 된 클래스 메소드에서의 아규먼트 권장사항을 참고</p></div><ul><li>간단한 퍼블릭 데이터 어트리뷰트를 위해선 단순히 어트리뷰트명을 복잡한 접근자, 설정자(mutator) 없이 노출하는 것이 가장 좋다. Python 은 단순한 데이터 어트리뷰트가 기능적 행위(functional behavior)을 확장해야하는 경우, 향후 향상(enhancement)을 위한 쉬운 길을 제공하고 있다는 것을 명심하자. 이러한 경우, 프로퍼티를 사용하여 간단한 데이터 어트리뷰트 접근 구문 뒤에 기능 구현을 숨기자.</li></ul><div class="custom-container tip"><p class="custom-container-title">안내 1</p><p>프로퍼티는 새로운 스타일의 클래스에서만 작동한다.</p></div><div class="custom-container tip"><p class="custom-container-title">안내 2</p><p>기능적 행위의 사이드 이펙트(side-effect)가 없도록 유지하도록 노력하자. 하지만 캐싱과 같은 사이드 이펙트는 일반적으로 괜찮다.</p></div><div class="custom-container tip"><p class="custom-container-title">안내 3</p><p>계산적으로 비용이 높은 연산에 프로퍼티를 사용하는 것을 피하자. 어트리뷰트 표기법이 호출자(caller)의 접근 비용이 (상대적으로) 낮음을 보장한다.</p></div><ul><li>하위 클래스로 의도된 클래스일 경우, 그리고 하위 클래스에서 사용하지 않으려는 어트리뷰트가 있는 경우 두개의 밑줄로 시작하여 후행 밑줄이 없는 작명법을 고려하자. 이는 Python 의 이름 맹글링 알고리즘을 불러일으킨다. 해당 어트리뷰트가 있는 클래스의 이름 또한 어트리뷰트명으로 맹글된다. 이는 하위클래스에 예기치 않게 같은 이름의 어트리뷰트가 포함된 경우 어트리뷰트명 충돌을 방지하는데 도움이 된다.</li></ul><div class="custom-container tip"><p class="custom-container-title">안내 1</p><p>단순한 클래스(<em>역: 여기서는 상속하지 않은 클래스</em>)의 이름만이 맹글된 이름에 사용되는 것을 주목하자. 그렇기 때문에 만약 하위 클래스가 같은 클래스명과 어트리뷰트명을 선택할 경우, 여전히 이름 충돌을 겪을 것이다.</p></div><div class="custom-container tip"><p class="custom-container-title">안내 2</p><p>이름 맹글링은 디버깅이나 <code>__gertattr__()</code> 같은 특정 용도를 더 불편하게 만들 수 있다. 하지만 이름 맹글링 알고리즘은 잘 문서화 되어있으며, 메뉴얼하게 수행하기 쉽다.</p></div><div class="custom-container tip"><p class="custom-container-title">안내 3</p><p>모두가 이름 맹글링을 좋아하는 것은 아니다.<br> 우발적인 이름 충돌을 방지하는 것과 고급 호출자(<em>역: 여기서는 mangling 관련</em>)의 잠재적인 사용 간 균형을 맞추자.</p></div><h2 id="퍼블릭-그리고-내부-인터페이스"><a class="header-anchor" href="#퍼블릭-그리고-내부-인터페이스">#</a> 퍼블릭 그리고 내부 인터페이스</h2><p>하위 호환성은 퍼블릭 인터페이스만 보장한다. 따라서, 사용자가 퍼블릭 인터페이스와 내부 인터페이스를 분명하게 구분할 수 있도록 하는 것이 중요하다.</p><p>문서화된 인터페이스는 퍼블릭으로 간주된다. 문서에서 일반적으로 하위 호환성 보장에서 제외되는 임시(provisional) 또는 내부 인터페이스라고 명시적으로 선언하지 않는 한 말이다. 모든 문서화되지 않은 인터페이스는 내부 인터페이스 간주된다.</p><p>더 나은 검사(introspection) 지원을 위해선, 모듈은 퍼블릭 API 에서 <code>__all__</code> 어트리뷰트를 사용함으로써 이름을 명시적으로 선언해야한다. <code>__all__</code>을 빈 리스트로 설정하는 것은 모듈이 퍼블릭 API 가 없음을 나타낸다.</p><p><code>__all__</code> 이 적절히 설정되었음에도 내부 인터페이스 (패키지, 모듈, 클래스, 함수, 어트리뷰트나 다른 이름들)은 첫글자만 밑줄인 단어를 사용해야한다.</p><p>인터페이스를 갖고 있는 네임스페이스(패키지, 모듈, 또는 클래스)가 내부(internal)로 간주될 경우 또한 내부 인터페이스로 간주된다.</p><p>가져오기 된 이름은 구현 세부사항으로 항상 간주되어야 한다. 이를 포함하는 모듈의 API의 명시적으로 문서화 된 부분이 아닌 한, 다른 모듈들은 가져오기 된 이름으로의 간접적인 접근에 의존하지 않아야한다. 예를 들면 <code>os.path</code> 나 패키지의 <code>__init__</code> 모듈 같이 하위 모듈로부터 기능이 노출된 API 말이다.</p><hr class="footnotes-sep">',48),k={class:"footnotes"},g={class:"footnotes-list"},v=(0,n.Wm)("li",{id:"fn1",class:"footnote-item"},[(0,n.Wm)("p",null,[(0,n.Wm)("em",null,[(0,n.Uk)("역: 첫 글자 대문자. 예: "),(0,n.Wm)("code",null,"MyClass")]),(0,n.Uk)(),(0,n.Wm)("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])],-1),b={id:"fn2",class:"footnote-item"},W={href:"http://www.wikipedia.com/wiki/CamelCase",target:"_blank",rel:"noopener noreferrer"},C=(0,n.Uk)("http://www.wikipedia.com/wiki/CamelCase"),y=(0,n.Uk)(),w=(0,n.Wm)("em",null,"역: 여기서는 첫글자가 대문자인 UpperCamelCase 만을 말한다.",-1),E=(0,n.Uk)(),P=(0,n.Wm)("a",{href:"#fnref2",class:"footnote-backref"},"↩︎",-1),U=(0,n.Wm)("li",{id:"fn3",class:"footnote-item"},[(0,n.Wm)("p",null,[(0,n.Uk)("호출할 수 있는. 예: "),(0,n.Wm)("code",null,"my_class()"),(0,n.Uk)(),(0,n.Wm)("a",{href:"#fnref3",class:"footnote-backref"},"↩︎")])],-1),A={id:"fn4",class:"footnote-item"},B={href:"https://ko.wikipedia.org/wiki/%EB%B2%A1%ED%84%B0%EC%9D%98_%EA%B3%B5%EB%B3%80%EC%84%B1_%EB%B0%8F_%EB%B0%98%EB%B3%80%EC%84%B1",target:"_blank",rel:"noopener noreferrer"},T=(0,n.Uk)("위키피디아 - 반변성"),q=(0,n.Uk)(),I=(0,n.Wm)("a",{href:"#fnref4",class:"footnote-backref"},"↩︎",-1),S=(0,n.Wm)("li",{id:"fn5",class:"footnote-item"},[(0,n.Wm)("p",null,[(0,n.Uk)("모듈을 기준으로 public 이 아닌 것 "),(0,n.Wm)("a",{href:"#fnref5",class:"footnote-backref"},"↩︎")])],-1),F={id:"fn6",class:"footnote-item"},x={href:"https://en.wikipedia.org/wiki/Name_mangling#:~:text=mangling%20%2D%20see%20above.-,Python,more%20than%20one%20trailing%20underscore.",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Uk)("영문 위키피디아 - 맹글링"),R=(0,n.Uk)(),V=(0,n.Wm)("a",{href:"#fnref6",class:"footnote-backref"},"↩︎",-1),D={render:function(e,o){const a=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[s,(0,n.Wm)("p",null,[c,(0,n.Wm)("a",l,[t,(0,n.Wm)(a)]),p,(0,n.Wm)("a",r,[i,(0,n.Wm)(a)]),d]),h,(0,n.Wm)("p",null,[(0,n.Wm)("a",u,[m,(0,n.Wm)(a)]),f]),_,(0,n.Wm)("section",k,[(0,n.Wm)("ol",g,[v,(0,n.Wm)("li",b,[(0,n.Wm)("p",null,[(0,n.Wm)("a",W,[C,(0,n.Wm)(a)]),y,w,E,P])]),U,(0,n.Wm)("li",A,[(0,n.Wm)("p",null,[(0,n.Wm)("a",B,[T,(0,n.Wm)(a)]),q,I])]),S,(0,n.Wm)("li",F,[(0,n.Wm)("p",null,[(0,n.Wm)("a",x,[O,(0,n.Wm)(a)]),R,V])])])])],64)}}},9636:(e,o,a)=>{"use strict";a.r(o),a.d(o,{data:()=>n});const n={key:"v-61736b2c",path:"/doc/naming-conventions.html",title:"작명 컨벤션",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"오버라이딩 원리",slug:"오버라이딩-원리",children:[]},{level:2,title:"설명: 작명 스타일",slug:"설명-작명-스타일",children:[]},{level:2,title:"규정: 작명 컨벤션",slug:"규정-작명-컨벤션",children:[{level:3,title:"피해야할 이름",slug:"피해야할-이름",children:[]},{level:3,title:"ASCII 호환성",slug:"ascii-호환성",children:[]},{level:3,title:"패키지명과 모듈명",slug:"패키지명과-모듈명",children:[]},{level:3,title:"클래스명",slug:"클래스명",children:[]},{level:3,title:"타입 변수명",slug:"타입-변수명",children:[]},{level:3,title:"예외명",slug:"예외명",children:[]},{level:3,title:"전역 변수명",slug:"전역-변수명",children:[]},{level:3,title:"함수와 변수명",slug:"함수와-변수명",children:[]},{level:3,title:"함수와 메소드의 아규먼트들",slug:"함수와-메소드의-아규먼트들",children:[]},{level:3,title:"메소드명과 인스턴스 변수",slug:"메소드명과-인스턴스-변수",children:[]},{level:3,title:"상수",slug:"상수",children:[]},{level:3,title:"상속을 고려한 설계",slug:"상속을-고려한-설계",children:[]}]},{level:2,title:"퍼블릭 그리고 내부 인터페이스",slug:"퍼블릭-그리고-내부-인터페이스",children:[]}],filePathRelative:"doc/naming-conventions.md",git:{updatedTime:1621692463e3}}}}]);