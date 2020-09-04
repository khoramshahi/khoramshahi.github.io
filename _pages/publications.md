---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}



{% for post in site.publications reversed %}
  {% include publication-single.html bib=post.bib%}
{% endfor %}


<!-- run the script after creating the buttons -->
<script src="/assets/js/copyBib.js"></script>


