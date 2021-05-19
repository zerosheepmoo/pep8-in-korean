(self.webpackChunkpep8_in_korean=self.webpackChunkpep8_in_korean||[]).push([[324],{5371:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>Pn});var e=a(6252);const p=(0,e.uE)('<h1 id="프로그래밍-권장사항"><a class="header-anchor" href="#프로그래밍-권장사항">#</a> 프로그래밍 권장사항</h1><ul><li><p>코드는 Python 의 다른 구현들 (PyPy, Jython, IronPython, Cython, Psyco 등) 에 해가 되지 않는 방향으로 작성되어야 한다.</p><p>예를 들면, <code>a += b</code> 또는 <code>a = a + b</code> 형식의 명령문에 대한 CPython의 효율적인 내부 문자열 연결(concatnation) 구현에 의존하지 말자. 이 최적화는 CPython 에서도 깨지기 쉽다. (이는 몇 몇 타입에만 작동한다.) 그리고 이 최적화는 refcounting<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> 을 사용하지 않는 구현에는 전혀 도입되지 않는다. 라이브러리의 성능에 민감한 부분에서는 <code>&#39;&#39;.join ()</code> 형식을 대신 사용해야 한다. 이렇게 해야 다양한 구현에서 연결 구현이 선형 시간으로 발생한다.</p></li><li><p><code>None</code> 같은 싱글톤과의 비교는 <code>is</code> 나 <code>is not</code> 으로 항상 이루어져야 한다. 등호 연산자는 절대 안 된다.</p><p>또, <code>if x</code> 를 작성할 때는 정말로 <code>if x is not None</code> 의 의미여야 한다. None이 디폴트 값인 변수나 아규먼트가 다른 값으로 설정되어 있는지를 테스트 할 때 말이다. 그 다른 값은 (container 같이) boolean 컨텍스트에서 false 가 될 수 있는 타입을 갖고 있을 수 있다!</p></li><li><p><code>is not</code> 연산자를 <code>not ... is</code>보다 더 사용하자. 둘 다 기능적으로는 동리하지만, 전자의 형식이 더 가독성 있고 바람직한 방식이다.</p></li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 옳은 예:</span>\n<span class="token keyword">if</span> foo <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 틀린 예:</span>\n<span class="token keyword">if</span> <span class="token keyword">not</span> foo <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',4),o=(0,e.uE)("<p>리치 연산자를 사용하여 연산자의 순서를 정하는 구현을 할 때, 여섯 개의 모든 연산자 (<code>__eq__</code>, <code>__ne__</code>, <code>__lt__</code>, <code>__le__</code>, <code>__gt__</code>, <code>__ge__</code>) 를 구현하는 것이 가장 좋다. 특정 연산에서 작동하는 다른 코드에 의존하는 것보다 말이다.</p><p>들어가는 노력을 최소화하기 위해, <code>functools.total_ordering()</code> 데코레이터는 누락된 비교 메소드를 생성하는 툴을 제공한다.</p>",2),t={href:"https://www.python.org/dev/peps/pep-0207/",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("PEP 207"),c=(0,e.uE)(" 은 반사성(reflexivity) 규칙이 Python 에 의해 <strong>가정</strong>됨을 나타낸다. 따라서, 인터프리터가 <code>y &gt; x</code> 를 <code>x &lt; y</code>로, <code>y &gt;= x</code> 를 <code>x &lt;= y</code>로 바꾸거나, <code>x == y</code> 와 <code>x != y</code>의 아규먼트(<em>역: 여기서는 양변</em>)을 바꿀 수 있다. <code>sort()</code>와 <code>min()</code> 연산은 <code>&lt;</code> 연산자를 사용하는 것을, <code>max()</code> 함수는 <code>&gt;</code> 연산자를 사용하는 것을 보장한다. 하지만, 다른 컨텍스트로부터 혼란이 떠오르지 않기 위해 여섯 개의 모든 연산들을 구현하는 것이 가장 바람직하다.",27),r=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("식별자에 직접적으로 람다 표현식을 바인딩한 할당 문보다, 항상 "),(0,e.Wm)("code",null,"def"),(0,e.Uk)(" 문을 사용하자.")])],-1),i=(0,e.uE)('<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>      <span class="token comment"># 옳은 예:</span>\n      <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token number">2</span><span class="token operator">*</span>x\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>      <span class="token comment"># 틀린 예:</span>\n      f <span class="token operator">=</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token number">2</span><span class="token operator">*</span>x\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>첫번째 형식은 결과 함수 객체 명을 제네릭 <code>&lt;lambda&gt;</code> 대신 구체적으로 &#39;f&#39;임을 의미한다. 이는 일반적인 문자열 표현(representation)과 역추적(tracebacks)에 있어 유용하다. 할당 문의 사용은 람다 표현식이 명시적인 <code>def</code> 선언문 없이 제공된다는 유일한 이점을 제거한다. (즉, 이는 커다란 표현 안에서 내장될(embedded) 수 있다는 말.)</p>',3),u=(0,e.Wm)("p",null,[(0,e.Uk)("예외를 "),(0,e.Wm)("code",null,"BaseException"),(0,e.Uk)("보다 "),(0,e.Wm)("code",null,"Exception"),(0,e.Uk)("으로 부터 파생(derive)시키자. "),(0,e.Wm)("code",null,"BaseException"),(0,e.Uk)("으로 부터 직접적인 상속을 한 예외는 대게 항상 잘못된 짓을 했을 때 포착(catching)되는 예외가 있는 곳에서 사용될 것으로 예정되어있다.")],-1),d=(0,e.Uk)("코드가 예외를 "),k=(0,e.Wm)("em",null,"포착",-1),m=(0,e.Uk)('하는 데 필요한 구분(distictions)을 기반으로 예외 계층을 설계하자. 예외가 떠오르는(raised) 곳에서 하기보다는 말이다. 단순히 "문제가 발생하였다."는 언급에 대하여 겨냥하기 보단, 프로그램적으로 "무엇이 잘못 되어가고 있었나?" 하는 질문에 대한 답을 겨냥하자. ('),b={href:"https://www.python.org/dev/peps/pep-3151/",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("PEP 3151"),g=(0,e.Uk)(" 의 내장 예외 계층에 대해서 배우는 수업의 예시를 참고하자.)"),h=(0,e.Wm)("p",null,'비록 예외가 오류일 경우에는 접두어로 "Error"를 당신의 예외 클래스들에 추가하지만, 기본적으로 클래스 작명 컨벤션이 적용된다. 에러가 아닌 예외들은 특별한 접두어가 필요하지 않다. 이런 예외들은 비논리적인 흐름 제어거나 다른 신호전달(signaling)의 형태다.',-1),f=(0,e.uE)("<li><p>예외 체이닝을 적절히 사용하자. Python 3에서는 <code>raise X from Y</code>가 원래의 역추적(traceback)의 손실이 없이 명시적인 대체(<em>역: 예외 체이닝</em>)를 나타내는데 사용되어야한다.</p><p>의도적으로 내부 예외를 대체하는 경우 (Python 2의 <code>raise X</code>, Python 3.3+의 <code>raise X from Y</code>를 사용하는 것), 관련 세부 사항이 새로운 예외로 양도(transferred)되었다는 것을 보장해야한다. (예를 들어, KeyError를 AttributeError로 전환할 때 어트리뷰트 명이 보존되는 것 또는, 새로운 예외 메시지 안에서 원래 예외의 텍스트가 들어있는 것)</p></li><li><p>Python 2 에서 예외가 떠오를 경우, <code>raise ValueError(&#39;message&#39;)</code>를 사용하자. 오래된 형식인 <code>raise ValueError, &#39;message&#39;</code> 대신에 말이다.</p><p>이 오래된 형식은 Python 3 문법에서는 허용하지 않는다.</p><p>또한, 괄호 사용 양식(paren-using form)은 예외의 아규먼트가 길거나 문자열 포매팅을 포함할 때, 감싸는 소괄호 덕에 줄 이음 문자를 사용할 필요가 없어짐을 나타내기도 한다.</p></li><li><p>예외를 포착할 때, 생 <code>except:</code> 절을 사용하기 보다 가능한 특정 예외를 언급하라.</p></li>",3),v=(0,e.uE)('<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>\n    <span class="token keyword">import</span> platform_specific_module\n<span class="token keyword">except</span> ImportError<span class="token punctuation">:</span>\n    platform_specific_module <span class="token operator">=</span> <span class="token boolean">None</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>생 <code>except:</code> 절은 SystemExit 과 KeyboardInterrupt 예외를 포착할 것이며, 이로인해 컨트롤 + C 를 사용해서 프로그램을 중단하기 어렵게 만든다. 그리고 다른 문제로 가장(disguise)될 수도 있다. (<em>역: 본래 문제에 대한 예외가 발생해야하는데 다른 문제로 인식될 수 있다는 것</em>) 프로그램 오류를 알리는 모든 예외를 포착하고 싶다면, <code>except Exception:</code>을 사용하자. (생 예외처리는 <code>except BaseException:</code>과 같기 때문이다.)</p><p>엄지척 할 수 있는 좋은 규칙은 생 <code>&#39;except&#39;</code> 절 사용을 다음 두 개의 경우로만 제한하는 것이다.</p><ol><li>예외 핸들러가 역추적을 로깅하거나 출력하게 될 때. 최소한 사용자가 오류가 발생했음을 인지할 수 있도록.</li><li>코드 정리(cleanup) 작업을 해야할 때. 하지만 그럴 땐 예외를 <code>raise</code>와 함께 위로 전파(propagate)하도록 하게하자. 이러한 경우를 제어하기 위해 <code>try..finally</code> 가 더 좋은 방법이 될 수 있다.</li></ol><ul><li>포착된 예외를 이름에 바인딩할 때, Python 2.6 에서 추가된 명시적 이름 바인딩 구문이 바람직하다.</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>\n    process_data<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">except</span> Exception <span class="token keyword">as</span> exc<span class="token punctuation">:</span>\n    <span class="token keyword">raise</span> DataProcessingFailedError<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>exc<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>이는 Python 3에서만 지원되는 구문이다. 그리고 오래된 콤마 기반 구문과 구분하기 애매해지는 문제를 피하자.</p><ul><li><p>운영체제 오류를 포착할 땐, Python 3.3 에서 도입된 명시적 예외 계층구조가 바람직하다. <code>errno</code> 값들을 검사하는 것(introspection) 대신에 말이다.</p></li><li><p>추가적으로 모든 try/except 절에 대해, <code>try</code> 절을 필요한 최소한의 코드로 제한하자. 다시 말하지만, 이는 마스킹 버그를 방지한다.</p></li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 옳은 예:</span>\n<span class="token keyword">try</span><span class="token punctuation">:</span>\n    value <span class="token operator">=</span> collection<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n<span class="token keyword">except</span> KeyError<span class="token punctuation">:</span>\n    <span class="token keyword">return</span> key_not_found<span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n<span class="token keyword">else</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> handle_value<span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 틀린 예:</span>\n<span class="token keyword">try</span><span class="token punctuation">:</span>\n    <span class="token comment"># 너무 범위가 넓다!</span>\n    <span class="token keyword">return</span> handle_value<span class="token punctuation">(</span>collection<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token keyword">except</span> KeyError<span class="token punctuation">:</span>\n    <span class="token comment"># handle_value() 로 떠오른 KeyError 도 포착하게 될 것이다.</span>\n    <span class="token keyword">return</span> key_not_found<span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><p>자원이 특정 구역의 코드에 국지적일 때, <code>with</code> 문을 사용하여 즉시 정리됨과 사용 후 신뢰성(reliably)를 보장하자. try/finally 문 또한 허용가능하다.</p></li><li><p>컨텍스트 관리자는 자원을 획득하거나 해제하는 일 외의 작업을 할 때마다 별도의 함수 또는 메소드를 통해 불러와져야(invoked) 한다.</p></li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 옳은 예:</span>\n<span class="token keyword">with</span> conn<span class="token punctuation">.</span>begin_transaction<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    do_stuff_in_transaction<span class="token punctuation">(</span>conn<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 틀린 예:</span>\n<span class="token keyword">with</span> conn<span class="token punctuation">:</span>\n    do_stuff_in_transaction<span class="token punctuation">(</span>conn<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>후자의 예시는 <code>__enter__</code>와 <code>__exit__</code> 메소드가 트랜잭션(transaction) 후의 연결을 닫는 것 외에 어떤 작업을 수행하고 있음을 나타내는 어떠한 정보도 제공하지 않는다. 이 경우 명시적으로 하는 것이 중요하다.</p><ul><li>반환 문에 대하여 일관성을 지키자. 함수 내 모든 반환 문은 표현을 반환하거나 어떤 것도 반환하지 않아야 한다. 만약 반환 문이 어떠한 표현을 반환한다면, 어떠한 반환문도 반환값이 없는 곳에서는 명시적으로 <code>return None</code>을 작성해야 한다. 그리고 명시적인 반환 문은 함수의 끝에 나타내야 한다. (도달 가능(reachable)하다면 말이다.)</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 옳은 예:</span>\n\n<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>x<span class="token punctuation">)</span>\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token boolean">None</span>\n\n<span class="token keyword">def</span> <span class="token function">bar</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> x <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token boolean">None</span>\n    <span class="token keyword">return</span> math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>x<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 틀린 예:</span>\n\n<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>x<span class="token punctuation">)</span>\n\n<span class="token keyword">def</span> <span class="token function">bar</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> x <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span>\n    <span class="token keyword">return</span> math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>x<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><p>문자열 모듈을 사용하는 것 대신에 문자열 메소드를 사용하자.</p><p>문자열 메소드는 항상 더 빠르고 유니코드 문자열과 같은 API를 공유한다. 2.0 버전 Python과의 하위 호환성이 필요한 경우, 이 규칙을 오버라이딩 하자.</p></li><li><p>접두어나 접미어를 확인할 때는, 문자열 슬라이싱 대신에 <code>&#39;&#39;.startswith()</code>와 <code>&#39;&#39;.endswith()</code>를 사용하자.</p><p><code>startswith()</code> 와 <code>endswith()</code>는 더 간결하고 오류를 적게 발생시킨다.</p></li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 옳은 예:</span>\n<span class="token keyword">if</span> foo<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 틀린 예:</span>\n<span class="token keyword">if</span> foo<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>오브젝트 타입 비교는 직접 비교하기 보단,</li><li>항상 <code>isinstance()</code>를 사용해야한다.</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 옳은 예:</span>\n<span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 틀린 예:</span>\n<span class="token keyword">if</span> <span class="token builtin">type</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token keyword">is</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>오브젝트가 문자열인지를 확인할 때는, 유니코드 문자열일 수도 있다는 점을 명심하자! Python 2에서는 str과 유니코드가 공통적인 기반 클래스, basestring을 가진다. 그래서 다음과 같이 할 수도 있다.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token builtin">basestring</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Python 3 에서는 더 이상 <code>unicode</code>와 <code>basestring</code>이 존재하지 않는 점을 알아두자. (오직 <code>str</code>만이 있다.) 그리고 바이트 오브젝트는 더 이상 문자열 종류가 아니다. (대신 정수형의 시퀀스(sequence of integers)가 되었다.)</p><ul><li>시퀀스에 대해서는 (문자열, 리스트, 튜플), 빈 시퀀스가 false 라는 사실을 이용하자.</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 옳은 예:</span>\n<span class="token keyword">if</span> <span class="token keyword">not</span> seq<span class="token punctuation">:</span>\n<span class="token keyword">if</span> seq<span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 틀린 예:</span>\n<span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>seq<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">len</span><span class="token punctuation">(</span>seq<span class="token punctuation">)</span><span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><p>문자열 리터럴을 중요한 후행 공백에 의존하여 작성하지 말자. 그러한 후행 공백은 보기에 구분이 어렵고, 몇 에디터(또는 더 최근의, reindent,py)에서는 트림된다.</p></li><li><p>불린 값을 <code>==</code>를 사용하여 True 또는 False 와 비교하지 말자.</p></li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 옳은 예:</span>\n<span class="token keyword">if</span> greeting<span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 틀린 예:</span>\n<span class="token keyword">if</span> greeting <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>더 안 좋게는 다음과 같이 할 수 있다.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 틀린 예:</span>\n<span class="token keyword">if</span> greeting <span class="token keyword">is</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><code>return</code>/<code>break</code>/<code>continue</code>의 흐름 제어문이 finally 슈트 밖으로 점프될 수 있는 <code>try...finally</code>의 finally 슈트에서의 흐름 제어문들의 사용은 권장하지 않는다. 왜냐하면 이러한 명령문들은 finally 슈트를 통하여 전파된 어떤 활성화 된 예외도 암시적으로 취소할 수 있기 때문이다.</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 틀린 예:</span>\n<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">try</span><span class="token punctuation">:</span>\n        <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span>\n    <span class="token keyword">finally</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token number">42</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="함수-어노테이션"><a class="header-anchor" href="#함수-어노테이션">#</a> 함수 어노테이션</h2>',37),w={href:"https://www.python.org/dev/peps/pep-0484",target:"_blank",rel:"noopener noreferrer"},W=(0,e.Uk)("PEP 484"),x=(0,e.Uk)(" 의 승인으로 함수 어노테이션에 대한 스타일 규칙들이 바뀌고 있다."),_=(0,e.Uk)("하위 호환성을 만족시키기 위해, Python3 의 함수 어노테이션은 가급적 "),P={href:"https://www.python.org/dev/peps/pep-0484",target:"_blank",rel:"noopener noreferrer"},U=(0,e.Uk)("PEP 484"),E=(0,e.Uk)(" 의 문법을 사용하여야 한다. (앞선 내용에서 어노테이션을 위한 포매팅 권장사항이 몇 가지 있다.)"),q=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"이 PEP에서 이전에 권장되었던 어노테이션 스타일에 대한 실험적인 시도들은 더 이상 권장되지 않는다.")],-1),N=(0,e.Uk)("단, 이제는 표준라이브러리(stdlib)를 제외하고, "),C={href:"https://www.python.org/dev/peps/pep-0484",target:"_blank",rel:"noopener noreferrer"},K=(0,e.Uk)("PEP 484"),T=(0,e.Uk)(" 규칙에 따른 실험적인 시도를 권장한다. 예를 들면, PEP 484 스타일 유형 어노테이션을 사용하는 대규모 서드 파티 라이브러리나 어플리케이션을 마크 업 하는 것, 이러한 주석을 추가하는 것이 얼마나 쉬운 지 검토하는 것, 그리고 어노테이션의 존재가 코드 이해도를 높이는지 관찰하는 것이 있다."),j=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"Python 표준 라이브러리는 그러한 어노테이션을 적용하는데 있어 보수적이어야 하지만, 이러한 어노테이션의 사용은 새로운 코드나 대규모 리팩토링에 대해선 허용되어야 한다.")],-1),I=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"함수 어노테이션의 사용에 차이를 두기를 원하는 코드에서, 다음의 형태의 주석을 넣는 것이 권장된다.")],-1),B=(0,e.uE)('<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># type: ignore</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1),R=(0,e.Uk)("파일 상단에 위치한 이것은 타입 체커에게 모든 어노테이션을 무시해야함을 알려준다. (타입 체커들의 불만을 비활성화시키는 더 자세한 방법은 "),X={href:"https://www.python.org/dev/peps/pep-0484",target:"_blank",rel:"noopener noreferrer"},Y=(0,e.Uk)("PEP 484"),A=(0,e.Uk)(" 에서 찾을 수 있다.)"),F=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"린터들과 마찬가지로 타입체커는 선택사항이며, 별도의 도구이다. 기본적으로 Python 인터프리터는 타입 체킹으로 어떠한 메시지도 발행하지 않아야 하며, 어노테이션을 기반으로 행위(behavior)를 변경하지 않아야 한다.")],-1),S=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("타입 체커를 사용하지 않으려는 사용자는 자유롭게 무시해도 된다. 하지만, 외부 라이브러리 패키지의 사용자는 해당 패키지의 타입 체커를 실행하길 원할 수도 있다. 이를 목적으로, PEP 484 는 스텁(stub) 파일들의 사용을 권장한다. 이 스텁 파일은 .pyi 파일로, 이에 상응하는 .py 파일들의 설정(preferences)의 타입체커에 의해 읽혀지는 파일이다. 스텁 파일은 라이브러리로 배포되거나, 별도로 (라이브러리 작성자의 권한하에) typeshed 저장소"),(0,e.Wm)("sup",{class:"footnote-ref"},[(0,e.Wm)("a",{href:"#fn2",id:"fnref2"},"[2]")]),(0,e.Uk)("를 통해 배포될 수 있다.")])],-1),V=(0,e.Uk)("하위 호환이 필요한 코드의 경우, 타입 어노테이션은 주석의 형태로 추가될 수 있다. "),D={href:"https://www.python.org/dev/peps/pep-0484/",target:"_blank",rel:"noopener noreferrer"},H=(0,e.Uk)("PEP 484"),J=(0,e.Wm)("sup",{class:"footnote-ref"},[(0,e.Wm)("a",{href:"#fn3",id:"fnref3"},"[3]")],-1),L=(0,e.Uk)("의 관련 섹션을 참조."),O=(0,e.Wm)("h2",{id:"변수-어노테이션"},[(0,e.Wm)("a",{class:"header-anchor",href:"#변수-어노테이션"},"#"),(0,e.Uk)(" 변수 어노테이션")],-1),z={href:"https://www.python.org/dev/peps/pep-0008/#variable-annotations",target:"_blank",rel:"noopener noreferrer"},G=(0,e.Uk)("PEP528"),M=(0,e.Uk)(" 은 변수 어노테이션들을 소개한다. 변수 어노테이션에 대한 권장사항들은 위에서 묘사된 함수 주석과 유사하다."),Q=(0,e.uE)('<ul><li><p>모듈 레벨의 변수, 클래스와 인스턴스 변수, 그리고 로컬 변수 어노테이션은 콜론 다음에 한 칸 공백이 있어야한다.</p></li><li><p>콜론 앞에는 공백이 없어야 한다.</p></li><li><p>만약 할당식이 우항을 갖고 있다면, 등호 기호는 앞뒤로 정확히 한 칸 공백이 있어야 한다.</p></li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 옳은 예:</span>\ncode<span class="token punctuation">:</span> <span class="token builtin">int</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Point</span><span class="token punctuation">:</span>\n    coords<span class="token punctuation">:</span> Tuple<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span>\n    label<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;&lt;unknown&gt;&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 잘못된 예:</span>\n\ncode<span class="token punctuation">:</span><span class="token builtin">int</span>  <span class="token comment"># No space after colon</span>\ncode <span class="token punctuation">:</span> <span class="token builtin">int</span>  <span class="token comment"># Space before colon</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">:</span>\n    result<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token operator">=</span><span class="token number">0</span>  <span class="token comment"># No spaces around equality sign</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',3),Z={href:"https://www.python.org/dev/peps/pep-0008/#variable-annotations",target:"_blank",rel:"noopener noreferrer"},$=(0,e.Uk)("PEP528"),nn=(0,e.Uk)(" 이 Python 3.6 에서 허용된다고 해도, 변수 어노테이션 구문은 모든 버전의 스텁(stub) 파일들에 적합한 구문이다. ("),sn={href:"https://www.python.org/dev/peps/pep-0484/",target:"_blank",rel:"noopener noreferrer"},an=(0,e.Uk)("PEP484"),en=(0,e.Uk)(" 를 참고)"),pn=(0,e.Wm)("hr",{class:"footnotes-sep"},null,-1),on={class:"footnotes"},tn={class:"footnotes-list"},ln={id:"fn1",class:"footnote-item"},cn={href:"https://en.wikipedia.org/wiki/Reference_counting",target:"_blank",rel:"noopener noreferrer"},rn=(0,e.Uk)("참조 횟수 계산 방식"),un=(0,e.Uk)(),dn=(0,e.Wm)("a",{href:"#fnref1",class:"footnote-backref"},"↩︎",-1),kn={id:"fn2",class:"footnote-item"},mn=(0,e.Uk)("typeshed 저장소 "),bn={href:"https://github.com/python/typeshed",target:"_blank",rel:"noopener noreferrer"},yn=(0,e.Uk)("https://github.com/python/typeshed"),gn=(0,e.Uk)(),hn=(0,e.Wm)("a",{href:"#fnref2",class:"footnote-backref"},"↩︎",-1),fn={id:"fn3",class:"footnote-item"},vn=(0,e.Uk)("Python 2.7 및 양립 가능 코드(straddling code)를 위한 문법 제안 "),wn={href:"https://www.python.org/dev/peps/pep-0484/#suggested-syntax-for-python-2-7-and-straddling-code",target:"_blank",rel:"noopener noreferrer"},Wn=(0,e.Uk)("https://www.python.org/dev/peps/pep-0484/#suggested-syntax-for-python-2-7-and-straddling-code"),xn=(0,e.Uk)(),_n=(0,e.Wm)("a",{href:"#fnref3",class:"footnote-backref"},"↩︎",-1),Pn={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[o,(0,e.Wm)("p",null,[(0,e.Wm)("a",t,[l,(0,e.Wm)(a)]),c])]),r]),i,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[u,(0,e.Wm)("p",null,[d,k,m,(0,e.Wm)("a",b,[y,(0,e.Wm)(a)]),g]),h]),f]),v,(0,e.Wm)("p",null,[(0,e.Wm)("a",w,[W,(0,e.Wm)(a)]),x]),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[_,(0,e.Wm)("a",P,[U,(0,e.Wm)(a)]),E])]),q,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[N,(0,e.Wm)("a",C,[K,(0,e.Wm)(a)]),T])]),j,I]),B,(0,e.Wm)("p",null,[R,(0,e.Wm)("a",X,[Y,(0,e.Wm)(a)]),A]),(0,e.Wm)("ul",null,[F,S,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[V,(0,e.Wm)("a",D,[H,(0,e.Wm)(a)]),J,L])])]),O,(0,e.Wm)("p",null,[(0,e.Wm)("a",z,[G,(0,e.Wm)(a)]),M]),Q,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",Z,[$,(0,e.Wm)(a)]),nn,(0,e.Wm)("a",sn,[an,(0,e.Wm)(a)]),en])]),pn,(0,e.Wm)("section",on,[(0,e.Wm)("ol",tn,[(0,e.Wm)("li",ln,[(0,e.Wm)("p",null,[(0,e.Wm)("a",cn,[rn,(0,e.Wm)(a)]),un,dn])]),(0,e.Wm)("li",kn,[(0,e.Wm)("p",null,[mn,(0,e.Wm)("a",bn,[yn,(0,e.Wm)(a)]),gn,hn])]),(0,e.Wm)("li",fn,[(0,e.Wm)("p",null,[vn,(0,e.Wm)("a",wn,[Wn,(0,e.Wm)(a)]),xn,_n])])])])],64)}}},1525:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-fc50ebba",path:"/doc/programming-recommendations.html",title:"프로그래밍 권장사항",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"함수 어노테이션",slug:"함수-어노테이션",children:[]},{level:2,title:"변수 어노테이션",slug:"변수-어노테이션",children:[]}],filePathRelative:"doc/programming-recommendations.md",git:{updatedTime:1621421703e3,contributors:[]}}}}]);