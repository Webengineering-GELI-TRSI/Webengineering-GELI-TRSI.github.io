---
title: "Evaluation vom Static Site Generator"
---

<!--more-->

In diesem Post geht es um die Wahl des einzusetzenden Static Site Generator Tools.

Um für diesen Fall eine Nutzwertanalyse zu machen, müssen wir zuerst die Anforderungen abklären:

| Anforderungs-ID | Anforderugen                                                | Beschreibung                                                 |
| --------------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| AF-1            | Rendering aus Markdown-Files                                | Der Static Site Generator muss in der Lage sein aus Markdown Files eine Webseite zu rendern. |
| AF-2            | Implementation von Meta-Tags                                | Es muss möglich sein mit Hilfe des Static Site Generators Meta Tags zu implementieren. |
| AF-3            | Kompatibilität von Cloudflare mit dem Static Site Generator | Die gewählte Hosting Lösung sollte mit dem Static Site Generator umgehen können. |
| AF-4            | Einfachheit                                                 | Wir haben nicht besonders viel Zeit, um das Projekt umzusetzen, so soll der Static Site Generator möglichst einfach einzusetzen und zu benutzen sein. |



Für die Wahl haben wir uns für die ersten 3 platzierten Site Generator von der Jamstack Webpage entschieden. Sollte keiner dieser Site Generator passen, nehmen wir natürlich weitere für unsere Nutzwertanalyse. Aber wie bereits erwähnt, die Zeit des Projektes war begrenzt.

Quelle: https://jamstack.org/generators/

- Platz 1: Next.js (https://jamstack.org/generators/next/)
- Platz 2: Hugo (https://jamstack.org/generators/hugo/)
- Platz 3: Docusaurus (https://jamstack.org/generators/docusaurus/)



#### Variantenentscheid (SSG)

| **Kriterium**             | **Gewichtung** | **Next.js (Bewertung 1-5)** | **Next.js  (Gewichteter Wert)** | **Hugo (Bewertung 1-5)** | **Hugo (Gewichteter Wert)** | **Docusaurus (Bewertung 1-5)** | **Docusaurus (Gewichteter Wert)** |
| ------------------------- | -------------- | --------------------------- | ------------------------------- | ------------------------ | --------------------------- | ------------------------------ | --------------------------------- |
| Markdown-Rendering        | 5              | 5                           | 25                              | 5                        | 25                          | 5                              | 25                                |
| Implementation Meta-Tags  | 5              | 5                           | 25                              | 5                        | 25                          | 5                              | 25                                |
| Cloudflare-Kompatibilität | 5              | 5                           | 25                              | 5                        | 25                          | 5                              | 25                                |
| Einfachheit               | 3              | 2                           | 6                               | 2                        | 6                           | 4                              | 12                                |
| Wissen bereits vorhanden. | 3              | 0                           | 0                               | 5                        | 15                          | 0                              | 0                                 |
| **Total**                 |                |                             | **81**                          |                          | **90**                      |                                | **87**                            |

**Markdown-Rendering:** 

- Next.js: Möglich, es muss aber die **remark** Libary installiert werden. Quelle: https://nextjs.org/learn/pages-router/dynamic-routes-render-markdown
- Hugo: Ja: https://gohugo.io/content-management/formats/
- Docusarurus: Ja https://docusaurus.io/docs/markdown-features



**Implementation Meta-Tags:** 

- Next.js: Ja mit der Metadata API: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- Hugo: ja ist möglich: https://discourse.gohugo.io/t/meta-description-attribute/3922
- Docusaurus: Ja https://docusaurus.io/docs/seo

**Cloudflare Kompatibilität:**

- Next.js: Ja https://developers.cloudflare.com/pages/framework-guides/nextjs/
- Hugo: Ja https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/
- Docusaurus: Ja https://developers.cloudflare.com/pages/framework-guides/deploy-a-docusaurus-site/

**Einfachheit:**

Pseudo-Kriterium, hier ist es schwierig eine genaue Aussage zu machen, wir können nur alle drei SSG's selbst implementieren und danach eine Aussage treffen. Da wir aber keine Zeit haben, bewerten wir alle als kompliziert ausser Docusaurus

- Next.js: Gemäss Reddit, ist es eher schwierig Next.js zu implementieren, besonders am Anfang. https://www.reddit.com/r/nextjs/comments/1g3hcq1/whats_the_biggest_challenge_you_faced_when/
- Hugo: https://www.reddit.com/r/gohugo/comments/d8oeh1/totally_frustrated_with_hugo_stymied/
- Docusaurus: https://docusaurus.io/docs

**Wissen bereits vorhanden:**

- Next.js: Nein
- Hugo: Ja
- Docusaurus: Nein



Somit hat in dieser Nutzwertanalyse **Hugo** gewonnen und wird nun implementiert. Im weiteren Verlauf des Projektes würden man dann ständig versuchen Hugo zu challengen, um zu prüfen ob nicht eine andere SSG besser wäre.
