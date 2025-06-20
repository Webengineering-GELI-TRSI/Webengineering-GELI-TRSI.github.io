---
title: "Deployment"
---

<!--more-->

## Aufgabenstellung:

 Erläuterung des Deployments und Hostings mit Begründung (Variantenentscheid)

Da wir in der Schule nur diese zwei angeschaut haben, werden diese zwei auch die einzigen Nutzwertanalyse-Typen sein.

Github-Pages: https://pages.github.com/

Cloudflare: https://www.cloudflare.com/

In diesem Post geht es um die Wahl des einzusetzenden Hosting-Anbieters für automatische Deployments aus Github.

Um für diesen Fall eine Nutzwertanalyse zu machen, müssen wir zuerst die Anforderungen abklären:

| Anforderungs-ID | Anforderugen                                                 | Beschreibung                                                 |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| AF-1            | Ecograder Score: Greenhosting                                | Das Hosting muss gemäss Report vom Ecograder als Green Hosting eingestuf werden, sonst wird beim Projekt Punkte abgezogen. |
| AF-2            | Automatisches Deployment aus dem Git Repository              | Das Hosting muss Git Pushs erkennen können und die Webseite gleich neu publishen. |
| AF-3            | Kompatibilität vom Hosting-Anbieter mit dem Static Site Generator | Die gewählte Hosting Lösung sollte mit dem Static Site Generator umgehen können. |
| AF-4            | Einfachheit                                                  | Wir haben nicht besonders viel Zeit, um das Projekt umzusetzen, so soll der Static Site Generator möglichst einfach einzusetzen und zu benutzen sein. |



Nutzwertanalyse: Deployments und Hosting

| **Kriterium**                | **Gewichtung** | **Pages Github (Bewertung 1-5)** | **Pages Github(Gewichteter Wert)** | **Cloudflare (Bewertung 1-5)** | **Cloudflare (Gewichteter Wert)** |
| ---------------------------- | -------------- | -------------------------------- | ---------------------------------- | ------------------------------ | --------------------------------- |
| Ecograde-Score: Greenhosting | 5              | 0                                | 0                                  | 5                              | 25                                |
| Automatisches Deployment     | 5              | 5                                | 25                                 | 5                              | 25                                |
| Kompatibilität               | 5              | 5                                | 25                                 | 5                              | 25                                |
| Einfachheit                  | 3              | 5                                | 15                                 | 5                              | 15                                |
| **Total**                    |                |                                  | **65**                             |                                | **90**                            |

Ecograde-Score:

- Pages Github: Rot: Ist Anscheinend nicht mit Grünem Strom betrieben. Keine Infos gefunden
- Cloudflare: Grün: Ist anscheinend mit erneuerbarem Strom betrieben. https://blog.cloudflare.com/cloudflare-committed-to-building-a-greener-internet/

Automatisches Deployment:

- Pages Github: Ja, möglich https://github.com/marketplace/actions/deploy-to-github-pages

- Cloudflare: Ja möglich https://developers.cloudflare.com/pages/configuration/git-integration/

Kompatibilität:

- Pages Github: https://gohugo.io/host-and-deploy/host-on-github-pages/
- Cloudflare: https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/

Einfachheit:

Wir haben beide Varianten getestet, und bei beiden ist die Implementation mit Github Code und Hugo super einfach:

- Pages Github: Top
- Cloudflare: Top



Hier kam aus Resultat Cloudflare heraus. Der Grund war ganz klar, dass sonst der Ecograde-Score unter 80 liegen würde. Und da dies eine Anforderung ist, muss es zwingen eingehalten werden. Technisch gesehen, hätte Github Pages locker mithalten können. 
