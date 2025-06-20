Security Header Implementation:



Test: 1



![image-20250612093109154](/home/str/.var/app/io.typora.Typora/config/Typora/typora-user-images/image-20250612093109154.png)



### Implement Security Headers

Unter diesem Pfad: /home/str/GIT/Webengineering-GELI-TRSI.github.io/static die Datei _headers erstellen mit folgendem Inhalt



`/*
    X-Frame-Options: DENY
    X-Content-Type-Options: nosniff
    Referrer-Policy: strict-origin-when-cross-origin
    Strict-Transport-Security: max-age=63072000
    Content-Security-Policy: default-src 'self'
    Cross-Origin-Opener-Policy: same-origin
    Cross-Origin-Resource-Policy: same-site
    Permissions-Policy: geolocation=(), camera=(), microphone=(), interest-cohort=()`



Danach sieht der Header Check folgendermassen aus:



![image-20250612102446244](/home/str/.var/app/io.typora.Typora/config/Typora/typora-user-images/image-20250612102446244.png)