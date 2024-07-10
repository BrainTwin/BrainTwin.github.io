---
title: "Test_C"
categories:
  - Edge Case
tags:
  - content
  - css
  - edge case
  - html
  - layout
  - title
last_modified_at: 2024-07-10T14:10:02-05:00
---

I'm studying about the usage of the markdown language for posting.

A few things to check for:

  * Non-breaking text in the title should have no adverse effects on layout or functionality.
  * Check the browser window / tab title.

The following CSS property will help you support non-breaking text.

```css
word-wrap: break-word;
```
``` python
import numpy as np
arr0 = np.arange(10)
```
# Tree-Rings Watermarks: Invisible Fingerprints for Diffusion Images

[openreview.net](https://openreview.net/pdf?id=Z57JrmubNl)

### Diffusion Inversion

: Reverse diffusion process의 initial state $x_T$를 $x_0$로 부터 sampling하는 것.

(Reverse process와 Forward process가 서로 adjoint 되어 있음이 보장되면 가능.)

Learned reverse transition probabilistic model $\epsilon_\theta(x_t)$을 이용하여 opposite direction으로 이동할 수 있음.

$\hat x_0=D_\theta(x_T,0)\approx x_0$

Here, $D_\theta$ is reverse diffusion process.

This mechanism depends on the assumption that  $x_{t+1}-x_t\approx x_{t}-x_{t-1}$ (논문에 표기된 수식은 오타인 듯)

$$
x_{t+1} = \sqrt{\bar \alpha_{t+1}}\hat x_0^t + \sqrt{1-\bar \alpha_{t+1}}\epsilon_\theta(x_t).
$$

$D^\dagger_\theta$ denotes inversion process by above equation.

정리하자면, $\hat x_T=D^\dagger_\theta(x_0)\approx x_T$

### Tree-Ring Watermarking

: Choosing the initial noise state so that its Fourier transform contains a carefully constructed pattern near its center. (Center = Low frequency region) This pattern is called as ‘key’.

바로 $x_T$에 key를 삽입하면 결과 이미지에 알아챌만한 패턴이 나타날 수 있음. 

Fourier space를 이용하는 이유는 invariant property들이 잘 알려져 있음.
