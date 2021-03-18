# 어리석은 일관성은 좁은 정신에서 나오는 허깨비 같은 것이다.

One of Guido's key insights is that code is read much more often than it is written. The guidelines provided here are intended to improve the readability of code and make it consistent across the wide spectrum of Python code. As [PEP 20](https://www.python.org/dev/peps/pep-0020/) says, "Readability counts".

A style guide is about consistency. Consistency with this style guide is important. Consistency within a project is more important. Consistency within one module or function is the most important.

However, know when to be inconsistent -- sometimes style guide recommendations just aren't applicable. When in doubt, use your best judgment. Look at other examples and decide what looks best. And don't hesitate to ask!

In particular: do not break backwards compatibility just to comply with this PEP!

Some other good reasons to ignore a particular guideline:

When applying the guideline would make the code less readable, even for someone who is used to reading code that follows this PEP.
To be consistent with surrounding code that also breaks it (maybe for historic reasons) -- although this is also an opportunity to clean up someone else's mess (in true XP style).
Because the code in question predates the introduction of the guideline and there is no other reason to be modifying that code.
When the code needs to remain compatible with older versions of Python that don't support the feature recommended by the style guide.