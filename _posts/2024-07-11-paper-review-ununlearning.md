---
title: "UnUnlearning: Unlearning is not sufficient for content regulation in advanced generative AI for algebra"
categories:
  - Paper Review
tags:
  - Unlearning
  - Knowledge Regulation
image:
  path: /images/main.png
  thumbnail: /images/2024-07-11-paper-review-ununlearning/thumbnail.png

# last_modified_at: 2024-07-20
---

Unlearning은 학습된 AI 모델이 가진 지식(knowledge) 중 허가되지 않은 정보(impermissible knowledge)를 제거하거나 혹은 노출을 막는 접근이나 기술들을 말합니다. 여기서 `허가되지 않은 정보`란 비인가 정보, 부정확한 정보, 위험성이 있거나 비윤리적 정보들을 의미하는데요. 개인정보나 올바르지 않은 정보들이 여기에 포함됩니다. 인종, 성별, 종교, 외모, 국적 등 인류가 지향해야할 평등의 가치를 훼손하는 편향적 해석이나 폭탄 제조 기술 혹은 살상 기술과 같은 위험성이 있는 지식들도 예시가 될 수 있습니다. 이 정보들이 사용자의 요청에 의해 정제되지 않고 제공된다면 많은 혼란을 야기할 것이라는 것은 너무 자명하죠. GPT, Gemini, Claude, LaMa 등 소위 Large Language Models(LLMs)이 예상을 초월한 모습을 보여주며 많은이들이 업무나 생활에서 적극적으로 활용하고 있습니다. 상황이 이렇다보니 unlearning의 중요성은 점점 더 커지고 있죠.

이 글에서 소개할 논문의 제목이 매우 흥미롭습니다. Un’Unlearning’, 즉 Unlearning의 부정하는 뜻임을 알 수 있죠. 딥마인드에서 공개한 이 논문은 7페이지의 짧은 글로 정식 논문이라기보다 letter에 가깝습니다. 주요 내용은 기존의 unlearning 전략들이 LLM의 `어떤` 특성때문에 회피가능한 전략이 있음을 알리는 것입니다. 나아가 이러한 우려를 바탕으로 더 효과적이고 근본적인 방어전략들을 함께 찾아보자는 것이 이 논문의 궁극적인 목표라 할 수 있습니다.

아래 링크의 포스트 참조
<br>
{% include link-post.html title = "Tree-Rings Watermarks: Invisible Fingerprints for Diffusion Images" %}
<br>

### Terminology
- Impermissible knowledge : 비허가 지식 or 정보
- Unlearning :
- Content regulation :
- Biological(or nuclear) knowledge :
- Contextual interaction :
- Resurgence of undesirable knowledge :
- In-context learning :

<br>
Main Argument

In-context learning 관점에서 특정 word는 다른 정보들의 조합으로 표현. 

![knowledge](/images/2024-07-11-paper-review-ununlearning/0.png)

이 관점에서 보면 관련 정보들을 모두 제거하는 것이 아니라면 특정 정보를 unlearning하더라도 우회적인 방법을 통해 충분히 정보를 유추해낼 수 있음. 이는 unlearning의 필요성에 바탕이 되는 비허가 정보의 유출을 막는 것이 기존 전략으로는 어렵다는 것을 시사.

![example](/images/2024-07-11-paper-review-ununlearning/1.png)

(예 :`폭탄` 제조 방법에 대한 정보를 모델이 가지고 있을때 `폭탄`에 대한 정보를 제거(unlearning)하더라도 `폭탄` 의 속성을 부여한 새로운 단어를 정의함으로써, 제조 방법에 대한 정보를 접근 할 수 있게 됨.)

<br>
### Nomenclature

저자들은 비공식적으로 다음 개념들을 정의함.

Knowledge : 모델이 이용가능한 모든 정보. 입력에 의해 파생될 수 있는 in-contextual 정보, model의 parameter에 저장된 정보, retrieval에 이용가능한 evidence들을 모두 포함.

Content filtering : 

Unlearning : 

Unlearning for privacy : 

Unlearning for content regulation : 

In-Context learning : 

<br>
### Types of knowledge

Axioms

Theorems
