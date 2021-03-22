# 마크다운 스타일 가이드

마크다운을 쓰는데 필요한 규칙.

꼭 번역하기 전 이 문서를 읽기 바람.

이 프로젝트에서는 기본적으로 마크다운 린트를 사용하고 있다.
꼭 명시해야하는 규칙이 아니라면 아래에 기입하지 말자.
기본적으로는
[markdownlint rule](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)
을 따른다.

파일명은 Header명을 그대로 따르는 것을 원칙으로, lowercase 로 작성한다.
또, 공백은 `-` 로 replace 한다.

우리의 세 목표:

1. **적절한 마크다운 문법**를 쓰자.
2. 뷰어 없이 **소스 단위로도 가독성이 좋게** 쓰자
3. **간단하게** 쓰자.

## 문서 레이아웃

- 최종 결과는 다음 레이아웃의 변형 형태를 지닐 것.
- toc 가 없는 이유는 vuepress 의 사이드바 기능을 사용할 예정이므로 필요하지 않음
- 레이아웃은 원본이 존재하므로 원본 형식이랑 최대한 흡사하게 진행할 것.

```markdown
# 문서 제목

## 주제(Topic)

내용.

```

## 텍스트 래핑

- 이 항목에서는 [] 로 감싼 후 ()로 링크를 넣는 것을 래핑이라함.
- 결과물이 번역 문서와 동일하게끔 하기.
- 긴 링크는 가독성을 위해 래핑 전 후로 줄바꿈을 삽입하기.

### 좋은 예시

```markdown
Lorem ipsum dolor sit amet. See the
[foo docs](https://gerrit.googlesource.com/gitiles/+/master/Documentation/markdown.md)
for details.
```

## 쓸모없는 공백(Trailing whitespace)

- markdownlint 에 명시

## 헤딩

### ATX-스타일 헤딩

 `=` 또는 `-` 줄긋 기로 헤딩 하지 말것

- 좋은 예

```markdown
## Heading 2
```

- 안좋은 예

```markdown
Heading - do you remember what level? DO NOT DO THIS.
---------
```

## 목록

### 긴 목록에 대해서는 lazy numbering 을 사용

```markdown
1.  Foo.
1.  Bar.
    1.  Foofoo.
    1.  Barbar.
1.  Baz.
```

### 짧을 때는 아니어도 상관없음

```markdown
1.  Foo.
2.  Bar.
3.  Baz.
```

### 중첩 목록 띄어쓰기

중첩 목록을 만들 때는 4칸 공백 들여쓰기.

- 좋은 예

```markdown
1.  2 spaces after a numbered list.
    4 space indent for wrapped text.
2.  2 spaces again.

*   3 spaces after a bullet.
    4 space indent for wrapped text.
    1.  2 spaces after a numbered list.
        8 space indent for the wrapped text of a nested list.
    2.  Looks nice, don't it?
*   3 spaces after a bullet.
```

- 안 좋은 예

```markdown
* One space,
with no indent for wrapped text.
     1. Irregular nesting... DO NOT DO THIS.
```

- 중첩이 없다해도 4칸 공백 들여쓰기는 래핑 된 텍스트를 일관성 있게 유지함. 권장함.

```markdown
*   Foo,
    wrapped.

1.  2 spaces
    and 4 space indenting.
2.  2 spaces again.
```

## 코드

### 인라인(Inline)

- 짧은 코드 인용이나 필드명으로 사용

```markdown
You'll want to run `really_cool_script.sh arg`.

Pay attention to the `foo_bar_whammy` field in that table.
```

- 파일 형식에 사용

```markdown
Be sure to update your `README.md`!
```

- 강조할 때 사용해도 괜찮음. 단, 남용하지 말것.

```markdown
`이것`은 강조하는 것입니다.
```

### 코드블록

- 코드 인용 한 줄 이상일 때 사용할 것
<!-- markdownlint-disable -->

<pre>
```python
def Foo(self, bar):
  self.bar = bar
```
</pre>

<!-- markdownlint-enable -->
#### 언어 선언

구문 하이라이터(syntax highlighter)나 다음 편집기(next editor)가 추측하지 않도록
언어를 명시적으로(explicitly) 선언해야 함.

#### 들여쓰기 된 코드블록은 더 깨끗하다

- 짧은 스니펫 만들 때만 사용하기

```markdown
You'll need to run:

    bazel run :thing -- --foo

And then:

    bazel run :another_thing -- --bar

And again:

    bazel run :yet_again -- --baz
```

#### 이스케이프 개행(Escape newlines)

- 대부분의 커맨드라인 스니펫은 그대로 터미널에 복붙하게 의도되어 있음.
- 어떠한 개행도 하지 않는 것이 가장 좋음. 줄 끝에 백슬래쉬를 사용.
<!-- markdownlint-disable -->

<pre>
```shell
bazel run :target -- --flag --foo=longlonglonglonglongvalue \
--bar=anotherlonglonglonglonglonglonglonglonglonglongvalue
```
</pre>
<!-- markdownlint-enable -->
#### 목록 안의 코드블록

목록으로 중첩 코드블록을 만드는 것이 필요하다면, 목록이 깨지지 않게 들여쓰기 하기.

```markdown
*   Bullet.

    ```c++
    int foo;
    ```

*   Next bullet.
```

추가적인 4칸 공백으로 만들 수도 있음

```markdown
*   Bullet.

        int foo;

*   Next bullet.
```

## 링크

- **가능한 만큼 링크를 짧게하세요.**
- 즉, 쿼리등은 비포함 하는 게 좋음.
- id 지정은 편의상 하는 게 좋음.

### 유익한 마크 다운 링크 제목 사용

- 링크의 제목을 "링크" 또는 "여기" 로 하는 것은 금지.

- 좋은 예

```markdown
See the syntax guide for more info: [link](syntax_guide.md).
Or, check out the style guide [here](style_guide.md).
DO NOT DO THIS.
```

- 좋지 않은 예

```markdown
See the [syntax guide](syntax_guide.md) for more info.
Or, check out the [style guide](style_guide.md).
```

## 이미지

- 이미지는 사용을 자제
- 단, 필요할 때는 사용해도 좋음

## 표보다는 목록

- 표를 작성할 때는 작은 표로
- 그게 아니라면 목록으로

<!-- markdownlint-disable -->
```markdown
Fruit | Attribute | Notes
--- | --- | --- | ---
Apple | [Juicy](https://example.com/SomeReallyReallyReallyReallyReallyReallyReallyReallyLongQuery), Firm, Sweet | Apples keep doctors away.
Banana | [Convenient](https://example.com/SomeDifferentReallyReallyReallyReallyReallyReallyReallyReallyLongQuery), 
Soft, Sweet | Contrary to popular belief, most apes prefer mangoes.

DO NOT DO THIS
```
<!-- markdownlint-enable -->

[Lists](#lists) 그리고 서브헤딩(subheadings)은 일반적으로 동일한 정보를 약간 덜 간결하게 표시하지만, 훨씬 더 편집하기 쉽습니다:

```markdown
## Fruits

### Apple

* [Juicy](https://SomeReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyLongURL)
* Firm
* Sweet

Apples keep doctors away.

### Banana

* [Convenient](https://example.com/SomeDifferentReallyReallyReallyReallyReallyReallyReallyReallyLongQuery)
* Soft
* Sweet

Contrary to popular belief, most apes prefer mangoes.
```

하지만, 다음과 같이 작은 표가 필요할 때는 사용하기.

```markdown
Transport | Favored by | Advantages
--- | --- | ---
Swallow | Coconuts | Otherwise unladen
Bicycle | Miss Gulch | Weatherproof
X-34 landspeeder | Whiny farmboys | Cheap since the X-38 came out
```

## HTML 보단 무조건 마크다운

HTML 핵(hacks) 들을 피하고 표준적인 마크다운 구문을 가능한 한 지향하기.
만약 원하는 것을 만들 수 없을 것 같으면 정말로 필요한 것인지 다시 생각하기.
[큰 테이블](#표보다는-목록)을 제외하고 마크다운은 이미 거의 모든 요구사항을 충족함.

모든 HTML 또는 자바 스크립트 핵은 가독성과 이식성을 떨어 뜨림.

## footnote 사용하기

- 가능함.

```md

이 뒤에 각주를 설정[^1]

[^1]: first footnote

```

## 사용하지 않는 룰

- MD036: Emphasis used instead of a heading
