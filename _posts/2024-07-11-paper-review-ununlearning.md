---
title: "UnUnlearning: Unlearning is not sufficient for content regulation in advanced generative AI for algebra"
categories:
  - Paper Review
tags:
  - unlearning
image:
  path: /images/main.png
  thumbnail: /images/2024-07-11-paper-review-ununlearning/thumbnail.png

# last_modified_at: 2024-07-20
---

## Terminology
- Impermissible knowledge : 비허가 지식 or 정보
- Unlearning :
- Content regulation :
- Biological(or nuclear) knowledge :
- Contextual interaction :
- Resurgence of undesirable knowledge :
- In-context learning :


## Main Argument

이 논문에서 저자들은 기존 unlearning schemes의 feasibility를 논의하고자함. 엄밀하게는 model이 가진 특정 정보의 규제(specific information regulation)가 unlearning으로 가능한지 의혹을 제기.

In-context learning 관점에서 특정 word는 다른 정보들의 조합으로 표현. 

![knowledge](/images/2024-07-11-paper-review-ununlearning/0.png)

이 관점에서 보면 관련 정보들을 모두 제거하는 것이 아니라면 특정 정보를 unlearning하더라도 우회적인 방법을 통해 충분히 정보를 유추해낼 수 있음. 이는 unlearning의 필요성에 바탕이 되는 비허가 정보의 유출을 막는 것이 기존 전략으로는 어렵다는 것을 시사.

![example](/images/2024-07-11-paper-review-ununlearning/1.png)

(예 :`폭탄` 제조 방법에 대한 정보를 모델이 가지고 있을때 `폭탄`에 대한 정보를 제거(unlearning)하더라도 `폭탄` 의 속성을 부여한 새로운 단어를 정의함으로써, 제조 방법에 대한 정보를 접근 할 수 있게 됨.)

## Nomenclature

저자들은 비공식적으로 다음 개념들을 정의함.

Knowledge : 모델이 이용가능한 모든 정보. 입력에 의해 파생될 수 있는 in-contextual 정보, model의 parameter에 저장된 정보, retrieval에 이용가능한 evidence들을 모두 포함.

Content filtering : 

Unlearning : 

Unlearning for privacy : 

Unlearning for content regulation : 

In-Context learning : 

## Types of knowledge

Axioms

Theorems